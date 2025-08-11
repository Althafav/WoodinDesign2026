import { Homepagesaudi } from "@/models/homepagesaudi";
import React from "react";
import { Award, Leaf, Star, Target, Trophy, Zap } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";

interface PageDataProps {
  pageData: Homepagesaudi | null;
}

const AwardSection2: React.FC<PageDataProps> = ({ pageData }) => {
  const { locale } = useRouter();
  if (!pageData) {
    return null;
  }

  return (
    <section
      id="awards"
      className="relative py-20 overflow-hidden bg-black award-section-wrapper"
    >
      {/* Background Image */}
      <div className="absolute inset-0 backgroundimage top-0 right-0 ">
        <img
          src={pageData.awardbackgroundimage.value[0]?.url}
          alt="Wood in Design Awards 2025"
          className="w-full h-screen object-cover black-linear-to-bottom-mask"
        />

        <img
          src={pageData.patternimage.value[0]?.url}
          alt="Wood in Design Awards 2025"
          className="w-full h-full object-cover black-linear-to-bottom-mask"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="">
          {/* Header */}
          <div className=" mb-16 w-full lg:w-1/2">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl award-section-heading-1 mb-6 font-bold">
              {pageData.awardheading.value}
            </h2>
            <p className="text-xl text-white mb-6 max-w-3xl mx-auto">
              {pageData.awardsubheading.value}
            </p>
            <p className="text-gray-300 leading-relaxed ">
              {pageData.awarddescription.value}
            </p>
          </div>

          {/* Award Categories */}
          <div className="mb-16">
            <h3 className="text-3xl text-white mb-12 ">
              {pageData.awardcategoryheading.value}
            </h3>

            <div className="flex justify-items-center">
              <div className="grid md:grid-cols-2 gap-8 ">
                {pageData.awardcategoryitems.value.map(
                  (item: any, index: number) => (
                    <div
                      key={index}
                      className="bg-white/10 backdrop-blur-sm border-green-400/20 hover:bg-white/20 rounded-2xl transition-all duration-300 transform hover:-translate-y-2"
                    >
                      <div className="p-6">
                        <div className="flex items-start space-x-4">
                          <div>
                            <h4 className="text-xl font-medium award-section-heading-2 mb-3">
                              {item.name.value}
                            </h4>
                            <p className="text-gray-200 text-sm leading-relaxed">
                              {item.description.value}
                            </p>

                            {item.ctabuttonlink.value && (
                              <div className="mt-8">
                                <Link
                                  href={item.ctabuttonlink.value}
                                  className="px-4 py-2 bg-orangeWiD rounded-full text-white"
                                >
                                  <span>{item.ctabuttonname.value}</span>
                                </Link>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Awards Dinner Information */}
          <div className="text-center">
            <div className="border-orangeWiD border-1 backdrop-blur-sm  max-w-2xl mx-auto rounded-2xl">
              <div className="p-8">
                <Trophy className="w-12 h-12 text-orangeWiD mx-auto mb-6 transition-transform duration-300 hover:scale-110 hover:rotate-12" />
                <h3 className="text-2xl text-white mb-4">
                  {locale === "ar"
                    ? "سيتم تكريم الفائزين خلال"
                    : " Winners will be recognized during the"}
                </h3>
                <h4 className="text-3xl text-orangeWiD mb-4">
                  {locale === "ar"
                    ? "حفل عشاء جوائز WoodShow"
                    : "WoodShow Awards Dinner"}
                </h4>
                <p className="text-xl text-gray-300 italic">
                  {pageData.awardsubmisiondeadline.value}
                </p>
              </div>
            </div>

            <div className="mt-12 space-y-4">
              <p className="text-sm text-gray-300">
                {locale === "ar"
                  ? "الموعد النهائي للتقديم:"
                  : "Submission deadline:"}
                <span className="mx-2"> {pageData.awardsubmisiondeadline.value}</span>
              </p>
              {pageData.awardctalink.value && (
                <div className="mt-10">
                  <Link
                    className="bg-orangeWiD p-2 text-white text-md rounded-2xl"
                    href={pageData.awardctalink.value}
                  >
                    <span>{pageData.awardctabuttonname.value}</span>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardSection2;
