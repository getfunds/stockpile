import { Canvas, useFrame, extend } from "@react-three/fiber";
import { PerspectiveCamera, useTexture } from "@react-three/drei";
import React from "react";
import { EffectComposer, RenderPass, ShaderPass, UnrealBloomPass } from "three-stdlib";
import { MeshStandardMaterial } from "three";
import CustomShaderMaterial from "three-custom-shader-material";
import styles from "@/styles/Gradient.module.css";

const fragmentShader = `
float aastep(in float threshold, in float value) {
  float afwidth = length(vec2(dFdx(value), dFdy(value))) * 0.70710678118654757;
  return 1.0 - smoothstep(threshold-afwidth, threshold+afwidth, value);
}
void main() {
  float lw = 5.0;
  float w;
  float gx = 1.0 + cos(vUv.x * 24.0 * 2.0 * PI - PI);
  w = fwidth(vUv.x) * lw;
  gx = aastep(w, gx);
  float gy = 1.0 + cos(vUv.y * 24.0 * 2.0 * PI - PI);
  w = fwidth(vUv.y) * lw;
  gy = aastep(w, gy);
  float grid = gx + gy;

  if (grid > 0.5) {
    csm_DiffuseColor = vec4(grid * 0.96862745098, grid * 0.32941176470, grid * 0.14901960784, 1.0);
  } else {
    csm_DiffuseColor = vec4(0.0, 0.0, 0.0, 0.0); 
  }
}
`;

extend({ EffectComposer, RenderPass, ShaderPass, UnrealBloomPass });

const Terrain = React.forwardRef((props, ref) => {
  const { z } = props;
  const materialRef = React.useRef();

  const [heightTexture, metalnessTexture] = useTexture(["displacement-7.png", "metalness-2.png"]);

  return (
    <mesh ref={ref} position={[0, 0, z]} rotation={[-Math.PI * 0.5, 0, 0]}>
      <planeBufferGeometry arrach="geometry" args={[1, 2, 24, 24]} />
      <CustomShaderMaterial
        ref={materialRef}
        baseMaterial={MeshStandardMaterial}
        fragmentShader={fragmentShader}
        displacementMap={heightTexture}
        displacementScale={0.144}
        metalnessMap={metalnessTexture}
        metalness={0.9}
        roughness={0.5}
        transparent={true}
      />
    </mesh>
  );
});

Terrain.displayName = "Terrain";

const Landscape = () => {
  const terrain1Ref = React.useRef();
  const terrain2Ref = React.useRef();

  useFrame((state) => {
    terrain1Ref.current.position.z = (state.clock.elapsedTime * 0.15) % 2;
    terrain2Ref.current.position.z = ((state.clock.elapsedTime * 0.15) % 2) - 2;
  });

  return (
    <>
      <Terrain ref={terrain1Ref} z={0} />
      <Terrain ref={terrain2Ref} z={-2} />
    </>
  );
};

const Light = () => {
  const spotlight1Ref = React.useRef();
  const spotlight2Ref = React.useRef();

  spotlight1Ref.current?.target.position.set([-0.25, 0.25, 0.25]);
  spotlight2Ref.current?.target.position.set([0.25, 0.25, 0.25]);

  return (
    <>
      <spotLight
        ref={spotlight1Ref}
        color="#F75426"
        intensity={40}
        position={[0.5, 0.75, 2.1]}
        distance={25}
        angle={Math.PI * 0.1}
        penumbra={0.25}
        decay={10}
      />
      <spotLight
        ref={spotlight2Ref}
        color="#F75426"
        intensity={40}
        position={[-0.5, 0.75, 2.1]}
        distance={25}
        angle={Math.PI * 0.1}
        penumbra={0.25}
        decay={10}
      />
    </>
  );
};

export default function Scene() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {!mounted ? null : (
        <>
          <Canvas
            id="vaporwave"
            style={{
              height: "90vh",
              flex: 1,
              flexGrow: 1,
              flexShrink: 1,
              flexBasis: "0%",
              display: "inline-block",
              flexDirection: "column",
            }}
            dpr={Math.min(window.devicePixelRatio, 2)}
            linear
          >
            <React.Suspense fallback={null}>
              <fog attach="fog" args={["#FFFFFF", 1, 2.5]} />
              <PerspectiveCamera makeDefault position={[0, 0.06, 1.1]} fov={95} near={0.01} far={20} />
              <Light />
              <Landscape />
            </React.Suspense>
          </Canvas>
          <div className={styles.gradientOverlay} />
        </>
      )}
    </>
  );
}
