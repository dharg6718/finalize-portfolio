import { Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0F172A]/50 backdrop-blur-md py-12 mt-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div className="flex flex-col items-start gap-4">
          <span className="text-2xl font-bold tracking-tighter text-gradient">GD</span>
          <p className="text-[#64748B] text-sm max-w-xs">
            Engineering Intelligent, Scalable & Cloud-Native Digital Systems.
          </p>
        </div>

        <div className="flex justify-center gap-6">
          <a href="https://github.com/dharg6718" target="_blank" rel="noopener noreferrer" className="text-[#64748B] hover:text-blue-600 transition-colors">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/giri-dhar-k-r-7308492b3/" target="_blank" rel="noopener noreferrer" className="text-[#64748B] hover:text-blue-600 transition-colors">
            <Linkedin size={20} />
          </a>

        </div>

        <div className="flex justify-end text-sm text-[#64748B]">
          <p>&copy; {new Date().getFullYear()} Giri Dhar K R. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
