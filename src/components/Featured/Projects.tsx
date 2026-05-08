import { projectsData } from "@/data/projectData";
import Project from "./Project";

export default function Projects() {
  return (
    <div className="flex flex-col mt-8">
      {projectsData.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
}
