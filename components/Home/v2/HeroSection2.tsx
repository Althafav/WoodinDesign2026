import { Homepagesaudi } from "@/models/homepagesaudi";
import React from "react";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";

interface PageDataProps {
  pageData: Homepagesaudi | null;
}

const HeroSection2: React.FC<PageDataProps> = ({ pageData }) => {
  const { locale } = useRouter();
  if (!pageData) {
    return null;
  }
  return (
    <section className="relative hero-section-wrapper sm:min-h-screen flex flex-col justify-center items-start overflow-hidden ">
      {/* Background Image */}
      <div className="absolute inset-0 image-wrapper-hero">
        <img
          src={pageData.bannerimage.value[0]?.url}
          alt="Beautiful wooden architecture interior"
          className="w-full sm:w-9/12 h-full object-cover brightness-50"
        />
      </div>

      <div className="w-full relative hidden sm:block">
        <img
          src={pageData.patternimage.value[0]?.url}
          alt=""
          className="absolute right-0 w-1/2"
        />
      </div>

      <div
        className={`absolute z-10 bottom-10 ${
          locale === "ar" ? "left-10" : "right-10"
        } hidden sm:block`}
      >
        <motion.img
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
          src="/assets/imgs/wid-logowithdate.png"
          alt=""
          className="w-[550px] "
        />
        <motion.div
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1.2,
            delay: 1.2,
            type: "tween",
          }}
          className="mt-10 flex gap-2"
        >
          {pageData.ctabutton.value.map((item: any, index: number) => (
            <Link
              key={index}
              href={item.link.value}
              target={item.target.value === 1 ? "_blank" : "_self"}
              className="inline-block"
            >
              <span
                className="
        text-2xl
        bg-primary-saudi
        text-white
        px-6 py-3
        rounded-full
        shadow-[0_0_20px_rgba(34,197,94,0.6)]
        transition-transform duration-300 ease-out
        transform
        hover:scale-105
        hover:shadow-[0_0_25px_rgba(34,197,94,0.8)]
      "
              >
                {item.name.value}
              </span>
            </Link>
          ))}
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-start text-white px-4 flex-1 flex flex-col  justify-end pt-40 pb-20 sm:py-20">
        <motion.div
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.8 }}
          className="max-w-[500px]"
        >
          <p className="text-4xl mb-4">
            {locale === "ar"
              ? <span className="text-5xl">التصميم العصري الحديث</span>
              : "Designing for Wellness:"}
          </p>

          <div className="text-4xl font-medium">
            <p className="text-primary-saudi">
              {locale === "ar" ? "" : "The Wooden Age:"}
            </p>
            <p className="text-orangeWiD">
              {locale === "ar"
                ? <span className="text-4xl">المرونة, التجديد و التطوير</span>
                : "Resilience, Restoration, and Renaissance"}
            </p>
          </div>

          <motion.div
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 1.2,
              delay: 1.2,
              type: "tween",
            }}
            className="mt-10 flex gap-10 flex-col  sm:hidden"
          >
            {pageData.ctabutton.value.map((item: any, index: number) => (
              <Link
                key={index}
                href={item.link.value}
                target={item.target.value === 1 ? "_blank" : "_self"}
                className="inline-block"
              >
                <span
                  className="
        text-xl
        bg-primary-saudi
        text-white
        px-6 py-3
        rounded-full
        shadow-[0_0_20px_rgba(34,197,94,0.6)]
        transition-transform duration-300 ease-out
        transform
        hover:scale-105
        hover:shadow-[0_0_25px_rgba(34,197,94,0.8)]
      "
                >
                  {item.name.value}
                </span>
              </Link>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection2;
