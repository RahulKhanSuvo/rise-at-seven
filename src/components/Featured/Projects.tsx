import { projectsData } from "@/data/projectData";
import Project from "./Project";

interface ProjectsProps {
  hoveredProjectId: number | null;
  setHoveredProjectId: (id: number | null) => void;
}

export default function Projects({
  hoveredProjectId,
  setHoveredProjectId,
}: ProjectsProps) {
  return (
    <div className="flex flex-col">
      {projectsData.map((project) => (
        <Project
          key={project.id}
          project={project}
          isExternalHovered={hoveredProjectId === project.id}
          setHovered={() => setHoveredProjectId(project.id)}
          resetHover={() => setHoveredProjectId(null)}
        />
      ))}
    </div>
  );
}
