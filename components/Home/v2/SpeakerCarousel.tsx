// components/SpeakerCarousel.tsx

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import conferenceSpeakerModel2025 from "@/sysModels/speakers2025";
import Link from "next/link";

export default function SpeakerCarousel() {
  const [speakers, setSpeakers] = useState<conferenceSpeakerModel2025[]>([]);

  useEffect(() => {
    const fetchSpeakers = async () => {
      try {
        const res = await fetch("/api/speakers2025");
        const data = await res.json();
        setSpeakers(data);
      } catch (err) {
        console.error("Failed to load speakers", err);
      }
    };
    fetchSpeakers();
  }, []);

  return (
    <div>
      {speakers.length > 0 && (
        <div className="py-20 bg-gray-100">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Speakers
            </h2>

            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              autoplay={{ delay: 4000 }}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 4 },
              }}
            >
              {speakers.slice(0, 20).map((speaker) => (
                <SwiperSlide key={speaker.ItemID}>
                  <div className="bg-white rounded-xl overflow-hidden shadow-md p-6 text-center min-h-[300px] flex flex-col items-center">
                    {/* Square image container */}
                    <div className="w-40 h-40 mb-4">
                      <img
                        src={speaker.Image}
                        alt={`${speaker.FirstName} ${speaker.LastName}`}
                        className="w-full h-full object-cover border-2 border-gray-300"
                        onError={(e) =>
                          (e.currentTarget.src = "")
                        } 
                      />
                    </div>
                    <h3 className="text-lg font-semibold">
                      {speaker.FirstName} {speaker.LastName}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {speaker.Designation}
                    </p>
                    <p className="text-sm text-gray-500">{speaker.Company}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="flex items-center justify-center">
              <Link
                href="/saudi/speakers-2025"
                className="text-center px-4 py-2 bg-primary-saudi rounded-full text-white"
              >
                <span>View All</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
