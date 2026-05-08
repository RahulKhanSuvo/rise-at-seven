import SwiperMarquee from "./SwiperMarquee";

export default function Agencies() {
  return (
    <div className="w-full flex items-center px-4 md:px-6 bg-white pt-6 lg:pt-12">
      <p className="  text-nowrap w-40 text-sm font-medium">
        The agency behind...
      </p>
      <SwiperMarquee />
    </div>
  );
}
