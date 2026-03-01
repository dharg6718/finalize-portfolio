import { motion } from 'framer-motion';
import { Code2, Cloud, Cpu, Database, Server } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Icosahedron, MeshDistortMaterial } from '@react-three/drei';

export default function AboutSection() {
  const focusAreas = [
    { icon: Code2, title: 'MERN Development', desc: 'React, Node.js, Express, MongoDB' },
    { icon: Cloud, title: 'Cloud Architecture', desc: 'AWS, Cloud Deployment' },
    { icon: Server, title: 'CI/CD Pipelines', desc: 'Docker, Kubernetes, GitHub Actions' },
    { icon: Cpu, title: 'AI Model Deployment', desc: 'Model training, Prediction systems' },
    { icon: Database, title: 'Data-driven Solutions', desc: 'Data analysis, Feature engineering' },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-4 mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Text & 3D Element */}
          <div className="flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6 text-lg text-[#64748B] leading-relaxed"
            >
              <p>
                I am a pre-final year Engineering student with a strong passion for building scalable, intelligent systems.
                My expertise spans across Full Stack Development, Cloud Engineering, DevOps, AI/ML, and Data Science.
              </p>
              <p>
                With 3 months of online internship experience, I have developed a deep understanding of modern software architecture,
                focusing on creating robust, cloud-native solutions that solve real-world problems.
              </p>
              <div className="p-6 glass-card mt-4 border-l-4 border-l-blue-600">
                <h3 className="text-xl font-semibold text-[#E5E7EB] mb-2">Current Focus</h3>
                <p className="text-sm text-[#64748B]">
                  Building AI + Cloud + DevOps integrated projects and exploring advanced data-driven architectures.
                </p>
              </div>
            </motion.div>

            {/* 3D Abstract Cloud Node */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="h-[300px] w-full relative rounded-2xl overflow-hidden glass-card border border-white/5"
            >
              <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
                <directionalLight position={[-5, -5, -5]} intensity={0.5} color="#14B8A6" />
                <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
                  <Icosahedron args={[1.2, 2]}>
                    <MeshDistortMaterial
                      color="#2563EB"
                      attach="material"
                      distort={0.3}
                      speed={2}
                      roughness={0.2}
                      metalness={0.8}
                      wireframe={true}
                    />
                  </Icosahedron>
                </Float>
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
              </Canvas>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-center pointer-events-none">
                <span className="text-xs font-mono text-teal-500 tracking-widest uppercase">Cloud Architecture Node</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Focus Areas */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {focusAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <div
                  key={index}
                  className="glass-card p-6 hover:bg-[#111827]/80 transition-colors group cursor-default"
                >
                  <Icon className="text-blue-600 mb-4 group-hover:scale-110 transition-transform" size={28} />
                  <h4 className="text-lg font-semibold text-[#E5E7EB] mb-2">{area.title}</h4>
                  <p className="text-sm text-[#64748B]">{area.desc}</p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
