import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

function ProjectCard({ project, index }: { project: any; index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="glass-card group relative overflow-hidden flex flex-col h-full hover:-translate-y-2 transition-transform duration-300"
    >
      {/* Content */}
      <div className="p-8 flex flex-col flex-grow" style={{ transform: "translateZ(30px)" }}>
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold text-[#E5E7EB] group-hover:text-blue-600 transition-colors">
            {project.title}
          </h3>
          <div className="flex gap-3">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-[#64748B] hover:text-[#E5E7EB] transition-colors">
              <Github size={22} />
            </a>
            <a href={project.demo} className="text-[#64748B] hover:text-blue-600 transition-colors">
              <ExternalLink size={22} />
            </a>
          </div>
        </div>
        <p className="text-[#64748B] mb-8 flex-grow leading-relaxed text-lg">
          {project.desc}
        </p>
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tech.map((tech: string, i: number) => (
            <span
              key={i}
              className="px-3 py-1 text-xs font-medium text-teal-500 bg-teal-500/10 border border-teal-500/20 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      {/* Border Effect */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-600/30 rounded-2xl transition-colors duration-300 pointer-events-none" />
    </motion.div>
  );
}

export default function ProjectsSection() {
  const projects = [
    {
      title: 'SmartUzhavan',
      desc: 'AI Agricultural Yield Prediction. Cloud deployed, DevOps CI/CD integrated, ML-based crop prediction.',
      tech: ['React', 'Node.js', 'Python', 'AWS', 'Docker'],
      github: 'https://github.com/dharg6718/yield-prediction',
      demo: '#',
      image: 'https://picsum.photos/seed/smartuzhavan/800/600',
    },
    {
      title: 'CI/CD Generator',
      desc: 'Automated pipeline builder. YAML generator, Docker & Kubernetes integration.',
      tech: ['Go', 'React', 'Kubernetes', 'Docker'],
      github: 'https://github.com/dharg6718/ai-ci-cd-generator',
      demo: '#',
      image: 'https://picsum.photos/seed/cicd/800/600',
    },
    {
      title: 'AI Smart Tourism',
      desc: 'Intelligent recommendation engine. Smart itinerary builder.',
      tech: ['Next.js', 'Python', 'TensorFlow', 'MongoDB'],
      github: 'https://github.com/dharg6718/tour-place-.txt',
      demo: '#',
      image: 'https://picsum.photos/seed/tourism/800/600',
    },
    {
      title: 'Algorithm Detector',
      desc: 'AI Smart Algorithm Detector. Algorithm classification, Time complexity visualization.',
      tech: ['React', 'D3.js', 'Python', 'FastAPI'],
      github: 'https://github.com/dharg6718/ai-smart-algortihm-detector',
      demo: '#',
      image: 'https://picsum.photos/seed/algorithm/800/600',
    },
    {
      title: 'Food Ordering Platform',
      desc: 'Full Stack Food Ordering Platform. Cart system, Admin dashboard, Order management.',
      tech: ['MERN', 'Redux', 'Stripe', 'Tailwind'],
      github: 'https://github.com/dharg6718/food-website',
      demo: '#',
      image: 'https://picsum.photos/seed/food/800/600',
    },
    {
      title: 'Social Fitness Group',
      desc: 'Real-time tracking, Leaderboards, Community challenges.',
      tech: ['React Native', 'Firebase', 'Node.js', 'Socket.io'],
      github: 'https://github.com/dharg6718/social-fitness',
      demo: '#',
      image: 'https://picsum.photos/seed/fitness/800/600',
    },
  ];

  return (
    <section id="projects" className="py-24 relative perspective-1000">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-4 mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ perspective: 1000 }}>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
