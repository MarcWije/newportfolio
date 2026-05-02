export default function ProjectCard({ title, desc, tech }: { title: string, desc: string, tech: string }) {
  return (
    <div className="group border border-white/5 bg-white/[0.02] backdrop-blur-sm p-8 rounded-sm hover:border-cyber-cyan/30 hover:bg-white/[0.04] transition-all duration-500 hover:-translate-y-1">
      <h3 className="text-xl text-white group-hover:text-cyber-cyan mb-4 font-bold tracking-tight transition-colors">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed mb-8 font-normal">{desc}</p>
      <span className="text-[9px] uppercase tracking-[0.3em] font-mono text-cyber-cyan bg-cyber-cyan/5 border border-cyber-cyan/20 px-3 py-1.5 rounded-none">{tech}</span>
    </div>
  );
}