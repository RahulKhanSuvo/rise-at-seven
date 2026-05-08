import Image from "next/image";
import badge1 from "@/assets/logo/Vector.svg";
import badge2 from "@/assets/logo/Mask-group.webp";
import badge3 from "@/assets/logo/UK-Content-Awards-White.webp";
import badge4 from "@/assets/logo/UKSocial-Media-Awards-White.webp";
import badge5 from "@/assets/logo/global-search-awards.webp";
import badge6 from "@/assets/logo/Vector2.svg";
export default function AchievementBadges() {
  return (
    <div className="w-fit h-fit flex items-center justify-end gap-2">
      <Image
        src={badge1}
        alt="achievement badges"
        className="object-contain"
        width={24}
        height={35}
      />
      <Image
        src={badge5}
        alt="achievement badges"
        className="object-contain"
        width={50}
        height={22}
      />
      <Image
        src={badge2}
        alt="achievement badges"
        className="h-fit"
        width={38}
        height={10}
      />
      <Image
        src={badge4}
        alt="achievement badges"
        className="object-contain"
        width={50}
        height={22}
      />
      <Image
        src={badge3}
        alt="achievement badges"
        className="object-contain"
        width={50}
        height={22}
      />
      <Image
        src={badge6}
        alt="achievement badges"
        className="object-contain"
        width={24}
        height={35}
      />
    </div>
  );
}
