import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

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
      </div>
    </section>
  );
}
