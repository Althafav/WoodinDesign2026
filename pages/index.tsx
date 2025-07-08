import React, { useEffect, useRef } from "react";
import SpinnerComponent from "@/components/UI/SpinnerComponent";
import Globals from "@/modules/Globals";
import { Homepagesaudi } from "@/models/homepagesaudi";

import { GetServerSideProps } from "next";

import AboutSection2 from "@/components/Home/v2/AboutSection2";
import UpcomingSection2 from "@/components/Home/v2/UpcomingSection2";
import AwardSection2 from "@/components/Home/v2/AwardSection2";
import WorkshopSection2 from "@/components/Home/v2/WorkshopSection2";
import TargetAudientSection from "@/components/Home/v2/TargetAudientSection";
import WhyAttendSection from "@/components/Home/v2/WhyAttendSection";
import AgendaSection2 from "@/components/Home/v2/AgendSection2";
import SaudiVisionSection from "@/components/Home/v2/SaudiVisionSection";

import Head from "next/head";
import HeroSection2 from "@/components/Home/v2/HeroSection2";

type PageProps = { pageData: Homepagesaudi | null };

export default function Page({ pageData }: PageProps) {
  // const wrapperRef = useRef<HTMLDivElement>(null);
  // const contentRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   let smoother: any;

  //   async function initSmooth() {
  //     if (!wrapperRef.current || !contentRef.current) return;
  //     const { gsap } = await import("gsap");
  //     const { ScrollTrigger } = await import("gsap/ScrollTrigger");
  //     const { ScrollSmoother } = await import("gsap/ScrollSmoother");

  //     gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  //     smoother = ScrollSmoother.create({
  //       wrapper: wrapperRef.current,
  //       content: contentRef.current,
  //       smooth: 1,
  //       effects: true,
  //       normalizeScroll: true,
  //     });
  //   }

  //   initSmooth();

  //   return () => smoother?.kill();
  // }, []);

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
        <meta property="og:url" content="https://www.woodindesign.world/" />
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

        <link rel="canonical" href="https://www.woodindesign.world/" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div>
        <div className="homepage">
          <HeroSection2 pageData={pageData} />
          <AboutSection2 pageData={pageData} />
          <TargetAudientSection pageData={pageData} />
          <WhyAttendSection pageData={pageData} />
          <SaudiVisionSection pageData={pageData} />
          <AgendaSection2 pageData={pageData} />
          <WorkshopSection2 pageData={pageData} />
          <AwardSection2 pageData={pageData} />
          <UpcomingSection2 pageData={pageData} />
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const response: any = await Globals.KontentClient.item("home_page___saudi")
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
