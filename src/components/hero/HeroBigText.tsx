import Image, { StaticImageData } from "next/image";
import TextSideAnimation from "./TextSideAnimation";

export default function HeroBigText({
  heroLogo,
}: {
  heroLogo: StaticImageData;
}) {
  const text1 = "We";
  const text2 = "Create";
  const text3 = "What Matters";
  return (
    <div className="flex w-screen justify-center flex-col items-center ">
      <div className="flex gap-2.5">
        <TextSideAnimation text={text1} />
        <TextSideAnimation text={text2} />
      </div>
      <TextSideAnimation text={text3} />
      <div className="size-[113px] relative">
        <Image
          src={heroLogo}
          alt="background"
          fill
          className="object-cover rounded-"
        />
      </div>
    </div>
  );
}
