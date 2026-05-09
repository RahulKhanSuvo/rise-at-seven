import digitalPr from "@/assets/services/boywithsignboard.png";
import organicSocial from "@/assets/services/girlWith.png";
import SearchAndGrowthStrategy from "@/assets/services/manWithposter.png";
import ContentExperience from "@/assets/services/contentExperience.png";
import dataAndInsights from "@/assets/services/dataAndInsights.png";
import onSiteSeo from "@/assets/services/onSiteSeo.png";
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
  {
    id: 2,
    title: "Organic Social & Content",
    image: organicSocial,
    href: "#",
  },
  {
    id: 3,
    title: "Search & Growth Strategy",
    image: SearchAndGrowthStrategy,
    href: "#",
  },
  {
    id: 4,
    title: "Content Experience",
    image: ContentExperience,
    href: "#",
  },
  {
    id: 5,
    title: "Data & Insights",
    image: dataAndInsights,
    href: "#",
  },
  {
    id: 6,
    title: "Onsite SEO",
    image: onSiteSeo,
    href: "#",
  },
];
