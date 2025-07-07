import { Homepagesaudi } from "@/models/homepagesaudi";
import React from "react";

interface PageDataProps {
  pageData: Homepagesaudi | null;
}

const UpcomingSection2: React.FC<PageDataProps> = ({ pageData }) => {
  if (!pageData) {
    return null;
  }
  return (
    <div className="">
      <div className="">
        <img
          src={pageData.upcomingbackgroundimage.value[0]?.url}
          alt="Beautiful wooden architecture interior"
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default UpcomingSection2;
