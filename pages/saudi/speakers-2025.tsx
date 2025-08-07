import { useEffect, useState } from "react";
import conferenceSpeakerModel2025 from "@/sysModels/speakers2025";
import Image from "next/image";
import SpeakerPopupBanner from "@/components/speaker/SpeakerPopupBanner";

export default function SpeakersPage() {
  const [speakers, setSpeakers] = useState<conferenceSpeakerModel2025[]>([]);
  const [selectedSpeaker, setSelectedSpeaker] =
    useState<conferenceSpeakerModel2025 | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const fetchSpeakers = async () => {
      try {
        const res = await fetch("/api/speakers2025");
        const data = await res.json();
        setSpeakers(data);
      } catch (error) {
        console.error("Error fetching speakers:", error);
      }
    };
    fetchSpeakers();
  }, []);

  const openPopup = (speaker: conferenceSpeakerModel2025) => {
    setSelectedSpeaker(speaker);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setSelectedSpeaker(null);
    setIsPopupOpen(false);
  };

  return (
    <div className="py-40 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 mb-10">
        <h1 className="text-4xl font-bold mb-10 text-center">Speakers 2025</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
          {speakers.map((speaker: conferenceSpeakerModel2025) => (
            speaker.HighLevel == true &&(
 <div
              key={speaker.ItemID}
              onClick={() => openPopup(speaker)}
              className="bg-white rounded-lg shadow p-4 flex flex-col items-center text-center hover:shadow-lg transition duration-200"
            >
              <div className="w-40 h-40 mb-4">
                <Image
                  width={400}
                  height={400}
                  src={speaker.Image}
                  alt={`${speaker.FirstName} ${speaker.LastName}`}
                  className="w-full h-full object-cover object-top border border-gray-200"
                  onError={(e) => (e.currentTarget.src = "/default-avatar.jpg")}
                />
              </div>
              <h3 className="text-lg font-semibold">
                {speaker.FirstName} {speaker.LastName}
              </h3>
              <p className="text-sm text-gray-600">{speaker.Designation}</p>
              <p className="text-sm text-gray-500">{speaker.Company}</p>
            </div>
            )
           
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        {/* <h1 className="text-4xl font-bold mb-10 text-center">Speakers 2025</h1> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
          {speakers.map((speaker) => (
              speaker.HighLevel == false &&(
            <div
              key={speaker.ItemID}
              onClick={() => openPopup(speaker)}
              className="bg-white rounded-lg shadow p-4 flex flex-col items-center text-center hover:shadow-lg transition duration-200"
            >
              <div className="w-40 h-40 mb-4">
                <Image
                  width={400}
                  height={400}
                  src={speaker.Image}
                  alt={`${speaker.FirstName} ${speaker.LastName}`}
                  className="w-full h-full object-cover object-top border border-gray-200"
                  onError={(e) => (e.currentTarget.src = "/default-avatar.jpg")}
                />
              </div>
              <h3 className="text-lg font-semibold">
                {speaker.FirstName} {speaker.LastName}
              </h3>
              <p className="text-sm text-gray-600">{speaker.Designation}</p>
              <p className="text-sm text-gray-500">{speaker.Company}</p>
            </div>
              )
          ))}
        </div>
      </div>

      <SpeakerPopupBanner
        speaker={selectedSpeaker}
        isOpen={isPopupOpen}
        onClose={closePopup}
      />
    </div>
  );
}
