import { Homepagesaudi } from "@/models/homepagesaudi";
import React from "react";

interface PageDataProps {
  pageData: Homepagesaudi | null;
}

const TargetAudientSection: React.FC<PageDataProps> = ({ pageData }) => {
  if (!pageData) {
    return null;
  }
  return (
    <div className=" target-audience-section overflow-hidden">
      <div className="banner-section py-20 sm:h-[300px] relative">
        <div className="absolute inset-0">
          <img
            src={pageData.targetaudientimage.value[0]?.url}
            alt="Beautiful wooden architecture interior"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 h-full flex items-center container mx-auto">
          <div className="text-4xl sm:text-7xl flex gap-2 font-bold">
            <p className="text-orangeWiD">Target</p>
            <p className="text-stroke-white ">Audience</p>
          </div>
        </div>
      </div>
      <div className="py-20 relative">
        <div className="absolute inset-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1703"
            height="491"
            viewBox="0 0 1703 491"
            fill="none"
          >
            <path
              d="M1667.6 1.81469C1564.09 63.0202 1467.21 87.6554 1334.91 108.771C1207.64 129.122 1081.51 145.647 951.49 157.889C884.539 164.162 818.732 177.015 752.924 187.114C635.247 205.323 544.99 196.907 432.112 184.972C298.669 171.201 151.287 163.091 37.4948 109.995C31.7823 110.454 26.0699 110.76 20.3573 111.219C97.8184 123.46 145.346 172.731 208.412 201.956C265.537 228.581 330.43 236.079 398.066 238.986C557.558 245.565 724.362 270.507 883.625 260.102C975.253 254.134 1064.37 237.303 1152.57 220.165C1316.4 188.338 1482.06 168.6 1621.68 100.509C1652.52 85.5132 1683.6 72.048 1718.33 61.337C1777.74 42.8224 1742.09 90.1036 1730.9 105.711C1700.05 147.943 1651.38 183.442 1599.28 214.351C1486.18 281.218 1339.02 320.542 1196.9 350.839C1094.76 372.72 993.305 387.868 884.768 381.748C789.712 376.239 696.256 361.703 600.973 357.571C503.175 353.44 407.206 357.571 311.008 342.576C209.326 326.663 119.983 286.879 17.387 271.119C15.1019 270.813 1.16359 273.261 0.478046 272.343C77.9391 367.823 206.127 409.596 357.621 435.914C545.676 469.271 741.728 495.437 936.866 490.387C1032.38 487.786 1128.35 475.086 1220.66 458.867C1314.8 442.494 1406.66 417.553 1492.12 386.338C1579.86 354.358 1647.04 301.263 1732.04 266.069C1727.7 267.906 1719.47 265.304 1714.9 267.14C1652.98 292.847 1599.51 325.592 1542.84 356.041C1482.98 388.48 1413.74 409.443 1343.14 428.876C1151.43 481.513 944.406 498.497 739.443 483.349C595.031 472.638 448.335 450.91 309.18 423.061C182.591 397.661 81.1381 350.227 17.387 271.578C11.903 272.037 6.19057 272.343 0.478046 272.802C102.845 288.409 193.788 324.061 293.87 344.106C405.149 366.293 528.538 355.123 643.245 362.315C770.29 370.425 892.994 392.612 1021.41 382.207C1168.79 370.425 1323.03 329.876 1454.42 285.196C1601.57 235.161 1727.93 158.654 1780.03 51.5442C1779.8 52.1562 1765.86 52.6152 1764.03 52.6152C1641.33 62.8671 1564.78 137.844 1450.07 162.173C1309.55 191.858 1164.68 218.329 1021.87 242.505C815.99 277.392 602.344 245.871 394.181 236.997C332.03 234.395 278.104 222.613 225.321 200.885C158.142 173.037 117.012 122.695 37.2664 109.995C33.1535 109.383 23.5564 112.749 20.1289 111.219C151.516 172.272 325.86 175.179 478.269 193.082C570.354 203.793 651.699 201.191 741.956 189.715C847.751 176.25 950.804 158.348 1057.74 148.402C1130.4 141.669 1202.61 132.029 1273.9 120.4C1336.74 110.301 1400.49 101.121 1463.1 90.2566C1549.24 75.2612 1618.48 39.15 1684.06 0.437553C1680.63 2.42675 1670.57 -0.480509 1666.92 1.66167"
              fill="#BCBEC0"
              fillOpacity="0.2"
            />
          </svg>
        </div>
        <div className="container mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-10">
            {pageData.targetaudientitems.value.map(
              (item: any, index: number) => {
                return (
                  <div className="transition-all duration-300 transform hover:-translate-y-2" key={index}>
                    <div className="flex gap-5 items-start">
                      <img
                        src={item.image.value[0]?.url}
                        alt=""
                        className="object-contain"
                      />
                      <p>{item.name.value}</p>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TargetAudientSection;
