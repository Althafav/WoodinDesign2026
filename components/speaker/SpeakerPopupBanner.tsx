import React from "react";
import conferenceSpeakerModel2025 from "@/sysModels/speakers2025";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

interface Props {
  speaker: conferenceSpeakerModel2025 | null;
  onClose: () => void;
  isOpen: boolean;
}

const SpeakerPopupBanner: React.FC<Props> = ({ speaker, onClose, isOpen }) => {
  if (!isOpen || !speaker) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-full max-w-lg p-6 rounded-lg relative shadow-xl animate-fade-in">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-red-600 text-xl"
        >
          &times;
        </button>

        {/* Speaker Image */}
        <div className="w-40 h-40 mx-auto mb-4">
          <img
            src={speaker.Image}
            alt={`${speaker.FirstName} ${speaker.LastName}`}
            className="w-full h-full object-cover border border-gray-300"
            onError={(e) => (e.currentTarget.src = "/default-avatar.jpg")}
          />
        </div>

        {/* Speaker Info */}
        <h2 className="text-2xl font-bold text-center mb-1">
          {speaker.FirstName} {speaker.LastName}
        </h2>
        <p className="text-center text-gray-600">{speaker.Designation}</p>
        <p className="text-center text-gray-500 mb-4">{speaker.Company}</p>

        {/* Optional Bio/Profile */}
        {speaker.Profile && (
          <div className="text-sm text-gray-700 whitespace-pre-line">
            {speaker.Profile}
          </div>
        )}

        {/* Socials */}
        <div className="flex justify-center space-x-4 mt-4">
          {speaker.Linkedin.length > 1 && (
            <Link
              href={speaker.Linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </Link>
          )}
          {speaker.Facebook.length > 1 && (
            <Link
              href={speaker.Facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </Link>
          )}
          {speaker.Instagram.length > 1 && (
            <Link
              href={speaker.Instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default SpeakerPopupBanner;
