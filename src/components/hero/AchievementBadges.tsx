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
      <div className="relative" style={{ width: "24px", height: "35px" }}>
        <Image
          src={badge1}
          alt="achievement badges"
          fill
          sizes="24px"
          className="object-contain"
        />
      </div>
      <div className="relative" style={{ width: "50px", height: "22px" }}>
        <Image
          src={badge5}
          alt="achievement badges"
          fill
          sizes="50px"
          className="object-contain"
        />
      </div>
      <div className="relative" style={{ width: "38px", height: "20px" }}>
        <Image
          src={badge2}
          alt="achievement badges"
          fill
          sizes="38px"
          className="object-contain"
        />
      </div>
      <div className="relative" style={{ width: "50px", height: "22px" }}>
        <Image
          src={badge4}
          alt="achievement badges"
          fill
          sizes="50px"
          className="object-contain"
        />
      </div>
      <div className="relative" style={{ width: "50px", height: "22px" }}>
        <Image
          src={badge3}
          alt="achievement badges"
          fill
          sizes="50px"
          className="object-contain"
        />
      </div>
      <div className="relative" style={{ width: "24px", height: "35px" }}>
        <Image
          src={badge6}
          alt="achievement badges"
          fill
          sizes="24px"
          className="object-contain"
        />
      </div>
    </div>
  );
}
