import React from "react";
import { TreePine, Factory, Recycle } from "lucide-react";
import { Homepagesaudi } from "@/models/homepagesaudi";

interface PageDataProps {
  pageData: Homepagesaudi | null;
}

const AboutSection2: React.FC<PageDataProps> = ({ pageData }) => {
  if (!pageData) {
    return null;
  }
  return (
    <section id="about" className="pt-10 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 ">
        <div className="bg-white relative z-10 overflow-hidden sm:rounded-b-2xl">
          {/* Header */}
          <div className="text-start mb-20">
            <p className="font-medium mb-2 text-lg">
              The "Wood in Design" conference positions wood as a transformative
              material at the heart of sustainable architecture, advanced
              manufacturing, and ecological responsibility—supporting Saudi
              Arabia’s Vision 2030 while contributing to a global design
              renaissance. 
            </p>
            <p>
              Bringing together industry leaders, architects, engineers,
              designers, policymakers, furniture makers, and digital artisans,
              the event explores how wood—both timeless and technologically
              advanced—is reshaping the built environment and creative
              industries. Participants will engage in cross-disciplinary
              dialogue around topics ranging from Cross-Laminated Timber (CLT)
              and Glulam to digital fabrication, biophilic design, and bespoke
              furniture creation. 
            </p>
          </div>

          {/* Main Content */}
          <div className="">
            {/* Sustainability Goals */}
            <div className="bg-orangeWiD sm:rounded-2xl p-12 text-center">
              <h3 className=" text-xl sm:text-2xl text-white mb-8">
                In line with the Kingdom’s sustainability goals, the conference
                will address wood’s pivotal role in:
              </h3>

              <div className="grid md:grid-cols-3 gap-8 ">
                <div className="space-y-4 flex gap-5 items-start">
                  <div className=" flex items-center justify-center mx-auto">
                    <TreePine className="w-8 h-8 text-white" />
                  </div>

                  <p className="text-white text-md text-left font-light">
                    Carbon sequestration, energy-efficient construction, and
                    climate-resilient design;
                  </p>
                </div>

                <div className="space-y-4 flex gap-5 items-start">
                  <div className=" flex items-center justify-center mx-auto">
                    <Factory className="w-8 h-8 text-white" />
                  </div>

                  <p className="text-white text-md text-left font-light">
                    Navigating the evolving global regulatory landscape,
                    including the European Union Deforestation Regulation (EUDR)
                    and its implications for sourcing and compliance; 
                  </p>
                </div>

                <div className="space-y-4 flex gap-5 items-start">
                  <div className=" flex items-center justify-center mx-auto">
                    <Recycle className="w-8 h-8 text-white" />
                  </div>

                  <p className="text-white text-md text-left font-light">
                    Promoting sustainable forestry, circular economy principles,
                    and responsible material sourcing. 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src={pageData.patternimage.value[0]?.url} alt="" className="absolute top-0 right-0 z-0 h-2/3 " />

      <img
        className="w-full object-cover h-auto relative -top-5 z-0 hidden sm:block"
        src={pageData.aboutimage.value[0]?.url}
        alt=""
      />
    </section>
  );
};

export default AboutSection2;
