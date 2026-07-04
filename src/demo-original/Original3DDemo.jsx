import React, { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { DEFAULT_CHSH_FIT_MODEL, loadFitModel, predictCounts } from "./model/chshPredictor.js";

const EXPERIMENT_DEFAULTS = {
  emissionRate: 4.2,
  pumpPower: 72,
  polarizerA: 0,
  polarizerB: 22.5,
  alignment: 92,
  compensationEnabled: true,
  compensationStrength: 100,
  filterBandwidth: 3,
  coincidenceWindow: 5,
  noiseLevel: 2,
};

const toRad = (value) => (value * Math.PI) / 180;
const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

function toPredictionParams(settings, elapsed = 0) {
  const thetaA = Number(settings.polarizerA ?? EXPERIMENT_DEFAULTS.polarizerA);
  const thetaB = Number(settings.polarizerB ?? EXPERIMENT_DEFAULTS.polarizerB);
  return {
    pumpPower: settings.pumpPower,
    thetaA,
    thetaB,
    thetaAForS: thetaA,
    thetaAPrime: (thetaA + 45) % 180,
    thetaBForS: thetaB,
    thetaBPrime: (thetaB + 45) % 180,
    alignment: settings.alignment,
    compensationEnabled: settings.compensationEnabled,
    compensationStrength: settings.compensationStrength,
    filterBandwidth: settings.filterBandwidth,
    coincidenceWindow: settings.coincidenceWindow,
    noiseLevel: settings.noiseLevel,
    fluctuationEnabled: elapsed > 0,
    fluctuationSeed: Math.floor(elapsed * 5),
  };
}

function probabilityFromCorrelation(eValue) {
  return clamp((1 + eValue) / 2, 0.04, 0.96);
}

function estimateCounts(settings, model = DEFAULT_CHSH_FIT_MODEL, elapsed = 0) {
  const prediction = predictCounts(toPredictionParams(settings, elapsed), model);
  return {
    detectorA: prediction.singlesA,
    detectorB: prediction.singlesB,
    coincidence: prediction.coincidenceCurrent,
    probability: probabilityFromCorrelation(prediction.ECurrent),
    visibility: prediction.visibility,
    ECurrent: prediction.ECurrent,
    S: prediction.chsh.S,
    SStd: prediction.chsh.SStd,
    violated: prediction.chsh.violated,
    accidental: prediction.accidental,
  };
}

function makeTube(curve, radius, color, opacity) {
  const geometry = new THREE.TubeGeometry(curve, 96, radius, 12, false);
  const material = new THREE.MeshBasicMaterial({
    color,
    transparent: opacity < 1,
    opacity,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });

  return new THREE.Mesh(geometry, material);
}

function makeTextSprite(text, options = {}) {
  const {
    color = "#e5eef8",
    background = "rgba(6, 14, 26, 0.72)",
    width = 560,
    height = 150,
    scale = [1.8, 0.48, 1],
    fontSize = 46,
  } = options;
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext("2d");
  const texture = new THREE.CanvasTexture(canvas);
  texture.minFilter = THREE.LinearFilter;
  const material = new THREE.SpriteMaterial({
    map: texture,
    transparent: true,
    depthTest: false,
  });
  const sprite = new THREE.Sprite(material);
  sprite.scale.set(...scale);
  sprite.userData.label = { canvas, context, texture, options: { color, background, fontSize } };
  updateTextSprite(sprite, text);
  return sprite;
}

function updateTextSprite(sprite, text) {
  const { canvas, context, texture, options } = sprite.userData.label;
  const { color, background, fontSize } = options;
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = background;
  roundRect(context, 10, 18, canvas.width - 20, canvas.height - 36, 28);
  context.fill();
  context.font = `600 ${fontSize}px "Microsoft YaHei", "Noto Sans SC", sans-serif`;
  context.fillStyle = color;
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillText(text, canvas.width / 2, canvas.height / 2 + 2);
  texture.needsUpdate = true;
}

function roundRect(context, x, y, width, height, radius) {
  context.beginPath();
  context.moveTo(x + radius, y);
  context.lineTo(x + width - radius, y);
  context.quadraticCurveTo(x + width, y, x + width, y + radius);
  context.lineTo(x + width, y + height - radius);
  context.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  context.lineTo(x + radius, y + height);
  context.quadraticCurveTo(x, y + height, x, y + height - radius);
  context.lineTo(x, y + radius);
  context.quadraticCurveTo(x, y, x + radius, y);
  context.closePath();
}

function orientNormalToVector(object, vector) {
  const normal = new THREE.Vector3(0, 0, 1);
  object.quaternion.setFromUnitVectors(normal, vector.clone().normalize());
}

function createPolarizer(name, position, tangent, tint) {
  const group = new THREE.Group();
  group.position.copy(position);
  orientNormalToVector(group, tangent);

  const rotator = new THREE.Group();
  group.add(rotator);

  const disc = new THREE.Mesh(
    new THREE.CircleGeometry(0.48, 80),
    new THREE.MeshBasicMaterial({
      color: tint,
      transparent: true,
      opacity: 0.34,
      side: THREE.DoubleSide,
      depthWrite: false,
    }),
  );
  rotator.add(disc);

  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(0.49, 0.014, 10, 96),
    new THREE.MeshBasicMaterial({ color: 0xbdeaff, transparent: true, opacity: 0.78 }),
  );
  rotator.add(ring);

  const axis = new THREE.Mesh(
    new THREE.BoxGeometry(0.86, 0.038, 0.035),
    new THREE.MeshBasicMaterial({ color: 0xffffff }),
  );
  rotator.add(axis);

  const label = makeTextSprite(`${name} 0°`, {
    scale: [1.24, 0.33, 1],
    fontSize: 42,
    background: "rgba(9, 20, 36, 0.86)",
  });
  label.position.copy(position.clone().add(new THREE.Vector3(0, 0.74, 0)));

  return { group, rotator, label };
}

function createDetector(name, position, color) {
  const group = new THREE.Group();
  group.position.copy(position);

  const body = new THREE.Mesh(
    new THREE.BoxGeometry(0.56, 0.62, 0.74),
    new THREE.MeshStandardMaterial({
      color: 0x101827,
      metalness: 0.45,
      roughness: 0.35,
      emissive: color,
      emissiveIntensity: 0.08,
    }),
  );
  group.add(body);

  const lens = new THREE.Mesh(
    new THREE.CircleGeometry(0.22, 48),
    new THREE.MeshBasicMaterial({
      color,
      transparent: true,
      opacity: 0.72,
      blending: THREE.AdditiveBlending,
    }),
  );
  lens.position.x = -0.31;
  lens.rotation.y = -Math.PI / 2;
  group.add(lens);

  const flash = new THREE.Mesh(
    new THREE.SphereGeometry(0.17, 24, 16),
    new THREE.MeshBasicMaterial({
      color,
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    }),
  );
  flash.position.x = -0.34;
  group.add(flash);

  const light = new THREE.PointLight(color, 0, 2.4);
  light.position.set(-0.24, 0.1, 0);
  group.add(light);

  const label = makeTextSprite(name, { scale: [1.1, 0.3, 1], fontSize: 42 });
  label.position.copy(position.clone().add(new THREE.Vector3(0.05, -0.64, 0)));

  return { group, body, lens, flash, light, label };
}

function disposeObject(object) {
  if (object.geometry) {
    object.geometry.dispose();
  }

  const materials = Array.isArray(object.material) ? object.material : [object.material];
  materials.filter(Boolean).forEach((material) => {
    Object.values(material).forEach((value) => {
      if (value?.isTexture) {
        value.dispose();
      }
    });
    material.dispose();
  });
}

export default function Original3DDemo({ onBackToPhoton }) {
  const mountRef = useRef(null);
  const paramsRef = useRef(EXPERIMENT_DEFAULTS);
  const fitModelRef = useRef(DEFAULT_CHSH_FIT_MODEL);
  const [params, setParams] = useState(EXPERIMENT_DEFAULTS);
  const [fitModel, setFitModel] = useState(DEFAULT_CHSH_FIT_MODEL);
  const [modelStatus, setModelStatus] = useState("使用内置拟合模型");
  const [stats, setStats] = useState(() => estimateCounts(EXPERIMENT_DEFAULTS, DEFAULT_CHSH_FIT_MODEL));

  const angleGap = useMemo(
    () => Math.abs((((params.polarizerA - params.polarizerB + 90) % 180) + 180) % 180 - 90),
    [params.polarizerA, params.polarizerB],
  );

  useEffect(() => {
    paramsRef.current = params;
    setStats(estimateCounts(params, fitModelRef.current));
  }, [params]);

  useEffect(() => {
    fitModelRef.current = fitModel;
    setStats(estimateCounts(paramsRef.current, fitModel));
  }, [fitModel]);

  useEffect(() => {
    let cancelled = false;
    loadFitModel().then(({ model, fromNetwork }) => {
      if (cancelled) return;
      setFitModel(model);
      setModelStatus(fromNetwork ? "已加载 Excel 拟合模型" : "使用内置拟合模型");
    });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) {
      return undefined;
    }

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x05070d);
    scene.fog = new THREE.Fog(0x05070d, 12, 23);

    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(2.1, 4.9, 12.1);

    const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.target.set(-0.35, -0.32, 0);
    controls.minDistance = 10.2;
    controls.maxDistance = 19;
    controls.maxPolarAngle = Math.PI * 0.49;
    const defaultCameraDirection = camera.position.clone().sub(controls.target).normalize();

    scene.add(new THREE.AmbientLight(0x7d96b8, 0.55));
    const keyLight = new THREE.DirectionalLight(0xd7ecff, 1.65);
    keyLight.position.set(-2.5, 4, 2.5);
    scene.add(keyLight);
    const fillLight = new THREE.PointLight(0x5eead4, 1.2, 8);
    fillLight.position.set(1.5, 1.2, 0);
    scene.add(fillLight);

    const table = new THREE.Mesh(
      new THREE.PlaneGeometry(12, 5.8),
      new THREE.MeshStandardMaterial({
        color: 0x07111f,
        metalness: 0.25,
        roughness: 0.72,
      }),
    );
    table.rotation.x = -Math.PI / 2;
    table.position.y = -0.55;
    scene.add(table);

    const grid = new THREE.GridHelper(12, 24, 0x244863, 0x162637);
    grid.position.y = -0.53;
    scene.add(grid);

    const pumpCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-5.2, 0, 0),
      new THREE.Vector3(-3.7, 0, 0),
      new THREE.Vector3(-2.25, 0, 0),
    ]);
    const upperCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-2.0, 0.05, 0),
      new THREE.Vector3(-0.9, 0.13, 0.72),
      new THREE.Vector3(1.2, 0.16, 1.28),
      new THREE.Vector3(3.2, 0.12, 1.78),
      new THREE.Vector3(4.68, 0.1, 2.08),
    ]);
    const lowerCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-2.0, 0.05, 0),
      new THREE.Vector3(-0.9, 0.13, -0.72),
      new THREE.Vector3(1.2, 0.16, -1.28),
      new THREE.Vector3(3.2, 0.12, -1.78),
      new THREE.Vector3(4.68, 0.1, -2.08),
    ]);

    scene.add(makeTube(pumpCurve, 0.03, 0x9f7aea, 0.92));
    scene.add(makeTube(pumpCurve, 0.11, 0x7c3aed, 0.12));
    scene.add(makeTube(upperCurve, 0.025, 0x67e8f9, 0.86));
    scene.add(makeTube(upperCurve, 0.09, 0x0891b2, 0.12));
    scene.add(makeTube(lowerCurve, 0.025, 0xa7f3d0, 0.86));
    scene.add(makeTube(lowerCurve, 0.09, 0x22c55e, 0.12));

    const laser = new THREE.Group();
    laser.position.set(-5.55, 0, 0);
    const laserBody = new THREE.Mesh(
      new THREE.CylinderGeometry(0.24, 0.24, 0.72, 32),
      new THREE.MeshStandardMaterial({ color: 0x202938, metalness: 0.6, roughness: 0.28 }),
    );
    laserBody.rotation.z = Math.PI / 2;
    laser.add(laserBody);
    const laserLens = new THREE.Mesh(
      new THREE.CylinderGeometry(0.18, 0.18, 0.045, 32),
      new THREE.MeshBasicMaterial({ color: 0xa78bfa }),
    );
    laserLens.rotation.z = Math.PI / 2;
    laserLens.position.x = 0.38;
    laser.add(laserLens);
    scene.add(laser);

    const laserLabel = makeTextSprite("405 nm 激光器", { scale: [1.35, 0.36, 1] });
    laserLabel.position.set(-5.4, -0.55, 0);
    scene.add(laserLabel);

    const crystal = new THREE.Mesh(
      new THREE.BoxGeometry(0.42, 0.8, 0.42),
      new THREE.MeshPhysicalMaterial({
        color: 0xfacc15,
        transparent: true,
        opacity: 0.72,
        roughness: 0.08,
        transmission: 0.22,
        thickness: 0.35,
      }),
    );
    crystal.position.set(-2.02, 0.05, 0);
    crystal.rotation.y = Math.PI / 5;
    scene.add(crystal);

    const crystalLabel = makeTextSprite("BBO 非线性晶体", { scale: [1.42, 0.36, 1] });
    crystalLabel.position.set(-2.05, -0.58, 0);
    scene.add(crystalLabel);

    const upperPolarizer = createPolarizer("偏振片 A", upperCurve.getPoint(0.56), upperCurve.getTangent(0.56), 0x67e8f9);
    const lowerPolarizer = createPolarizer("偏振片 B", lowerCurve.getPoint(0.56), lowerCurve.getTangent(0.56), 0xa7f3d0);
    scene.add(upperPolarizer.group, upperPolarizer.label, lowerPolarizer.group, lowerPolarizer.label);

    const upperDetector = createDetector("探测器 D1", new THREE.Vector3(5.02, 0.1, 2.12), 0x67e8f9);
    const lowerDetector = createDetector("探测器 D2", new THREE.Vector3(5.02, 0.1, -2.12), 0xa7f3d0);
    scene.add(upperDetector.group, upperDetector.label, lowerDetector.group, lowerDetector.label);

    const detectorBridge = makeTextSprite("符合计数", {
      color: "#cffafe",
      background: "rgba(8, 47, 73, 0.8)",
      scale: [1.0, 0.3, 1],
    });
    detectorBridge.position.set(5.12, 0.95, 0);
    scene.add(detectorBridge);

    const bridgeLine = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(5.02, 0.45, 1.82),
        new THREE.Vector3(5.22, 0.72, 0),
        new THREE.Vector3(5.02, 0.45, -1.82),
      ]),
      new THREE.LineDashedMaterial({ color: 0x8ed7ff, dashSize: 0.08, gapSize: 0.06, transparent: true, opacity: 0.7 }),
    );
    bridgeLine.computeLineDistances();
    scene.add(bridgeLine);

    const photonGeometry = new THREE.SphereGeometry(0.075, 18, 14);
    const photons = Array.from({ length: 9 }, (_, index) => {
      const upper = new THREE.Mesh(
        photonGeometry,
        new THREE.MeshBasicMaterial({
          color: 0x67e8f9,
          transparent: true,
          blending: THREE.AdditiveBlending,
        }),
      );
      const lower = new THREE.Mesh(
        photonGeometry,
        new THREE.MeshBasicMaterial({
          color: 0xa7f3d0,
          transparent: true,
          blending: THREE.AdditiveBlending,
        }),
      );
      scene.add(upper, lower);
      return { upper, lower, offset: index / 9 };
    });

    let animationFrame = 0;
    let previousA = Number.NaN;
    let previousB = Number.NaN;
    let lastStatsAt = 0;
    const clock = new THREE.Clock();
    const pressedKeys = new Set();
    const keyPan = new THREE.Vector3();
    const cameraForward = new THREE.Vector3();
    const screenRight = new THREE.Vector3();
    const screenUp = new THREE.Vector3();
    const targetBounds = new THREE.Box3(
      new THREE.Vector3(-1.8, -0.9, -1.25),
      new THREE.Vector3(1.8, 1.1, 1.25),
    );

    const isTypingTarget = (target) =>
      target instanceof HTMLElement &&
      (target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.tagName === "SELECT" ||
        target.isContentEditable);

    const handleKeyDown = (event) => {
      const key = event.key.toLowerCase();
      if (!["w", "a", "s", "d"].includes(key) || isTypingTarget(event.target)) {
        return;
      }

      pressedKeys.add(key);
      event.preventDefault();
    };

    const handleKeyUp = (event) => {
      pressedKeys.delete(event.key.toLowerCase());
    };

    const handleWindowBlur = () => pressedKeys.clear();

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    window.addEventListener("blur", handleWindowBlur);

    const resize = () => {
      const { clientWidth, clientHeight } = container;
      renderer.setSize(clientWidth, clientHeight, false);
      camera.aspect = clientWidth / Math.max(clientHeight, 1);
      camera.fov = camera.aspect < 1.15 ? 50 : camera.aspect < 1.45 ? 46 : 42;
      controls.minDistance = camera.aspect < 1.15 ? 15.8 : camera.aspect < 1.45 ? 13.6 : 12.8;
      controls.maxDistance = Math.max(21, controls.minDistance + 6);
      const currentDistance = camera.position.distanceTo(controls.target);
      if (currentDistance < controls.minDistance) {
        camera.position.copy(controls.target).add(defaultCameraDirection.clone().multiplyScalar(controls.minDistance));
      }
      camera.updateProjectionMatrix();
    };
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);
    resize();

    const animate = () => {
      const delta = Math.min(clock.getDelta(), 0.05);
      const elapsed = clock.elapsedTime;
      const live = paramsRef.current;
      const liveStats = estimateCounts(live, fitModelRef.current, elapsed);
      const probability = liveStats.probability;
      const duration = THREE.MathUtils.lerp(3.0, 1.18, (live.emissionRate - 1) / 7);
      const pumpPulse = 0.55 + 0.45 * Math.sin(elapsed * 3.2);

      if (pressedKeys.size > 0) {
        camera.getWorldDirection(cameraForward);
        screenRight.crossVectors(cameraForward, camera.up).normalize();
        screenUp.crossVectors(screenRight, cameraForward).normalize();
        keyPan.set(0, 0, 0);

        if (pressedKeys.has("a")) keyPan.sub(screenRight);
        if (pressedKeys.has("d")) keyPan.add(screenRight);
        if (pressedKeys.has("w")) keyPan.add(screenUp);
        if (pressedKeys.has("s")) keyPan.sub(screenUp);

        if (keyPan.lengthSq() > 0) {
          keyPan.normalize().multiplyScalar(2.15 * delta);
          const previousTarget = controls.target.clone();
          controls.target.add(keyPan);
          controls.target.clamp(targetBounds.min, targetBounds.max);
          camera.position.add(controls.target.clone().sub(previousTarget));
        }
      }

      if (live.polarizerA !== previousA) {
        previousA = live.polarizerA;
        updateTextSprite(upperPolarizer.label, `偏振片 A ${Number(live.polarizerA).toFixed(1)}°`);
      }
      if (live.polarizerB !== previousB) {
        previousB = live.polarizerB;
        updateTextSprite(lowerPolarizer.label, `偏振片 B ${Number(live.polarizerB).toFixed(1)}°`);
      }

      upperPolarizer.rotator.rotation.z = toRad(live.polarizerA);
      lowerPolarizer.rotator.rotation.z = toRad(live.polarizerB);

      laserLens.scale.setScalar(1 + pumpPulse * live.pumpPower * 0.003);
      crystal.scale.setScalar(1 + 0.025 * Math.sin(elapsed * 4.6));

      let flashA = 0;
      let flashB = 0;
      photons.forEach((pair) => {
        const t = (elapsed / duration + pair.offset) % 1;
        pair.upper.position.copy(upperCurve.getPoint(t));
        pair.lower.position.copy(lowerCurve.getPoint(t));
        const fadeIn = clamp(t / 0.08, 0, 1);
        const fadeOut = clamp((1 - t) / 0.08, 0, 1);
        const opacity = Math.min(fadeIn, fadeOut);
        pair.upper.material.opacity = opacity;
        pair.lower.material.opacity = opacity;
        const detectorPhase = t > 0.9 ? (t - 0.9) / 0.1 : 0;
        flashA = Math.max(flashA, detectorPhase);
        flashB = Math.max(flashB, detectorPhase * (0.6 + probability * 0.6));
      });

      const flashScaleA = 1 + flashA * 1.9;
      const flashScaleB = 1 + flashB * 1.9;
      upperDetector.flash.material.opacity = flashA * 0.82;
      lowerDetector.flash.material.opacity = flashB * 0.82;
      upperDetector.flash.scale.setScalar(flashScaleA);
      lowerDetector.flash.scale.setScalar(flashScaleB);
      upperDetector.light.intensity = flashA * 2.6;
      lowerDetector.light.intensity = flashB * 2.6;
      upperDetector.body.material.emissiveIntensity = 0.08 + flashA * 0.9;
      lowerDetector.body.material.emissiveIntensity = 0.08 + flashB * 0.9;

      if (elapsed - lastStatsAt > 0.18) {
        lastStatsAt = elapsed;
        setStats(liveStats);
      }

      controls.update();
      renderer.render(scene, camera);
      animationFrame = window.requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      window.removeEventListener("blur", handleWindowBlur);
      controls.dispose();
      scene.traverse(disposeObject);
      renderer.dispose();
      if (renderer.domElement.parentElement === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  const setParam = (key, value) => {
    setParams((current) => ({ ...current, [key]: Number(value) }));
  };

  return (
    <main className="original-three-demo min-h-screen bg-[#05070d] text-slate-100">
      <div className="original-three-layout mx-auto grid min-h-screen max-w-[1400px] items-center gap-4 px-4 py-4 lg:grid-cols-[minmax(0,1fr)_340px]">
        <section className="original-three-stage-card h-[min(740px,calc(100vh-32px))] min-h-[520px] overflow-hidden rounded-lg border border-cyan-400/20 bg-slate-950/70 shadow-2xl shadow-cyan-950/30">
          <div className="flex items-center justify-between border-b border-slate-800 px-4 py-3">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/80">Three.js optical bench</p>
              <h1 className="mt-1 text-xl font-semibold text-white sm:text-2xl">3D Demo</h1>
            </div>
            <button
              type="button"
              onClick={onBackToPhoton}
              className="rounded-md border border-slate-700 px-3 py-2 text-sm text-slate-200 transition hover:border-cyan-300 hover:text-cyan-100"
            >
              返回双光子 Demo
            </button>
          </div>
          <div ref={mountRef} className="original-three-canvas h-[calc(100%_-_78px)] min-h-[440px] w-full" />
        </section>

        <aside className="original-three-controls space-y-4">
          <section className="rounded-lg border border-slate-800 bg-slate-950 p-4">
            <h2 className="text-base font-semibold text-white">实验参数</h2>
            <div className="mt-4 space-y-4">
              <ControlSlider
                label="光子动画频率"
                value={params.emissionRate}
                min={1}
                max={8}
                step={0.1}
                unit=" pairs/s"
                onChange={(value) => setParam("emissionRate", value)}
              />
              <ControlSlider
                label="泵浦光功率"
                value={params.pumpPower}
                min={20}
                max={100}
                step={1}
                unit="%"
                onChange={(value) => setParam("pumpPower", value)}
              />
              <ControlSlider
                label="偏振片 A 角度"
                value={params.polarizerA}
                min={0}
                max={180}
                step={0.5}
                unit="°"
                onChange={(value) => setParam("polarizerA", value)}
              />
              <ControlSlider
                label="偏振片 B 角度"
                value={params.polarizerB}
                min={0}
                max={180}
                step={0.5}
                unit="°"
                onChange={(value) => setParam("polarizerB", value)}
              />
              <ControlSlider
                label="光路对准程度"
                value={params.alignment}
                min={20}
                max={100}
                step={1}
                unit="%"
                onChange={(value) => setParam("alignment", value)}
              />
              <ControlSlider
                label="符合时间窗口"
                value={params.coincidenceWindow}
                min={1}
                max={20}
                step={0.5}
                unit=" ns"
                onChange={(value) => setParam("coincidenceWindow", value)}
              />
            </div>
          </section>

          <section className="rounded-lg border border-slate-800 bg-slate-950 p-4">
            <h2 className="text-base font-semibold text-white">实时计数</h2>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <Metric label="D1" value={stats.detectorA} unit="counts/s" tone="cyan" />
              <Metric label="D2" value={stats.detectorB} unit="counts/s" tone="green" />
              <Metric label="符合" value={stats.coincidence} unit="pairs/s" tone="amber" />
              <Metric label="CHSH S" value={stats.S.toFixed(2)} unit={stats.violated ? "S > 2" : "S ≤ 2"} tone="violet" />
            </div>
            <div className="mt-4 rounded-md border border-slate-800 bg-slate-900/70 p-3 text-sm text-slate-300">
              <div className="flex items-center justify-between">
                <span>E(θA,θB)</span>
                <span className="font-mono text-cyan-100">{stats.ECurrent.toFixed(3)}</span>
              </div>
              <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-800">
                <div
                  className="h-full rounded-full bg-cyan-300 transition-all"
                  style={{ width: `${Math.round(stats.visibility * 100)}%` }}
                />
              </div>
              <div className="mt-2 flex items-center justify-between gap-3 text-xs text-slate-400">
                <span>V={stats.visibility.toFixed(3)} · acc≈{stats.accidental.toFixed(1)}</span>
                <span>σS={stats.SStd.toFixed(3)} · Δθ={angleGap.toFixed(1)}°</span>
              </div>
              <p className="mt-3 text-xs leading-5 text-slate-400">
                计数与 S 值由实验数据拟合模型实时生成。{modelStatus}
              </p>
            </div>
          </section>

          <section className="rounded-lg border border-slate-800 bg-slate-950 p-4 text-sm leading-6 text-slate-300">
            <h2 className="text-base font-semibold text-white">模型说明</h2>
            <p className="mt-3">
              场景用 BBO 晶体处的成对发射表示 SPDC 过程。D1/D2、符合计数、E、V 与 CHSH S
              均调用和双光子纠缠 Demo 相同的 Excel 拟合预测模型，滑块只改变模型输入参数。
            </p>
          </section>
        </aside>
      </div>
    </main>
  );
}

function ControlSlider({ label, value, min, max, step, unit, onChange }) {
  return (
    <label className="block">
      <span className="mb-2 flex items-center justify-between gap-3 text-sm">
        <span className="text-slate-300">{label}</span>
        <span className="font-mono text-cyan-100">
          {Number(value).toFixed(step < 1 ? 1 : 0)}
          {unit}
        </span>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full accent-cyan-300"
      />
    </label>
  );
}

function Metric({ label, value, unit, tone }) {
  const tones = {
    cyan: "border-cyan-400/25 bg-cyan-400/10 text-cyan-100",
    green: "border-emerald-400/25 bg-emerald-400/10 text-emerald-100",
    amber: "border-amber-400/25 bg-amber-400/10 text-amber-100",
    violet: "border-violet-400/25 bg-violet-400/10 text-violet-100",
  };

  return (
    <div className={`rounded-md border p-3 ${tones[tone]}`}>
      <div className="text-xs uppercase tracking-[0.18em] opacity-70">{label}</div>
      <div className="mt-1 font-mono text-xl font-semibold">{value}</div>
      <div className="text-xs opacity-70">{unit}</div>
    </div>
  );
}
