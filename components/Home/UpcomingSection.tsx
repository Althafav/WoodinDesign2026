import { Homepagesaudi } from "@/models/homepagesaudi";
import React from "react";

interface PageDataProps {
  pageData: Homepagesaudi | null;
}

const UpcomingSection: React.FC<PageDataProps> = ({ pageData }) => {
  if (!pageData) {
    return null;
  }
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden ">
      <div className="absolute inset-0">
        <img
          src={pageData.upcomingbackgroundimage.value[0]?.url}
          alt="Beautiful wooden architecture interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-10 text-center text-white px-4 flex-1 flex flex-col justify-center py-20">
        <h1 className="text-3xl lg:text-8xl ">
          {pageData.upcomingheading.value}
        </h1>

        <div className="flex justify-center py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {pageData.upcomingitems.value.map((item: any, index: number) => {
              return (
                <div key={index}>
                  <img
                    className="w-[300px] object-contain"
                    src={item.image.value[0]?.url}
                    alt=""
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingSection;
