import Image, { StaticImageData } from "next/image";
import TextSideAnimation from "./TextSideAnimation";
import { motion } from "motion/react";
export default function HeroBigText({
  heroLogo,
}: {
  heroLogo: StaticImageData;
}) {
  const text1 = "We";
  const text2 = "Create";
  const text3 = "Category";
  return (
    <div className="flex w-screen justify-center flex-col items-center ">
      <div className="flex gap-2.5">
        <TextSideAnimation text={text1} />
        <TextSideAnimation text={text2} />
      </div>
      <div className="flex items-center gap-4">
        <TextSideAnimation text={text3} />
        <div className="size-[113px] relative">
          <Image
            src={heroLogo}
            alt="background"
            fill
            className="object-cover rounded-[17px]"
          />
        </div>
        <TextSideAnimation text="Leaders" />
      </div>
    </div>
  );
}
