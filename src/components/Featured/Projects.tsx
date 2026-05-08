import { projectsData } from "@/data/projectData";
import Project from "./Project";

export default function Projects() {
  return (
    <div className="flex flex-col">
      {projectsData.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
}
