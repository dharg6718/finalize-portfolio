import { motion } from 'framer-motion';
import { Brain, LineChart, Network } from 'lucide-react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

function ParticleWave() {
  const count = 100;
  const sep = 0.2;
  const positions = useMemo(() => {
    const positions = [];
    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        const x = sep * (xi - count / 2);
        const z = sep * (zi - count / 2);
        const y = 0;
        positions.push(x, y, z);
      }
    }
    return new Float32Array(positions);
  }, [count, sep]);

  const ref = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const time = state.clock.getElapsedTime();
    const positions = ref.current.geometry.attributes.position.array as Float32Array;
    let i = 0;
    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        const x = sep * (xi - count / 2);
        const z = sep * (zi - count / 2);
        positions[i + 1] = Math.sin((x + time) * 0.5) * 0.5 + Math.sin((z + time) * 0.5) * 0.5;
        i += 3;
      }
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={ref} position={[0, -2, 0]}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#2563EB" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

export default function AIShowcaseSection() {
  const features = [
    {
      icon: Brain,
      title: 'Model Prediction Simulation',
      desc: 'Interactive visualization of machine learning models predicting outcomes based on real-time data inputs.',
    },
    {
      icon: LineChart,
      title: 'Data Visualization Charts',
      desc: 'Dynamic charts rendering complex datasets to identify trends, patterns, and anomalies effectively.',
    },
    {
      icon: Network,
      title: 'Algorithm Comparison',
      desc: 'Visual comparison of different algorithms, showcasing their time complexity and efficiency.',
    },
  ];

  return (
    <section id="ai-showcase" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-4 mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            AI & Data Science <span className="text-gradient">Showcase</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="glass-card p-8 hover:bg-[#111827]/80 transition-colors flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-blue-600/10 flex items-center justify-center mb-6 border border-blue-600/20 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={32} className="text-teal-500" />
                </div>
                <h3 className="text-xl font-bold text-[#E5E7EB] mb-4">{feature.title}</h3>
                <p className="text-[#64748B] leading-relaxed">{feature.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Interactive UI Panel with 3D Canvas */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 glass-card border border-white/5 rounded-2xl relative overflow-hidden h-[500px]"
        >
          <div className="absolute inset-0 z-0">
            <Canvas camera={{ position: [0, 5, 10], fov: 50 }}>
              <ambientLight intensity={0.5} />
              <ParticleWave />
            </Canvas>
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent pointer-events-none z-10" />

          <div className="relative z-20 flex flex-col items-center justify-center h-full text-center p-8 bg-black/40 backdrop-blur-[2px]">
            <h3 className="text-3xl font-bold text-[#E5E7EB] mb-4 drop-shadow-lg">Interactive AI Module</h3>
            <p className="text-[#E5E7EB] max-w-2xl mb-8 drop-shadow-md font-medium">
              This panel demonstrates a live AI model prediction simulation. Select parameters to see real-time
              data processing and visualization.
            </p>
            <div className="flex gap-4">
              <button className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-colors">
                Run Simulation
              </button>
              <button className="px-6 py-3 rounded-lg bg-[#111827] border border-white/5 text-[#E5E7EB] hover:bg-[#111827]/80 transition-colors backdrop-blur-md">
                View Dataset
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
