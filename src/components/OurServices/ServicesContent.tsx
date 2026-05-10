import { servicesContentData } from "@/data/servicesContentData";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ServicesContent() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5  ">
      {servicesContentData.map((item) => (
        <div key={item.id} className="group relative w-full">
          {/* Bottom border separator */}
          <div className="absolute bottom-0 left-0 z-0 w-full md:px-12">
            <div className="h-px w-full bg-gray-300"></div>
          </div>

          <Link href={item.href} className="relative z-10 grid grid-cols-1">
            {/* Foreground Content */}
            <div className="relative z-20 col-start-1 row-start-1 flex items-center gap-3 py-4 text-black transition duration-500 lg:py-6 group-hover:text-white">
              {/* Small image for mobile/no-hover */}
              <div className="relative inline-flex h-12 w-12 shrink-0 overflow-hidden rounded-lg md:h-16 md:w-16 md:rounded-xl lg:hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 48px, 64px"
                  className="object-cover"
                />
              </div>

              {/* Text and Arrow Container */}
              <div className="transition-transform duration-500 lg:translate-x-10">
                <div className="relative">
                  {/* Sliding Arrow (reveals on hover) */}
                  <div className="absolute left-0 top-0 overflow-hidden pr-2">
                    <div className="translate-y-full -rotate-45 -translate-x-full transition-transform duration-500 group-hover:rotate-0 group-hover:translate-x-0 group-hover:translate-y-0">
                      <ArrowUpRight className="h-8 w-8 lg:h-10 lg:w-10 xl:h-12 xl:w-12 3xl:h-14 3xl:w-14" />
                    </div>
                  </div>

                  {/* Main Text (shifts right on hover) */}
                  <div className="text-3xl font-medium tracking-tight transition-transform duration-500 lg:text-4xl xl:text-5xl 3xl:text-6xl group-hover:translate-x-10 lg:group-hover:translate-x-14">
                    {item.title}
                  </div>
                </div>
              </div>
            </div>

            {/* Background Image Reveal (Desktop Hover) */}
            <div className="relative z-10 col-start-1 row-start-1 overflow-hidden rounded-full bg-black opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <div className="relative h-full w-full opacity-60 transition-transform duration-500 group-hover:scale-[1.05]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
