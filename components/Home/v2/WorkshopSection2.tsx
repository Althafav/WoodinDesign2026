import { Homepagesaudi } from "@/models/homepagesaudi";
import { Globe, Heart, TreePine, Wrench } from "lucide-react";

interface PageDataProps {
  pageData: Homepagesaudi | null;
}

const WorkshopSection2: React.FC<PageDataProps> = ({ pageData }) => {
  if (!pageData) {
    return null;
  }
  const participantBenefits = [
    {
      title: "Deep Understanding of Wood's Value",
      description:
        "A deeper understanding of wood’s environmental, aesthetic, and structural value.",
      icon: TreePine,
    },
    {
      title: "Professional Networks",
      description:
        "New networks and collaborative opportunities across disciplines and geographies",
      icon: Globe,
    },
    {
      title: "Practical Tools & Knowledge",
      description:
        "Practical tools for compliance, sourcing, and sustainable design",
      icon: Wrench,
    },
    {
      title: "Human-Centered Design Appreciation",
      description:
        "A renewed appreciation of wood’s role in building healthier, smarter, and more human-centered spaces",
      icon: Heart,
    },
  ];

  return (
    <section id="workshops" className="py-10 bg-black relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 backgroundimage top-0 right-0 ">
        <img
          src={pageData.workshopbackgroundimage.value[0]?.url}
          alt="Wood in Design Awards 2025"
          className="w-full h-full object-cover "
        />
      </div>
      <div className=" relative z-10 container mx-auto px-4">
        <div className="max-w-4xl">
          {/* Header Section */}
          <div className="text-left mb-5">
            <h2 className="text-4xl tracking-tighter text-[#F1B936] mb-6 font-bold">
              Workshops and panel discussions
            </h2>

            <p className="text-xl text-[#F1B936] leading-relaxed font-light">
              Bridge the gap between digital tools and material intelligence,
              showing how wood is evolving as a medium for sustainable
              innovation and timeless beauty.
            </p>
          </div>

          <div className="font-light mb-5">
            <p className="text-lg text-white leading-relaxed">
              <span className="text-white font-medium">"Wood in Design"</span>{" "}
              serves as a platform for cross-sector collaboration, encouraging
              architects, technologists, artists, regulators, and
              environmentalists to co-create the next generation of sustainable
              and meaningful spaces.
            </p>
            <p className="text-lg text-white leading-relaxed mt-4">
              By fostering a culture of innovation and ecological awareness, the
              conference empowers professionals to integrate wood into
              future-proof, compliant, and inspiring environments—locally and
              globally.
            </p>
          </div>

          {/* Main Content Grid */}

          <div className="">
            {/* Right Column - Benefits */}
            <div className="">
              <div className="bg-orangeWiD/50 rounded-2xl p-8">
                <h3 className="text-2xl text-[#FFEDC4] mb-8">
                  Participants will leave with: 
                </h3>

                <div className="grid sm:grid-cols-2 gap-5">
                  {participantBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex items-start gap-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <circle
                            cx="12"
                            cy="12"
                            r="11"
                            stroke="url(#paint0_linear_15_526)"
                            stroke-width="2"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_15_526"
                              x1="24"
                              y1="12"
                              x2="0"
                              y2="12"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#623D21" />
                              <stop offset="1" stop-color="white" />
                            </linearGradient>
                          </defs>
                        </svg>
                        <p className="text-white leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkshopSection2;
