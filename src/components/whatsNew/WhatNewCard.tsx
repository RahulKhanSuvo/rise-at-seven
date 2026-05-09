import { Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

type WhatNewCardProps = {
  item: {
    image: string;
    title: string;
    profilePic: string;
    profileName: string;
    time: string;
    href: string;
    category?: string;
  };
};

export default function WhatNewCard({ item }: WhatNewCardProps) {
  return (
    <Link
      href={item.href}
      className="w-full flex flex-col items-start gap-y-5 hover:-translate-y-2 transition-transform duration-300 group"
    >
      <div className="w-full grid">
        <div className="col-start-1 row-start-1 z-20 p-3">
          {item.category && (
            <div className="flex flex-wrap gap-1">
              <div className="inline-flex items-center font-medium tracking-tight leading-none rounded-full text-sm gap-x-2 px-3 py-1 min-h-7 xl:min-h-8 xl:py-1.5 xl:text-base text-white bg-white/20 backdrop-blur-sm">
                <div>{item.category}</div>
              </div>
            </div>
          )}
        </div>

        {/* Blurred background image for mask effect */}
        <div className="col-start-1 row-start-1 z-10 relative rounded-2xl overflow-hidden aspect-square lg:rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="w-full h-full relative transition blur-md duration-1000 scale-110">
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Main Image */}
        <div className="col-start-1 row-start-1 aspect-square relative rounded-2xl overflow-hidden lg:rounded-3xl z-10 group-hover:scale-[0.98] transition-transform duration-500">
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            loading="lazy"
          />
        </div>
      </div>

      <div className="flex flex-col items-start gap-y-3 px-2">
        <div className="flex items-start gap-1 mt-1 flex-wrap">
          <div className="inline-flex items-center font-medium tracking-tight leading-none rounded-full text-sm gap-x-2 px-3 py-1 min-h-7 xl:min-h-8 xl:py-1.5 xl:text-base text-gray-500 bg-gray-100/50">
            <div className="inline-flex items-center justify-center -ml-1.5">
              <div className="rounded-full relative overflow-hidden -mr-1 w-5 h-5">
                <Image
                  src={item.profilePic}
                  alt={item.profileName}
                  fill
                  sizes="20px"
                  className="object-cover"
                />
              </div>
            </div>
            <div>{item.profileName}</div>
          </div>

          <div className="inline-flex items-center font-medium tracking-tight leading-none rounded-full text-sm gap-x-2 px-3 py-1 min-h-7 xl:min-h-8 xl:py-1.5 xl:text-base text-gray-500 bg-gray-100/50">
            <Clock size={14} />
            <div>{item.time}</div>
          </div>
        </div>

        <h2 className="inline-flex flex-wrap text-balance relative text-left justify-start text-gray-900 text-2xl/none xl:text-3xl/none 4xl:text-4xl/none font-medium tracking-tight group-hover:text-blue-600 transition-colors">
          {item.title}
        </h2>
      </div>
    </Link>
  );
}
