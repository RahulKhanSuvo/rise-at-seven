import Image, { StaticImageData } from "next/image";
import TextSideAnimation from "../../utils/TextSideAnimation";
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
      <div className="flex gap-2.5 overflow-hidden h-fit">
        <TextSideAnimation text={text1} />
        <TextSideAnimation text={text2} />
      </div>
      <div className="flex items-center gap-4 overflow-hidden h-fit pb-6">
        <TextSideAnimation text={text3} />
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 113, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.6 }}
          className="h-[113px] relative overflow-hidden flex justify-center rounded-3xl"
        >
          <div className="w-[113px] h-[113px] relative shrink-0">
            <Image
              src={heroLogo}
              alt="background"
              fill
              className="object-cover "
            />
          </div>
        </motion.div>
        <TextSideAnimation text="Leaders" />
      </div>
    </div>
  );
}
