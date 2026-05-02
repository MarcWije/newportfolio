export default function ProjectCard({ title, points, tech }: { title: string, points: string[], tech: string }) {
  return (
    <div className="group border border-white/5 bg-white/[0.02] backdrop-blur-sm p-8 rounded-sm hover:border-cyber-cyan/30 hover:bg-white/[0.04] transition-all duration-500 hover:-translate-y-1 flex flex-col h-full">
      <h3 className="text-xl text-[#00f2ff] mb-4 font-bold tracking-tight transition-colors">{title}</h3>
      <ul className="text-[#00f2ff]/80 text-sm leading-relaxed mb-8 font-normal space-y-5 flex-grow">
        {points.map((point, index) => (
          <li key={index} className="flex gap-2">
            <span className="text-cyber-cyan font-mono shrink-0">{">"}</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
      <div className="mt-auto">
        <span className="text-[9px] uppercase tracking-[0.3em] font-mono text-cyber-cyan bg-cyber-cyan/5 border border-cyber-cyan/20 px-3 py-1.5 rounded-none inline-block">
          {tech}
        </span>
      </div>
    </div>
  );
}