import Image from "next/image";
import { ProjectData } from "@/types/project";

interface ProjectProps {
  project: ProjectData;
}
export default function Project({ project }: ProjectProps) {
  const { title, image, type, description, color } = project;
  return (
    <div className="relative group w-[500px] h-[600px] overflow-hidden rounded-2xl bg-zinc-900 shadow-2xl transition-all duration-500 hover:scale-[1.02]">
      <Image
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80"
      />

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent opacity-90"
        style={{ "--item-color": color } as React.CSSProperties}
      />

      {/* Content */}
      <div className="absolute bottom-0 left-0 p-8 w-full transform transition-transform duration-500">
        <span
          className="text-xs font-mono uppercase tracking-widest mb-2 block"
          style={{ color }}
        >
          {type}
        </span>
        <h2 className="text-4xl font-bold text-white mb-2 leading-tight">
          {title}
        </h2>
        <p className="text-zinc-400 text-sm max-w-xs line-clamp-2 mb-4">
          {description}
        </p>

        <div
          className="h-[2px] w-0 group-hover:w-full transition-all duration-700 ease-out"
          style={{ backgroundColor: color }}
        />
      </div>

      {/* Color Accent */}
      <div
        className="absolute top-6 right-6 w-12 h-12 rounded-full blur-2xl opacity-50"
        style={{ backgroundColor: color }}
      />
    </div>
  );
}
