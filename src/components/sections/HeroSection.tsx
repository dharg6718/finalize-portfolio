import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Environment, Sparkles, MeshTransmissionMaterial } from '@react-three/drei';
import { ArrowRight, Download, Mail } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Particles/Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.05),transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col gap-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#111827] border border-white/5 w-fit">
            <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
            <span className="text-sm font-medium text-[#E5E7EB]">Available for Opportunities</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
            <span className="block text-[#E5E7EB]">Giri Dhar K R</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500 mt-2">
              Full Stack Architect
            </span>
          </h1>

          <p className="text-lg md:text-xl text-[#64748B] max-w-xl leading-relaxed">
            Full Stack Developer | Cloud Engineer | DevOps Engineer | AI/ML Engineer | Data Scientist
            <br />
            <br />
            <span className="italic text-[#E5E7EB]">
              "Engineering Intelligent, Scalable & Cloud-Native Digital Systems."
            </span>
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#projects"
              className="flex items-center gap-2 px-8 py-4 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-all group"
            >
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              className="flex items-center gap-2 px-8 py-4 rounded-full bg-[#111827] border border-white/5 text-[#E5E7EB] font-semibold hover:bg-[#111827]/80 transition-all"
            >
              <Download size={18} />
              Resume
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 p-4 rounded-full bg-[#111827] border border-white/5 text-[#E5E7EB] hover:text-white hover:bg-[#111827]/80 transition-all"
            >
              <Mail size={20} />
            </a>
          </div>
        </motion.div>

        {/* Right 3D Advanced Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="h-[500px] lg:h-[600px] w-full relative"
        >
          <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#2563EB" />
            
            <Environment preset="city" />
            
            <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
              <mesh>
                <torusKnotGeometry args={[1.2, 0.4, 256, 64]} />
                <MeshTransmissionMaterial
                  backside
                  samples={4}
                  thickness={0.5}
                  roughness={0.1}
                  chromaticAberration={0.5}
                  anisotropy={0.1}
                  distortion={0.2}
                  distortionScale={0.3}
                  temporalDistortion={0.1}
                  color="#2563EB"
                />
              </mesh>
            </Float>

            <Sparkles count={100} scale={5} size={2} speed={0.4} opacity={0.5} color="#14B8A6" />
            <Sparkles count={50} scale={4} size={3} speed={0.2} opacity={0.8} color="#2563EB" />

            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
          </Canvas>
          {/* Glow Behind Globe */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
