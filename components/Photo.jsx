"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2, duration: 0.4, ease: "easeIn" },
      }}
      className="w-full h-full relative"
    >
      {/* image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeOut" },
        }}
        className="w-[298px] h-[298px] xl:h-[498px] mix-blend-lighten absolute xl:bottom-2 bottom-11  xl:left-9"
      >
        <Image
          src="/mp.png"
          priority
          quality={100}
          fill
          alt=""
          className="object-contain"
        />
      </motion.div>

      {/* circle */}
      <motion.svg
        className="w-[320px] xl:w-[406px] h-320px xl:h-[406px]"
        fill="transparent"
        viewBox="0 0 506 506"
        xmlns="http://www.w3.arg/2000/svg"
      >
        <motion.circle
          r="250"
          cx="253"
          cy="253"
          stroke="#00ff99"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ strokeDasharray: "24 10 0 0" }}
          animate={{
            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 255 22 22"],
            rotate: [120, 360],
          }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        />
      </motion.svg>
    </motion.div>
  );
};

export default Photo;
