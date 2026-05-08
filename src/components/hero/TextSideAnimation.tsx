import { motion } from "motion/react";
export default function TextSideAnimation({ text }: { text: string }) {
  return (
    <div className="inline-flex ">
      {text.split("").map((letter, index) => (
        <motion.span
          key={index}
          className=" text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 4xl:text-10xl font-semibold leading-none tracking-tight"
          initial={{ y: 30 }}
          animate={{ y: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
            delay: index * 0.05,
          }}
        >
          {letter}
        </motion.span>
      ))}
    </div>
  );
}
