import Image from "next/image";
import SwiperMarquee from "./SwiperMarquee";
import banner from "@/assets/banner/b2087e0cd3f699d3efc76f809ec72a85a6ab378e-1080x1350.webp";
import Button from "@/common/Button";

export default function Agencies() {
  return (
    <section className="pt-10 md:pt-16" style={{ position: "relative" }}>
      <div className="w-full flex flex-col md:flex-row  md:items-center px-4 md:px-6 ">
        <p className="  text-nowrap w-40 text-sm font-medium">
          The agency behind...
        </p>
        <SwiperMarquee />
      </div>
      <div className=" py-12 md:py-24 px-4 md:px-7 flex justify-between">
        <div className="w-full mb-1 md:mt-2 hidden md:block md:mb-0 max-w-sm xl:max-w-xl 3xl:max-w-2xl 4xl:max-w-3xl">
          <p className="md:inline-flex flex-wrap hidden text-balance relative text-left justify-start text-black text-lg/tight lg:text-lg/tight xl:text-2xl 4xl:text-3xl font-medium xl:leading-[1.3] tracking-tight">
            A global team of search-first content marketers engineering semantic
            relevancy & category signals for both the internet and people
          </p>
        </div>

        <div className="flex flex-col">
          <div className="flex-wrap relative w-full md:max-w-2xl  text-left gap-2.5 text-justify-start inline-flex  text-grey-900 text-5xl  lg:text-6xl xl:text-[5rem] 3xl:text-7.5xl 3xl font-sans-primary font-semibold tracking-tight">
            <div className="inline mr-2 pointer-fine:mr-0">Driving</div>
            <div className="inline mr-2 pointer-fine:mr-0">Demand</div>
            <div className="inline mr-2 pointer-fine:mr-0">&amp;</div>
            <div className="inline mr-2 pointer-fine:mr-0">Discovery</div>
            <div className="inline shrink-0  relative overflow-hidden mr-2 pointer-fine:mr-0">
              <div className="size-16 md:size-20 relative ">
                <Image
                  src={banner}
                  alt=""
                  fill
                  loading="lazy"
                  sizes="80px"
                  className="object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
          <p className="text-justify-start text-grey-900 mt-5 md:mt-10 md:hidden font-semibold tracking-tight">
            We&apos;re an award-winning full-service performance marketing and
            digital innovation agency working across 8 global offices.
            We&apos;re known for engineering category-defining search and
            AI-first products for the world&apos;s most ambitious companies.
          </p>

          {/* Button Section */}
          <div className="flex flex-wrap gap-4 mt-4">
            <Button
              className="w-full md:w-auto"
              href="/work"
              text="Our Story"
            />
            <Button
              className="w-full md:w-auto"
              href="/work"
              text="Our Services"
              variant="outline"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
