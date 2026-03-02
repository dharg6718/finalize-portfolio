import { motion } from 'framer-motion';
import { Code2, Cloud, Cpu, Database, Server, ExternalLink } from 'lucide-react';
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

        {/* Coding Profiles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <h3 className="text-3xl font-bold tracking-tight text-[#E5E7EB] mb-2">Coding <span className="text-gradient">Profiles</span></h3>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full mb-10" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* LeetCode Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 flex flex-col gap-6"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FFA116]/10 border border-[#FFA116]/20 flex items-center justify-center text-xl font-black text-[#FFA116]">L</div>
                  <div>
                    <h4 className="text-xl font-bold text-[#E5E7EB]">LeetCode</h4>
                    <p className="text-xs text-[#64748B]">@dharg6718</p>
                  </div>
                </div>
                <a href="https://leetcode.com/u/dharg6718/" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs text-[#FFA116] hover:underline">
                  View Profile <ExternalLink size={12} />
                </a>
              </div>

              {/* Problem Stats */}
              <div className="grid grid-cols-3 gap-3 text-center">
                {[
                  { label: 'Easy', count: 78, color: 'text-green-400', bg: 'bg-green-400/10', border: 'border-green-400/20' },
                  { label: 'Medium', count: 44, color: 'text-yellow-400', bg: 'bg-yellow-400/10', border: 'border-yellow-400/20' },
                  { label: 'Hard', count: 9, color: 'text-red-400', bg: 'bg-red-400/10', border: 'border-red-400/20' },
                ].map((d) => (
                  <div key={d.label} className={`rounded-xl p-3 ${d.bg} border ${d.border}`}>
                    <p className={`text-2xl font-black ${d.color}`}>{d.count}</p>
                    <p className="text-xs text-[#64748B] mt-0.5">{d.label}</p>
                  </div>
                ))}
              </div>

              {/* Total + Acceptance */}
              <div className="flex gap-4">
                <div className="flex-1 bg-white/5 rounded-xl p-4 text-center border border-white/10">
                  <p className="text-3xl font-black text-[#FFA116]">131</p>
                  <p className="text-xs text-[#64748B] mt-1">Total Solved</p>
                </div>
                <div className="flex-1 bg-white/5 rounded-xl p-4 text-center border border-white/10">
                  <p className="text-3xl font-black text-teal-400">89.7%</p>
                  <p className="text-xs text-[#64748B] mt-1">Acceptance Rate</p>
                </div>
                <div className="flex-1 bg-white/5 rounded-xl p-4 text-center border border-white/10">
                  <p className="text-3xl font-black text-blue-400">🔥18</p>
                  <p className="text-xs text-[#64748B] mt-1">Max Streak</p>
                </div>
              </div>

              {/* Contest */}
              <div className="bg-white/5 rounded-xl p-4 border border-white/10 flex items-center justify-between">
                <div>
                  <p className="text-xs text-[#64748B] mb-1">Contest Rating</p>
                  <p className="text-2xl font-black text-[#FFA116]">1,357</p>
                  <p className="text-xs text-[#64748B] mt-0.5">Top 92.51% • 2 Contests</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-[#64748B] mb-1">Total Active Days</p>
                  <p className="text-2xl font-black text-purple-400">33</p>
                  <p className="text-xs text-[#64748B] mt-0.5">194 submissions / year</p>
                </div>
              </div>

              {/* Skills */}
              <div className="flex flex-col gap-3">
                <p className="text-xs font-semibold text-[#94A3B8] uppercase tracking-widest">Top Skills by Category</p>
                {[
                  { cat: 'Advanced', color: 'text-red-400 border-red-400/30 bg-red-400/10', tags: ['Dynamic Programming ×14', 'Divide & Conquer ×7', 'Backtracking ×4'] },
                  { cat: 'Intermediate', color: 'text-yellow-400 border-yellow-400/30 bg-yellow-400/10', tags: ['Math ×33', 'Hash Table ×29', 'Bit Manipulation ×17'] },
                  { cat: 'Fundamental', color: 'text-green-400 border-green-400/30 bg-green-400/10', tags: ['Array ×71', 'String ×35', 'Two Pointers ×25'] },
                ].map((s) => (
                  <div key={s.cat} className="flex flex-wrap items-center gap-2">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${s.color}`}>{s.cat}</span>
                    {s.tags.map((t) => (
                      <span key={t} className="text-[11px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[#94A3B8]">{t}</span>
                    ))}
                  </div>
                ))}
              </div>

              {/* Languages */}
              <div className="flex flex-col gap-2">
                <p className="text-xs font-semibold text-[#94A3B8] uppercase tracking-widest">Languages Used</p>
                {[
                  { lang: 'Java', count: 128, pct: 97, color: 'bg-orange-400' },
                  { lang: 'Python', count: 3, pct: 2, color: 'bg-blue-400' },
                  { lang: 'MySQL', count: 1, pct: 1, color: 'bg-teal-400' },
                ].map((l) => (
                  <div key={l.lang} className="flex items-center gap-3">
                    <span className="text-xs text-[#64748B] w-12">{l.lang}</span>
                    <div className="flex-1 bg-white/5 rounded-full h-2">
                      <motion.div
                        className={`h-2 rounded-full ${l.color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${l.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                      />
                    </div>
                    <span className="text-xs text-[#64748B] w-6 text-right">{l.count}</span>
                  </div>
                ))}
              </div>

              {/* View Profile Button */}
              <a
                href="https://leetcode.com/u/dharg6718/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#FFA116]/10 border border-[#FFA116]/20 text-[#FFA116] font-semibold hover:bg-[#FFA116]/20 transition-colors text-sm"
              >
                View Full LeetCode Profile <ExternalLink size={14} />
              </a>
            </motion.div>

            {/* HackerRank Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 flex flex-col gap-6"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#00EA64]/10 border border-[#00EA64]/20 flex items-center justify-center text-xl font-black text-[#00EA64]">H</div>
                  <div>
                    <h4 className="text-xl font-bold text-[#E5E7EB]">HackerRank</h4>
                    <p className="text-xs text-[#64748B]">@dharg6718</p>
                  </div>
                </div>
                <a href="https://www.hackerrank.com/profile/dharg6718" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs text-[#00EA64] hover:underline">
                  View Profile <ExternalLink size={12} />
                </a>
              </div>

              {/* Badges */}
              <div>
                <p className="text-xs font-semibold text-[#94A3B8] uppercase tracking-widest mb-3">Earned Badges</p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: 'Problem Solving', icon: '🧠', desc: 'Data Structures & Algorithms', color: 'border-purple-500/30 bg-purple-500/10' },
                    { name: 'Java', icon: '☕', desc: 'Java Programming Badge', color: 'border-orange-500/30 bg-orange-500/10' },
                  ].map((b) => (
                    <div key={b.name} className={`rounded-xl p-4 border ${b.color} flex flex-col items-center text-center gap-2`}>
                      <span className="text-3xl">{b.icon}</span>
                      <p className="text-sm font-bold text-[#E5E7EB]">{b.name}</p>
                      <p className="text-xs text-[#64748B]">{b.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Domain Stats */}
              <div>
                <p className="text-xs font-semibold text-[#94A3B8] uppercase tracking-widest mb-3">Domain Proficiency</p>
                <div className="flex flex-col gap-3">
                  {[
                    { domain: 'Problem Solving', stars: 5, color: 'text-yellow-400' },
                    { domain: 'Java', stars: 5, color: 'text-orange-400' },
                    { domain: 'Algorithms', stars: 4, color: 'text-blue-400' },
                    { domain: 'Data Structures', stars: 4, color: 'text-teal-400' },
                  ].map((d) => (
                    <div key={d.domain} className="flex items-center justify-between bg-white/5 rounded-lg px-4 py-3 border border-white/10">
                      <span className="text-sm text-[#E5E7EB]">{d.domain}</span>
                      <span className={`text-sm font-bold ${d.color}`}>
                        {'★'.repeat(d.stars)}{'☆'.repeat(5 - d.stars)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call to action */}
              <a
                href="https://www.hackerrank.com/profile/dharg6718"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#00EA64]/10 border border-[#00EA64]/20 text-[#00EA64] font-semibold hover:bg-[#00EA64]/20 transition-colors text-sm"
              >
                View Full HackerRank Profile <ExternalLink size={14} />
              </a>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
