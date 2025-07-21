import React from "react";
import SpinnerComponent from "@/components/UI/SpinnerComponent";
import Globals from "@/modules/Globals";

import { GetServerSideProps } from "next";

import Head from "next/head";

import { Awardpage } from "@/models/awardpage";
import AwardCategoryAccordion from "@/components/UI/AwardCategoryAccordin";
import Link from "next/link";
import { hoverRotateClasses } from "@/utils/tailwindanimationclass";

type PageProps = { pageData: Awardpage | null };

export default function Page({ pageData }: PageProps) {
  if (!pageData) return <SpinnerComponent />;

  return (
    <div>
      <Head>
        <title>{pageData.seometadataPagetitle.value}</title>
        <meta name="title" content={pageData.seometadataMetatitle.value} />
        <meta
          name="description"
          content={pageData.seometadataMetadescription.value}
        />

        <meta
          property="og:title"
          content={pageData.seometadataPagetitle.value}
        />
        <meta
          property="og:description"
          content={pageData.seometadataMetadescription.value}
        />
        <meta
          property="og:url"
          content="https://www.woodindesign.world/saudi/awards"
        />
        <meta property="og:site_name" content={Globals.SITE_NAME} />
        <meta
          property="og:image"
          content="https://www.woodindesign.world/assets/logos/SWS-WoodinDesign (1).png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="article" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={pageData.seometadataMetatitle.value}
        />
        <meta
          name="twitter:description"
          content={pageData.seometadataMetadescription.value}
        />
        <meta
          name="twitter:image"
          content="https://www.woodindesign.world/assets/logos/SWS-WoodinDesign (1).png"
        />

        <link
          rel="canonical"
          href="https://www.woodindesign.world/saudi/awards"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div>
        <div className="awardpage">
          <div className="banner-section-wrapper relative min-h-[300px] flex items-end py-10 ">
            <div className="absolute inset-0">
              <img
                src={pageData.bannerimage.value[0]?.url}
                alt=""
                className="w-full h-full object-cover brightness-50"
              />
            </div>

            <div className="relative z-10 container mx-auto ">
              <div className="">
                <h1 className="text-white text-center text-2xl sm:text-4xl font-medium tracking-tighter">
                  {pageData.bannerheading.value}
                </h1>

                {pageData.ctabuttonlink.value && (
                  <div className="mt-8 flex justify-center items-center">
                    <Link
                      href={pageData.ctabuttonlink.value}
                      className="border border-white text-white px-4 py-2 rounded-full text-center"
                    >
                      <span>{pageData.ctabuttonname.value}</span>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="about-section py-10">
            <div className="container mx-auto">
              <h2 className="text-primary-saudi text-center text-2xl sm:text-3xl font-medium tracking-tighter mb-5">
                {pageData.aboutheading.value}
              </h2>
              <p className="text-md text-justify">
                {pageData.aboutdescription.value}
              </p>
            </div>
          </div>

          <div className="timeline-section-wrapper py-10">
            <h2 className="text-primary-saudi text-center text-2xl sm:text-3xl font-medium tracking-tighter mb-10">
              {pageData.timelineheading.value}
            </h2>

            <div className="container mx-auto">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 sm:gap-10 justify-center justify-items-center">
                {pageData.timelineitems.value.map(
                  (item: any, index: number) => {
                    return (
                      <div
                        key={index}
                        className="w-[180px] h-full border-2 border-primary-saudi flex flex-col justify-between items-center px-1 py-3 gap-5 rounded-2xl"
                      >
                        <h5 className="text-md font-medium text-center max-w-[100px]">
                          {item.name.value}
                        </h5>

                        <div>
                          <img
                            src={item.image.value[0]?.url}
                            alt=""
                            className={`w-[80px] h-[80px] object-contain ${hoverRotateClasses}`}
                          />
                        </div>

                        <p className="text-white bg-primary-saudi px-2 py-1  rounded-xl text-sm">
                          {item.date.value}
                        </p>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          </div>

          <div className="categories-section-wrapper py-10" id="categories">
            <div className="container mx-auto">
              <h2 className="text-primary-saudi text-center text-2xl sm:text-3xl font-medium tracking-tighter mb-10">
                {pageData.categoriesheading.value}
              </h2>
              <div className="bg-green-200 p-5 rounded-2xl">
                <AwardCategoryAccordion
                  items={pageData.categoriesitems.value}
                />
              </div>
            </div>
          </div>

          <div className="faq-section-wrapper py-10">
            <div className="container mx-auto">
              <div className="border-2 rounded-2xl p-5 sm:p-10">
                <h2 className="text-primary-saudi text-center text-2xl sm:text-3xl font-medium tracking-tighter mb-10">
                  {pageData.faqheading.value}
                </h2>
                <div className="flex gap-5 flex-col px-5">
                  {pageData.faqitems.value.map((item: any, index: number) => {
                    return (
                      <div key={index}>
                        <h2>{item.name.value}</h2>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: item.content.value,
                          }}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const { locale } = context;
  const languageCode = locale === "ar" ? "Arabic" : "default";
  try {
    const response: any = await Globals.KontentClient.item("award_page_2026")
      .languageParameter(languageCode)
      .withParameter("depth", "4")
      .toPromise();

    const pageData = JSON.parse(JSON.stringify(response.item));

    return {
      props: {
        pageData,
      },
    };
  } catch (error) {
    console.error("Error fetching homepage content:", error);
    return {
      props: {
        pageData: null,
      },
    };
  }
};
