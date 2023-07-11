//@ts-nocheck
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { ImprovedNoise } from "three/examples/jsm/math/ImprovedNoise";

export default function Wormhole() {
  const mountRef = useRef(null);

  useEffect(() => {
    const canvas = mountRef.current;
    const w = window.innerWidth;
    const h = window.innerHeight;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);
    camera.position.set(0.5, 0.5, 15);
    const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
    renderer.setSize(w, h);

    const radius = 3;
    const tubeLength = 200;
    const tubeGeo = new THREE.CylinderGeometry(radius, radius, tubeLength, 64, 2048, true);
    const tubeVerts = tubeGeo.attributes.position;
    const colors = [];
    const noise = new ImprovedNoise();
    let p = new THREE.Vector3();
    let v3 = new THREE.Vector3();
    const noisefreq = 0.1;
    const noiseAmp = 0.5;
    const color = new THREE.Color();
    const hueNoiseFreq = 0.005;
    for (let i = 0; i < tubeVerts.count; i += 1) {
      p.fromBufferAttribute(tubeVerts, i);
      v3.copy(p);
      let vertexNoise = noise.noise(v3.x * noisefreq, v3.y * noisefreq, v3.z);
      v3.addScaledVector(p, vertexNoise * noiseAmp);
      tubeVerts.setXYZ(i, v3.x, p.y, v3.z);

      let colorNoise = noise.noise(v3.x * hueNoiseFreq, v3.y * hueNoiseFreq, i * 0.001 * hueNoiseFreq);
      color.setHSL(0.08 + colorNoise * 0.06, 1, 0.5);
      colors.push(color.r, color.g, color.b);
    }
    const mat = new THREE.PointsMaterial({ size: 0.03, vertexColors: true, opacity: 0.05 });

    function getTube(index) {
      const startPosZ = -tubeLength * index;
      const endPosZ = tubeLength;
      const resetPosZ = -tubeLength;
      const geo = new THREE.BufferGeometry();
      geo.setAttribute("position", tubeVerts);
      geo.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
      const points = new THREE.Points(geo, mat);
      points.rotation.x = Math.PI * 0.5;
      points.position.z = startPosZ;
      const speed = 0.2;
      function update() {
        points.rotation.y += 0.005;
        points.position.z += speed;
        if (points.position.z > endPosZ) {
          points.position.z = resetPosZ;
        }
      }
      return { points, update };
    }

    const tubeA = getTube(0);
    const tubeB = getTube(1);
    const tubes = [tubeA, tubeB];
    scene.add(tubeA.points, tubeB.points);

    function animate(t) {
      requestAnimationFrame(animate);
      tubes.forEach((tb) => tb.update());
      camera.position.x = Math.cos(t * 0.001) * 1.5;
      camera.position.y = Math.sin(t * 0.001) * 1.5;
      renderer.render(scene, camera);
    }

    animate(0);

    function handleWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }
    window.addEventListener("resize", handleWindowResize, false);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", handleWindowResize, false);
    }
  }, []);

  return <canvas ref={mountRef} className="webgl" />;
}