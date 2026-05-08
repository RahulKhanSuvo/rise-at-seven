import SwiperMarquee from "./SwiperMarquee";

export default function Agencies() {
  return (
    <section>
      <div className="w-full flex flex-col md:flex-row  md:items-center px-4 md:px-6 bg-white">
        <p className="  text-nowrap w-40 text-sm font-medium">
          The agency behind...
        </p>
        <SwiperMarquee />
      </div>
      <div>
        <p>
          A global team of search-first content marketers engineering semantic
          relevancy & category signals for both the internet and people
        </p>
        <div></div>
      </div>
    </section>
  );
}
