import React from "react";
import Original3DDemo from "./Original3DDemo.jsx";
import OriginalPhotonDemo from "./OriginalPhotonDemo.jsx";

export default function OriginalDemoApp({ kind, navigate }) {
  if (kind === "three") {
    return <Original3DDemo onBackToPhoton={() => navigate("/demo/photon")} />;
  }

  return (
    <div className="original-demo-route">
      <OriginalPhotonDemo />
      <button
        type="button"
        onClick={() => navigate("/demo/three")}
        className="original-open-three fixed bottom-5 right-5 z-50 rounded-md bg-slate-950 px-4 py-3 text-sm font-semibold text-cyan-100 shadow-lg shadow-slate-900/30 ring-1 ring-cyan-300/30 transition hover:bg-slate-800"
      >
        打开 3D Demo
      </button>
    </div>
  );
}
