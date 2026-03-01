import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text, Float, Sparkles, Sphere } from '@react-three/drei';
import { useMemo } from 'react';
import * as THREE from 'three';

const skills = [
  { category: 'Frontend', items: ['React', 'Tailwind', 'Three.js', 'Next.js'] },
  { category: 'Backend', items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'] },
  { category: 'Cloud', items: ['AWS', 'GCP', 'Cloud Deployment'] },
  { category: 'DevOps', items: ['Docker', 'Kubernetes', 'GitHub Actions', 'CI/CD'] },
  { category: 'AI/ML', items: ['Model training', 'Prediction systems', 'TensorFlow'] },
  { category: 'Data Science', items: ['Data analysis', 'Feature engineering', 'Visualization'] },
];

function TechSphere() {
  const words = useMemo(() => {
    const allSkills = skills.flatMap((s) => s.items);
    return allSkills.map((word, i) => {
      const phi = Math.acos(-1 + (2 * i) / allSkills.length);
      const theta = Math.sqrt(allSkills.length * Math.PI) * phi;
      return {
        word,
        position: new THREE.Vector3(
          3.5 * Math.cos(theta) * Math.sin(phi),
          3.5 * Math.sin(theta) * Math.sin(phi),
          3.5 * Math.cos(phi)
        ),
      };
    });
  }, []);

  return (
    <group>
      {/* Glowing Core */}
      <Sphere args={[1.5, 32, 32]}>
        <meshBasicMaterial color="#2563EB" transparent opacity={0.1} wireframe />
      </Sphere>
      <Sphere args={[1, 32, 32]}>
        <meshBasicMaterial color="#14B8A6" transparent opacity={0.2} />
      </Sphere>
      
      <Sparkles count={200} scale={8} size={1.5} speed={0.4} opacity={0.6} color="#2563EB" />

      {words.map(({ word, position }, i) => (
        <Float key={i} speed={2} rotationIntensity={1} floatIntensity={2}>
          <Text
            position={position}
            fontSize={0.35}
            color="#E5E7EB"
            anchorX="center"
            anchorY="middle"
          >
            {word}
            <meshBasicMaterial attach="material" color="#2563EB" />
          </Text>
        </Float>
      ))}
    </group>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-4 mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Skills List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative z-10">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 border-t-4 border-t-blue-600/50 hover:bg-[#111827]/80 transition-colors flex flex-col h-full"
              >
                <h3 className="text-xl font-bold text-[#E5E7EB] mb-4">{skillGroup.category}</h3>
                <ul className="space-y-3 flex-grow">
                  {skillGroup.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[#64748B]">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 flex-shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Right: 3D Tech Sphere */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-[600px] w-full relative hidden lg:block"
          >
            <Canvas camera={{ position: [0, 0, 9], fov: 50 }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <TechSphere />
              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
            </Canvas>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
