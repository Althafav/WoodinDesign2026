import SpinnerComponent from "@/components/UI/SpinnerComponent";
import Globals from "@/modules/Globals";
import { GetServerSideProps } from "next";
import React, { useState } from "react";
import { FaCalendar } from "react-icons/fa6";
import { Homepagesaudi } from "@/models/homepagesaudi";
import HeroSectionComponent from "@/components/Home/HeroSectionComponent";
import AboutSection from "@/components/Home/AboutSection";
import { Conferencedate } from "@/models/conferencedate";
import { Sessionitem } from "@/models/sessionitem";
import AwardsSection from "@/components/Home/AwardSection";
import AgendaSection from "@/components/Home/AgendaSection";

type PageProps = {
  pageData: Homepagesaudi | null;
};

export default function Page({ pageData }: PageProps) {
  if (!pageData) return <SpinnerComponent />;

  return (
    <div className="homepage">
      <HeroSectionComponent pageData={pageData} />
      <AboutSection pageData={pageData} />
      <AgendaSection pageData={pageData} />

      <AwardsSection />
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
