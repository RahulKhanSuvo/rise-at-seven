import Image from "next/image";
import { ProjectData } from "@/types/project";
import { Search } from "lucide-react";

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
      <div className="absolute bottom-0 left-0 p-8 w-full transform transition-transform duration-500">
        <Search />
      </div>

      {/* Color Accent */}
    </div>
  );
}
