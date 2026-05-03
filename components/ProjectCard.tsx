import Image from "next/image";

export default function ProjectCard({ title, points, tech, images }: { title: string, points: string[], tech: string, images: string[] }) {
  return (
    <div className="group border border-white/5 bg-white/[0.02] backdrop-blur-sm p-8 rounded-sm hover:border-cyber-cyan/30 hover:bg-white/[0.04] transition-all duration-500 hover:-translate-y-1 flex flex-col h-full">
      <h3 className="text-xl text-white mb-4 font-bold tracking-tight transition-colors">{title}</h3>
      <div className="text-white text-sm leading-relaxed mb-6 font-normal space-y-5 flex-grow -ml-6">
        {points.map((point, index) => (
          <div key={index} className="flex gap-1.5">
            <span className="text-white font-mono shrink-0">{"•"}</span>
            <span>{point}</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4 mb-8">
        {images.map((src, index) => (
          <div key={index} className="relative aspect-[16/10] w-full overflow-hidden rounded-sm border border-white/10 bg-white/5">
            <Image
              src={src}
              alt={`${title} screenshot ${index + 1}`}
              fill
              className="object-contain  transition-transform duration-500"
            />
          </div>
        ))}
      </div>

      <div className="mt-auto">
        <span className="text-[9px] uppercase tracking-[0.3em] font-mono text-cyber-cyan bg-cyber-cyan/5 border border-cyber-cyan/20 px-3 py-1.5 rounded-none inline-block">
          {tech}
        </span>
      </div>
    </div>
  );
}