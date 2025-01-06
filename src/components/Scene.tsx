import { OrbitControls } from '@react-three/drei';
import React, { FC } from 'react';
import { Canvas } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/three';

interface SceneProps {
  modelColor: string;
  modelSize: string;
}

const Model: React.FC<{ color: string }> = ({ color }) => {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

const Scene: FC<SceneProps> = ({ modelColor, modelSize }) => {
  const sizeMultiplier =
    modelSize === 'Small' ? 0.5 : modelSize === 'Medium' ? 1 : 1.5;

  const { scale, color } = useSpring({
    scale: [sizeMultiplier, sizeMultiplier, sizeMultiplier],
    color: modelColor,
    config: { tension: 300, friction: 20 },
  });

  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 5, 2]} intensity={1} />
      <animated.group scale={scale}>
        <Model color={color.get()} /> {/* Correctly extracted the animated value */}
      </animated.group>
      <OrbitControls />
    </Canvas>
  );
};

export default Scene;
