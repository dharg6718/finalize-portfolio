import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Trophy } from 'lucide-react';

export default function ExperienceSection() {
  const experiences = [
    {
      role: 'Full Stack Developer Intern',
      company: 'Tech Startup (Online)',
      duration: '3 Months',
      location: 'Remote',
      description: [
        'Developed and maintained MERN stack applications, improving overall system performance by 20%.',
        'Implemented CI/CD pipelines using GitHub Actions and Docker, reducing deployment time.',
        'Collaborated with the data science team to integrate AI models into the backend services.',
        'Gained hands-on experience with AWS cloud infrastructure and deployment strategies.',
      ],
    },
    {
      role: 'Pre-final year Engineering Student',
      company: 'University',
      duration: 'Present',
      location: 'On-Campus',
      description: [
        'Focusing on advanced algorithms, cloud computing, and artificial intelligence.',
        'Leading technical workshops on web development and DevOps practices.',
        'Building scalable projects as part of the curriculum and personal portfolio.',
      ],
    },
  ];

  const hackathons = [
    {
      name: 'National Level Hackathon #1',
      result: '🥈 2nd Place',
      participants: '~300 Participants',
      description: 'Competed at national level against 300+ participants and secured 2nd place with an innovative solution.',
    },
    {
      name: 'National Level Hackathon #2',
      result: '🥈 2nd Place',
      participants: '~300 Participants',
      description: 'Achieved 2nd place at another national level hackathon, demonstrating consistent performance in competitive engineering challenges.',
    },
    {
      name: 'Hackathon #3',
      result: '🏅 Participated',
      participants: 'National Level',
      description: 'Participated and presented a full-stack project, gaining valuable experience in rapid prototyping under time pressure.',
    },
    {
      name: 'Open Source Global Connect',
      result: '🌐 Competed',
      participants: 'Global Level',
      description: 'Competed in the Open Source Global Connect — an international open source competition connecting developers worldwide to collaborate and build impactful open source solutions.',
    },
  ];

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-4 mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Professional <span className="text-gradient">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full" />
        </motion.div>

        <div className="relative border-l border-white/5 ml-4 md:ml-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="mb-12 pl-8 relative"
            >
              {/* Timeline Dot */}
              <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[8.5px] top-1.5" />

              <div className="glass-card p-8 hover:bg-[#111827]/80 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-[#E5E7EB] mb-2">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-teal-500 font-medium">
                      <Briefcase size={18} />
                      {exp.company}
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 text-sm text-[#64748B]">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      {exp.duration}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      {exp.location}
                    </div>
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[#E5E7EB]">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 flex-shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Hackathons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-4 mt-24 mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Hackathon <span className="text-gradient">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full" />
          <p className="text-[#64748B] text-lg mt-2">
            Competed in <span className="text-teal-500 font-semibold">3 hackathons</span> — won{' '}
            <span className="text-blue-500 font-semibold">2nd place twice</span> at national level events with ~300 participants. Also competed in the{' '}
            <span className="text-purple-400 font-semibold">Open Source Global Connect</span> — an international open source competition.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {hackathons.map((h, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="glass-card p-8 flex flex-col gap-4 hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-blue-600/10">
                  <Trophy size={22} className="text-blue-500" />
                </div>
                <span className="text-lg font-bold text-[#E5E7EB]">{h.name}</span>
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <span className="px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-semibold">
                  {h.result}
                </span>
                <span className="px-3 py-1 rounded-full bg-blue-600/10 border border-blue-600/20 text-blue-400 text-sm font-medium">
                  {h.participants}
                </span>
              </div>
              <p className="text-[#64748B] leading-relaxed text-sm">{h.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
