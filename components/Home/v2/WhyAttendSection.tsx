import { Homepagesaudi } from "@/models/homepagesaudi";
import { useRouter } from "next/router";
import React from "react";

interface PageDataProps {
  pageData: Homepagesaudi | null;
}

const WhyAttendSection: React.FC<PageDataProps> = ({ pageData }) => {
  const { locale } = useRouter();
  if (!pageData) {
    return null;
  }
  return (
    <div className=" target-audience-section relative ">
      <img
        src={pageData.patternimage.value[0]?.url}
        alt=""
        className="absolute right-0 bottom-0 w-1/3"
      />
      <div className="herosection-wrapper-home relative w-full sm:h-[300px] overflow-hidden">
        <img
          src={pageData.whyattendimage.value[0]?.url}
          alt=""
          className="absolute inset-0 w-full h-full object-cover  white-linear-to-bottom-mask"
        />
      </div>
      <div className="bg-white container mx-auto py-10">
        <div className="text-4xl sm:text-7xl flex gap-2 font-bold">
          <p className="text-black">
            {locale === "ar" ? "لماذا تشارك في" : "Why"}
          </p>
          <p className="text-orangeWiD ">
            {" "}
            {locale === "ar" ? " المؤتمر؟" : "Attend ?"}
          </p>
        </div>
      </div>
      <div className="py-20 relative z-10 bg-white/80">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10">
            {pageData.whyattenditems.value.map((item: any, index: number) => {
              return (
                <div
                  key={index}
                  className="transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="flex gap-5 items-start flex-col">
                    <p className="font-medium text-xl">{item.name.value}</p>
                    <div
                      className="text-gray-700"
                      dangerouslySetInnerHTML={{ __html: item.content.value }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyAttendSection;
