import React from "react";
import { TreePine, Factory, Recycle } from "lucide-react";
import { Homepagesaudi } from "@/models/homepagesaudi";
import { hoverRotateClasses } from "@/utils/tailwindanimationclass";

interface PageDataProps {
  pageData: Homepagesaudi | null;
}

const AboutSection: React.FC<PageDataProps> = ({ pageData }) => {
  if (!pageData) {
    return null;
  }
  return (
    <section id="about" className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl text-gray-900 mb-6">
              {pageData.aboutheading.value}{" "}
              <span className="text-primary-saudi">{pageData.aboutsubheading.value}</span>
            </h2>
            <div className="w-16 h-1 bg-primary-saudi mx-auto mb-8"></div>
            <div className="prose  mx-auto" dangerouslySetInnerHTML={{__html: pageData.aboutcontent.value}}/>
           
          </div>

          {/* Main Content */}
          <div className="space-y-16">
           

            {/* Sustainability Goals */}
            <div className="bg-green-50 rounded-2xl p-12 text-center">
              <h3 className="text-2xl text-green-800 mb-8">
                In Line With The Kingdom's Sustainability Goals
              </h3>
              <p className="text-lg text-green-700 mb-12 max-w-2xl mx-auto">
                The conference will address wood's pivotal role in:
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center mx-auto">
                    <TreePine className={`w-8 h-8 text-green-700 ${hoverRotateClasses}`} />
                  </div>
                  <h4 className="text-lg text-green-800">
                    Carbon Sequestration
                  </h4>
                  <p className="text-amber-700 text-sm">
                    Energy-efficient construction and climate-resilient design
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center mx-auto">
                    <Factory className={`w-8 h-8 text-green-700 ${hoverRotateClasses}`} />
                  </div>
                  <h4 className="text-lg text-amber-800">
                    Global Regulatory Landscape
                  </h4>
                  <p className="text-amber-700 text-sm">
                    Including EUDR and its implications for sourcing and
                    compliance
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center mx-auto">
                    <Recycle className={`w-8 h-8 text-green-700 ${hoverRotateClasses}`} />
                  </div>
                  <h4 className="text-lg text-amber-800">
                    Sustainable Practices
                  </h4>
                  <p className="text-amber-700 text-sm">
                    Promoting sustainable forestry and circular economy
                    principles
                  </p>
                </div>
              </div>
            </div>

           
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection
