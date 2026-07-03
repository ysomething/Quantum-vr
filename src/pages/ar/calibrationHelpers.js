import * as THREE from 'three';

function createLine(points, material) {
  const geometry = new THREE.BufferGeometry().setFromPoints(points);
  return new THREE.Line(geometry, material);
}

export function createCalibrationHelpers({ anchorGroup, modelRoot, targetAspect = 820 / 1200 }) {
  const anchorHelpers = new THREE.Group();
  anchorHelpers.name = 'ar_anchor_calibration_helpers';
  anchorHelpers.visible = false;
  anchorGroup.add(anchorHelpers);

  const plane = new THREE.Mesh(
    new THREE.PlaneGeometry(1, targetAspect),
    new THREE.MeshBasicMaterial({
      color: 0x51ecff,
      transparent: true,
      opacity: 0.055,
      side: THREE.DoubleSide,
      depthWrite: false,
    }),
  );
  plane.name = 'target_image_plane_reference';
  plane.position.z = 0.006;
  anchorHelpers.add(plane);

  const frame = new THREE.LineSegments(
    new THREE.EdgesGeometry(plane.geometry),
    new THREE.LineBasicMaterial({
      color: 0x9ff7ff,
      transparent: true,
      opacity: 0.82,
      depthWrite: false,
    }),
  );
  frame.name = 'target_image_plane_frame';
  frame.position.copy(plane.position);
  anchorHelpers.add(frame);

  const crossWhite = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.9, depthWrite: false });
  const crossRed = new THREE.LineBasicMaterial({ color: 0xff3d5e, transparent: true, opacity: 0.92, depthWrite: false });
  const z = 0.018;
  const crossLength = 0.13;
  anchorHelpers.add(
    createLine([new THREE.Vector3(-crossLength, 0, z), new THREE.Vector3(crossLength, 0, z)], crossRed),
    createLine([new THREE.Vector3(0, -crossLength, z), new THREE.Vector3(0, crossLength, z)], crossWhite),
  );

  const axes = new THREE.AxesHelper(0.22);
  axes.name = 'target_anchor_axes_helper';
  axes.position.z = 0.03;
  anchorHelpers.add(axes);

  const modelHelpers = new THREE.Group();
  modelHelpers.name = 'ar_model_calibration_helpers';
  modelHelpers.visible = false;
  modelRoot.add(modelHelpers);

  const basePlane = new THREE.Mesh(
    new THREE.PlaneGeometry(7, 4.2),
    new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.075,
      side: THREE.DoubleSide,
      depthWrite: false,
    }),
  );
  basePlane.name = 'model_floor_base_reference';
  basePlane.rotation.x = -Math.PI / 2;
  basePlane.position.y = 0.018;
  modelHelpers.add(basePlane);

  const baseFrame = new THREE.LineSegments(
    new THREE.EdgesGeometry(basePlane.geometry),
    new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.48, depthWrite: false }),
  );
  baseFrame.name = 'model_floor_base_frame';
  baseFrame.rotation.copy(basePlane.rotation);
  baseFrame.position.copy(basePlane.position);
  modelHelpers.add(baseFrame);

  function setVisible(visible) {
    anchorHelpers.visible = visible;
    modelHelpers.visible = visible;
  }

  function dispose() {
    setVisible(false);
    anchorGroup.remove(anchorHelpers);
    modelRoot.remove(modelHelpers);
    anchorHelpers.traverse((object) => {
      object.geometry?.dispose?.();
      object.material?.dispose?.();
    });
    modelHelpers.traverse((object) => {
      object.geometry?.dispose?.();
      object.material?.dispose?.();
    });
  }

  return { anchorHelpers, modelHelpers, setVisible, dispose };
}
