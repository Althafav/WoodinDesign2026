import React, { useEffect } from "react";
import conferenceSpeakerModel2025 from "@/sysModels/speakers2025";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import Helper from "@/modules/Helper";

interface Props {
  speaker: conferenceSpeakerModel2025 | null;
  onClose: () => void;
  isOpen: boolean;
}

const SpeakerPopupBanner: React.FC<Props> = ({ speaker, onClose, isOpen }) => {
  if (!isOpen || !speaker) return null;

 

  const has = (v?: string) => typeof v === "string" && v.trim().length > 1;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 sm:p-6"
      onClick={onClose} // click outside closes
      role="dialog"
      aria-modal="true"
      aria-labelledby="speaker-popup-title"
    >
      <div
        className="bg-white w-full max-w-lg rounded-lg relative shadow-xl animate-fade-in
                   min-h-[420px] max-h-[85vh] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()} // prevent close when clicking inside
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-red-600 text-2xl leading-none"
          aria-label="Close"
        >
          &times;
        </button>

        {/* Header (image + basic info) */}
        <div className="px-6 pt-8 pb-4 flex-shrink-0">
          <div className="w-32 h-32 mx-auto mb-4">
            <img
              src={speaker.Image}
              alt={`${speaker.FirstName} ${speaker.LastName}`}
              className="w-full h-full object-cover object-top border border-gray-200 rounded-md"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = "/default-avatar.jpg";
              }}
            />
          </div>

          <h2 id="speaker-popup-title" className="text-2xl font-bold text-center mb-1">
            {speaker.FirstName} {speaker.LastName}
          </h2>
          {speaker.Designation && (
            <p className="text-center text-gray-700">{speaker.Designation}</p>
          )}
          {speaker.Company && (
            <p className="text-center text-gray-500">{speaker.Company}</p>
          )}
        </div>

        {/* Scrollable body */}
        <div className="px-6 pb-6 flex-1 overflow-y-auto">
          {speaker.Profile && (
            <div className="text-sm text-gray-800 whitespace-pre-line break-words">
              {speaker.Profile}
            </div>
          )}

          {/* Socials */}
          <div className="flex justify-center gap-5 mt-6">
            {has(speaker.Linkedin) && (
              <Link
                href={Helper.formatUrl(speaker.Linkedin)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-600 hover:text-gray-900"
              >
                <FaLinkedinIn />
              </Link>
            )}
            {has(speaker.Facebook) && (
              <Link
                href={Helper.formatUrl(speaker.Facebook)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-gray-600 hover:text-gray-900"
              >
                <FaFacebook />
              </Link>
            )}
            {has(speaker.Instagram) && (
              <Link
                href={Helper.formatUrl(speaker.Instagram)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-gray-600 hover:text-gray-900"
              >
                <FaInstagram />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakerPopupBanner;
