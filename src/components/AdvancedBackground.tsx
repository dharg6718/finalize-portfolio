import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Galaxy() {
  const count = 12000;
  const mesh = useRef<THREE.Points>(null);

  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const color1 = new THREE.Color('#2563EB');
    const color2 = new THREE.Color('#14B8A6');

    for (let i = 0; i < count; i++) {
      const radius = Math.random() * 55;
      const spinAngle = radius * 0.15;
      const branchAngle = ((i % 4) * Math.PI * 2) / 4;
      
      const randomX = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 3;
      const randomY = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 1.5;
      const randomZ = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 3;

      positions[i * 3] = Math.cos(branchAngle + spinAngle) * radius + randomX;
      positions[i * 3 + 1] = randomY;
      positions[i * 3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ;

      const mixedColor = color1.clone().lerp(color2, radius / 55 + Math.random() * 0.2);
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }
    return [positions, colors];
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (mesh.current) {
      mesh.current.rotation.y = time * 0.15; // Increased speed
      mesh.current.rotation.z = time * 0.08; // Increased speed
    }
  });

  return (
    <points ref={mesh} rotation={[Math.PI / 4, 0, 0]}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={count} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.06} vertexColors transparent opacity={0.85} sizeAttenuation depthWrite={false} blending={THREE.AdditiveBlending} />
    </points>
  );
}

export default function AdvancedBackground() {
  return (
    <div className="fixed inset-0 z-[-1] bg-[#0F172A]">
      <Canvas camera={{ position: [0, 0, 22], fov: 90 }}>
        <fog attach="fog" args={['#0F172A', 20, 80]} />
        <Galaxy />
      </Canvas>
    </div>
  );
}
