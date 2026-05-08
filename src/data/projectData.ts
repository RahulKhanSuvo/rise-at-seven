import { ProjectData } from "@/types/project";
import banner1 from "@/assets/banner/sixt-1.jpg_w=2000&h=1500&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847611&s=2414c4f856c059625e43608b5128cfd5.png";

export const projectsData: ProjectData[] = [
  {
    id: 1,
    title: "Sixt",
    timeline: "2023-2025",
    image: banner1,
    type: "Car rental",
    description: "An extraordinary car rental experience",
    color: "#d07c43",
  },
  {
    id: 2,
    title: "Project 2",
    image: banner1,
    type: "Car rental",
    description: "An extraordinary car rental experience",
    color: "#c1580c",
  },
  {
    id: 3,
    title: "Project 3",
    image: banner1,
    type: "Car rental",
    description: "An extraordinary car rental experience",
    color: "#117d97",
  },
];
