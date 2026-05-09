import digitalPr from "@/assets/services/boywithsignboard.png";
import { StaticImageData } from "next/image";
export interface ServicesContentData {
  id: number;
  title: string;
  image: StaticImageData;
  href: string;
}
export const servicesContentData: ServicesContentData[] = [
  {
    id: 1,
    title: "Digital PR",
    image: digitalPr,
    href: "#",
  },
];
