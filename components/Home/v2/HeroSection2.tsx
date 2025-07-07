import { Homepagesaudi } from "@/models/homepagesaudi";
import React from "react";

import { motion } from "framer-motion";

interface PageDataProps {
  pageData: Homepagesaudi | null;
}

const HeroSection2: React.FC<PageDataProps> = ({ pageData }) => {
  if (!pageData) {
    return null;
  }
  return (
    <section className="relative hero-section-wrapper  min-h-screen flex flex-col justify-center items-start overflow-hidden ">
      {/* Background Image */}
      <div className="absolute inset-0 image-wrapper-hero">
        <img
          src={pageData.bannerimage.value[0]?.url}
          alt="Beautiful wooden architecture interior"
          className="w-full sm:w-9/12 h-full object-cover"
        />
      </div>

      <div className="w-full relative hidden sm:block">
        <img
          src={pageData.patternimage.value[0]?.url}
          alt=""
          className="absolute right-0 w-1/2"
        />
      </div>
      <motion.img
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
        src="/assets/imgs/wid-logowithdate.png"
        alt=""
        className="w-[550px] absolute z-10 bottom-10 right-10 hidden sm:block"
      />

      {/* Main Content */}
      <motion.div
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.8 }}
        className="relative z-10 text-start text-white px-4 flex-1 flex flex-col items-start justify-end py-20"
      >
        <div className="max-w-[400px]">
          <p className="text-4xl">Designing for Wellness:</p>

          <div className="text-3xl font-medium">
            <p className="text-primary-saudi">The Wooden Age:</p>
            <p className="text-orangeWiD">
              Resilience, Restoration, and Renaissance
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection2;
