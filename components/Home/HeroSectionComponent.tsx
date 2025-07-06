import { Homepagesaudi } from "@/models/homepagesaudi";
import React from "react";
import { FaCalendar, FaTrophy, FaUsers } from "react-icons/fa";

interface PageDataProps {
  pageData: Homepagesaudi | null;
}

const HeroSectionComponent: React.FC<PageDataProps> = ({ pageData }) => {
  if (!pageData) {
    return null;
  }
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden ">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={pageData.bannerimage.value[0]?.url}
          alt="Beautiful wooden architecture interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/75" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center text-white px-4 flex-1 flex flex-col justify-end py-20">
        <div className="space-y-8">
          {/* Main Title */}
          <h1 className="text-6xl lg:text-8xl tracking-wider leading-none">
            {pageData.bannerheading.value}
          </h1>

          {/* Subtitle */}
          <div
            className="text-xl lg:text-2xl tracking-wide opacity-90"
            dangerouslySetInnerHTML={{
              __html: pageData.bannersubheading.value,
            }}
          />

          {/* Date and Location */}
          <div className="text-lg lg:text-xl tracking-wide opacity-80">
            {pageData.datevenue.value}
          </div>

          {/* Register Button */}
          <div className="pt-4">
                <button className="bg-primary-saudi hover:bg-green-600 text-white text-lg px-12 py-3 rounded-full tracking-wide">
                  Register Now
                </button>
              </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      {/* <div className="relative z-10 w-full pb-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center text-white group cursor-pointer">
              <div className="mb-3 flex justify-center">
                <FaCalendar className="w-8 h-8 group-hover:text-amber-300 transition-colors" />
              </div>
              <div className="text-sm tracking-wide group-hover:text-amber-300 transition-colors">
                Agenda
              </div>
            </div>

            <div className="text-center text-white group cursor-pointer">
              <div className="mb-3 flex justify-center">
                <FaUsers className="w-8 h-8 group-hover:text-amber-300 transition-colors" />
              </div>
              <div className="text-sm tracking-wide group-hover:text-amber-300 transition-colors">
                Speakers
              </div>
            </div>

            <div className="text-center text-white group cursor-pointer">
              <div className="mb-3 flex justify-center">
                <svg
                  className="w-8 h-8 group-hover:text-amber-300 transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
                </svg>
              </div>
              <div className="text-sm tracking-wide group-hover:text-amber-300 transition-colors">
                Workshops
              </div>
            </div>

            <div className="text-center text-white group cursor-pointer">
              <div className="mb-3 flex justify-center">
                <FaTrophy className="w-8 h-8 group-hover:text-amber-300 transition-colors" />
              </div>
              <div className="text-sm tracking-wide group-hover:text-amber-300 transition-colors">
                Awards
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default HeroSectionComponent;
