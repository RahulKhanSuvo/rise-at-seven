import { StaticImageData } from "next/image";

export type ProjectData = {
  id: number;
  title: string;
  timeline?: string;
  image: StaticImageData;
  type: string;
  description: string;
  color: string;
  year?: string;
  country?: string;
};
