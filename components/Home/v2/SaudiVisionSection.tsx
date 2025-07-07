import { Homepagesaudi } from "@/models/homepagesaudi";
import { Globe, Heart, TreePine, Wrench } from "lucide-react";

interface PageDataProps {
  pageData: Homepagesaudi | null;
}

const SaudiVisionSection: React.FC<PageDataProps> = ({ pageData }) => {
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
    <section id="workshops" className="py-20 bg-black relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 backgroundimage top-0 right-0 ">
        <img
          src={pageData.saudivisionbackgroundimage.value[0]?.url}
          alt="Wood in Design Awards 2025"
          className="w-full h-full object-cover "
        />
      </div>
      <div className=" relative z-10 container mx-auto px-4">
        <div className="max-w-3xl">
          {/* Header Section */}
          <div className="text-left mb-5">
            <h2 className="text-4xl tracking-tighter text-white mb-6 font-medium">
              {pageData.saudivisionheading.value}
            </h2>

            <p className="text-2xl text-white leading-relaxed font-light">
              {pageData.saudivisionsubheading.value}
            </p>
          </div>

          {/* Main Content Grid */}

          <div className="">
            {/* Right Column - Benefits */}
            <div className="">
              <div className="bg-orangeWiD/50 rounded-2xl p-8">
                <h3 className="text-2xl text-white font-medium mb-8">
                  {pageData.saudivisionfeatureheading.value}
                </h3>

                <div className="flex flex-col gap-5">
                  {pageData.saudivisionfeatureitems.value.map(
                    (item: any, index: number) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="flex items-start gap-5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="37"
                            height="37"
                            viewBox="0 0 37 37"
                            fill="none"
                          >
                            <path
                              d="M19.5295 0L0.793888 25.5607H4.08309L10.3794 16.2483L11.5906 17.1956L5.92471 25.5607H8.206L10.5454 22.8438L10.4126 25.5607H20.1019L36.3281 0H32.1305L19.6871 19.6533L18.4594 18.7417L30.3303 0H27.4352L23.4699 5.94399L22.2587 4.99667L25.5936 0H19.5295ZM37 1.79544L21.2384 26.6152V29.3589L26.954 20.3504L28.1818 21.262L21.2384 32.2008V35.0875L37 8.96469V7.91906L35.175 8.4374L37 5.46139V1.79544ZM0 27.1693V37H1.97684L2.8512 33.595L3.77449 37H6.8953C6.71279 36.4906 6.61325 35.9454 6.61325 35.3735C6.61325 33.7112 7.47599 32.2455 8.76181 31.2356C10.0476 30.2347 11.7648 29.6449 13.6479 29.6449C15.531 29.6449 17.2482 30.2347 18.534 31.2356C18.9986 31.6021 19.4133 32.031 19.7452 32.5047V27.1693H0ZM13.6479 31.2535C12.0552 31.2535 10.6283 31.7629 9.64114 32.5404C8.64567 33.318 8.10645 34.31 8.10645 35.3735C8.10645 35.9454 8.26407 36.4906 8.56271 37H9.91489C9.64114 36.58 9.46693 36.0974 9.46693 35.5611C9.46693 34.5602 10.0559 33.738 10.8357 33.2107C11.6072 32.6745 12.6027 32.3885 13.6894 32.3885C14.7761 32.3885 15.7716 32.6745 16.5431 33.2107C17.3229 33.738 17.9118 34.5602 17.9118 35.5611C17.9118 36.0974 17.7376 36.58 17.4639 37H18.7331C19.0317 36.4906 19.1894 35.9454 19.1894 35.3735C19.1894 34.31 18.6502 33.318 17.6547 32.5404C16.6675 31.7629 15.2407 31.2535 13.6479 31.2535ZM13.6894 33.9972C12.8598 33.9972 12.1132 34.2385 11.6321 34.5691C11.1509 34.8998 10.9601 35.2484 10.9601 35.5611C10.9601 35.8739 11.1509 36.2225 11.6321 36.5532C11.9058 36.7408 12.2625 36.9017 12.669 37H14.7097C15.1162 36.9017 15.4729 36.7408 15.7467 36.5532C16.2278 36.2225 16.4186 35.8739 16.4186 35.5611C16.4186 35.2484 16.2278 34.8998 15.7467 34.5691C15.2656 34.2385 14.5189 33.9972 13.6894 33.9972Z"
                              fill="white"
                            />
                          </svg>
                          <p className="text-white leading-relaxed text-xl">
                            {item.name.value}
                          </p>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaudiVisionSection;
