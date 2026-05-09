import { servicesContentData } from "@/data/servicesContentData";
import Image from "next/image";

export default function ServicesContent() {
  return (
    <div>
      {servicesContentData.map((item) => (
        <div key={item.id}>
          <Image src={item.image} alt={item.title} />
          <h3>{item.title}</h3>
        </div>
      ))}
    </div>
  );
}
