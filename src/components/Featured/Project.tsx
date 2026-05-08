import Image from "next/image";
import { ProjectData } from "@/types/project";
import { ChartLine, Search } from "lucide-react";

interface ProjectProps {
  project: ProjectData;
}
export default function Project({ project }: ProjectProps) {
  const { title, image, type, description, color } = project;
  return (
    <div className="relative group w-full overflow-hidden mt-10 rounded-2xl duration-500">
      <Image
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80"
      />

      {/* Content */}
      <div className="absolute bottom-0 right-0 p-8 transform transition-transform duration-500">
        <div className="flex items-center rounded-full font-medium text-white bg-white/20 backdrop-blur-sm text-sm gap-x-1.5 py-2 px-3.5">
          <Search className="text-white size-4" />
          <span className="text-white">{type}</span>
          <ChartLine className="text-white size-4" />
        </div>
      </div>

      {/* Color Accent */}
    </div>
  );
}
