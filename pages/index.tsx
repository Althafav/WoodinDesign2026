import React, { useEffect, useRef } from "react";
import SpinnerComponent from "@/components/UI/SpinnerComponent";
import Globals from "@/modules/Globals";
import { Homepagesaudi } from "@/models/homepagesaudi";
import HeroSectionComponent from "@/components/Home/HeroSectionComponent";
import AboutSection from "@/components/Home/AboutSection";
import AgendaSection from "@/components/Home/AgendaSection";
import AwardsSection from "@/components/Home/AwardSection";
import { GetServerSideProps } from "next";
import WorkshopsSection from "@/components/Home/WorkshopSection";
import UpcomingSection from "@/components/Home/UpcomingSection";

type PageProps = { pageData: Homepagesaudi | null };

export default function Page({ pageData }: PageProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let smoother: any;

    async function initSmooth() {
      if (!wrapperRef.current || !contentRef.current) return;
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      const { ScrollSmoother } = await import("gsap/ScrollSmoother");

      gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

      smoother = ScrollSmoother.create({
        wrapper: wrapperRef.current,
        content: contentRef.current,
        smooth: 1,
        effects: true,
        normalizeScroll: true,
      });
    }

    initSmooth();

    return () => smoother?.kill();
  }, []);

  if (!pageData) return <SpinnerComponent />;

  return (
    <div id="smooth-wrapper" ref={wrapperRef}>
      <div id="smooth-content" ref={contentRef}>
        <div className="homepage">
          <HeroSectionComponent pageData={pageData} />
          <AboutSection pageData={pageData} />
          <AgendaSection pageData={pageData} />
          <WorkshopsSection />
          <AwardsSection />
          <UpcomingSection pageData={pageData}/>
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
