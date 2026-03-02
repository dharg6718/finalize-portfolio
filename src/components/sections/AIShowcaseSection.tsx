import { motion, AnimatePresence } from 'framer-motion';
import { Brain, LineChart, Network, Play, Database, CheckCircle, Loader } from 'lucide-react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useMemo, useRef, useState, useEffect } from 'react';
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

const simulationSteps = [
  'Initializing neural network layers...',
  'Loading training dataset (12,400 samples)...',
  'Running forward propagation...',
  'Computing loss & back-propagation...',
  'Optimizing weights (Epoch 50/50)...',
  'Simulation complete ✓',
];

const metrics = [
  { label: 'Model Accuracy', value: 97.4, color: 'bg-teal-500' },
  { label: 'Precision', value: 95.8, color: 'bg-blue-500' },
  { label: 'Recall', value: 96.2, color: 'bg-purple-500' },
  { label: 'F1 Score', value: 96.0, color: 'bg-cyan-500' },
];

const predictions = [
  { input: 'Input Vector [0.82, 0.31, 0.95]', label: 'Class A', confidence: 94.3 },
  { input: 'Input Vector [0.14, 0.67, 0.22]', label: 'Class B', confidence: 88.7 },
  { input: 'Input Vector [0.55, 0.89, 0.41]', label: 'Class A', confidence: 91.5 },
];

export default function AIShowcaseSection() {
  const [simState, setSimState] = useState<'idle' | 'running' | 'done'>('idle');
  const [stepIndex, setStepIndex] = useState(0);
  const [showDataset, setShowDataset] = useState(false);

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

  const runSimulation = () => {
    if (simState === 'running') return;
    setSimState('running');
    setStepIndex(0);
    setShowDataset(false);
  };

  useEffect(() => {
    if (simState !== 'running') return;
    if (stepIndex < simulationSteps.length - 1) {
      const t = setTimeout(() => setStepIndex((s) => s + 1), 650);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => setSimState('done'), 400);
      return () => clearTimeout(t);
    }
  }, [simState, stepIndex]);

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

        {/* Interactive UI Panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 glass-card border border-white/5 rounded-2xl relative overflow-hidden"
        >
          {/* 3D Background */}
          <div className="absolute inset-0 z-0 h-[500px]" style={{ pointerEvents: 'none' }}>
            <Canvas camera={{ position: [0, 5, 10], fov: 50 }}>
              <ambientLight intensity={0.5} />
              <ParticleWave />
            </Canvas>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/60 to-transparent pointer-events-none z-10" />

          {/* Content */}
          <div className="relative z-20 p-8 md:p-12 min-h-[500px] flex flex-col">
            {/* Header */}
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-[#E5E7EB] mb-2 drop-shadow-lg">Interactive AI Module</h3>
              <p className="text-[#94A3B8] max-w-xl mx-auto text-sm">
                Live neural network prediction simulation — click Run Simulation to execute a model training cycle.
              </p>
            </div>

            {/* Idle State */}
            {simState === 'idle' && (
              <div className="flex flex-col items-center justify-center flex-1 gap-6">
                <div className="w-20 h-20 rounded-full bg-blue-600/10 border border-blue-600/20 flex items-center justify-center">
                  <Brain size={40} className="text-blue-500" />
                </div>
                <p className="text-[#64748B] text-center max-w-md">
                  Select parameters and run the simulation to see real-time model training, predictions, and performance metrics.
                </p>
                <div className="flex gap-4">
                  <button
                    onClick={runSimulation}
                    className="flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-colors"
                  >
                    <Play size={16} /> Run Simulation
                  </button>
                  <button
                    onClick={() => setShowDataset((v) => !v)}
                    className="flex items-center gap-2 px-6 py-3 rounded-lg bg-[#111827] border border-white/10 text-[#E5E7EB] hover:bg-[#1e293b] transition-colors"
                  >
                    <Database size={16} /> View Dataset
                  </button>
                </div>
                <AnimatePresence>
                  {showDataset && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="w-full max-w-lg bg-[#0F172A]/90 border border-white/10 rounded-xl p-4 font-mono text-xs text-teal-400 space-y-1"
                    >
                      <p className="text-[#64748B] mb-2 font-sans text-sm">📊 Sample Dataset (first 5 rows)</p>
                      {[
                        ['0.82', '0.31', '0.95', 'Class A'],
                        ['0.14', '0.67', '0.22', 'Class B'],
                        ['0.55', '0.89', '0.41', 'Class A'],
                        ['0.33', '0.12', '0.78', 'Class B'],
                        ['0.91', '0.45', '0.63', 'Class A'],
                      ].map((row, i) => (
                        <div key={i} className="flex gap-4">
                          <span className="text-[#475569]">row_{i + 1}</span>
                          <span>[{row[0]}, {row[1]}, {row[2]}]</span>
                          <span className="text-blue-400">→ {row[3]}</span>
                        </div>
                      ))}
                      <p className="text-[#475569] pt-1">... 12,395 more rows</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}

            {/* Running State */}
            {simState === 'running' && (
              <div className="flex flex-col items-center justify-center flex-1 gap-6">
                <div className="w-16 h-16 rounded-full bg-blue-600/10 border border-blue-600/20 flex items-center justify-center">
                  <Loader size={32} className="text-blue-400 animate-spin" />
                </div>
                <div className="w-full max-w-md bg-[#0F172A]/90 border border-white/10 rounded-xl p-5 font-mono text-sm space-y-2">
                  {simulationSteps.slice(0, stepIndex + 1).map((step, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle size={14} className="text-teal-500 flex-shrink-0" />
                      <span className="text-[#94A3B8]">{step}</span>
                    </motion.div>
                  ))}
                </div>
                {/* Progress bar */}
                <div className="w-full max-w-md bg-white/5 rounded-full h-2">
                  <motion.div
                    className="h-2 rounded-full bg-gradient-to-r from-blue-600 to-teal-500"
                    animate={{ width: `${((stepIndex + 1) / simulationSteps.length) * 100}%` }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              </div>
            )}

            {/* Done State — Results */}
            {simState === 'done' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col gap-8"
              >
                {/* Metrics */}
                <div>
                  <p className="text-teal-400 font-semibold mb-4 flex items-center gap-2">
                    <CheckCircle size={16} /> Model Training Complete — Performance Metrics
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {metrics.map((m, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-[#0F172A]/80 border border-white/10 rounded-xl p-4"
                      >
                        <div className="flex justify-between mb-2">
                          <span className="text-[#94A3B8] text-sm">{m.label}</span>
                          <span className="text-[#E5E7EB] font-bold text-sm">{m.value}%</span>
                        </div>
                        <div className="w-full bg-white/5 rounded-full h-2">
                          <motion.div
                            className={`h-2 rounded-full ${m.color}`}
                            initial={{ width: 0 }}
                            animate={{ width: `${m.value}%` }}
                            transition={{ duration: 0.8, delay: i * 0.1 }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Predictions */}
                <div>
                  <p className="text-blue-400 font-semibold mb-4 flex items-center gap-2">
                    <Brain size={16} /> Live Predictions
                  </p>
                  <div className="space-y-3">
                    {predictions.map((p, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + i * 0.15 }}
                        className="bg-[#0F172A]/80 border border-white/10 rounded-xl px-5 py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono text-sm"
                      >
                        <span className="text-[#64748B]">{p.input}</span>
                        <div className="flex items-center gap-3">
                          <span className="text-teal-400 font-bold">{p.label}</span>
                          <span className="px-2 py-0.5 rounded-full bg-blue-600/20 border border-blue-600/30 text-blue-400 text-xs">
                            {p.confidence}% confidence
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 justify-center pt-2">
                  <button
                    onClick={runSimulation}
                    className="flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-colors"
                  >
                    <Play size={16} /> Run Again
                  </button>
                  <button
                    onClick={() => { setSimState('idle'); setStepIndex(0); }}
                    className="px-6 py-3 rounded-lg bg-[#111827] border border-white/10 text-[#E5E7EB] hover:bg-[#1e293b] transition-colors"
                  >
                    Reset
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
