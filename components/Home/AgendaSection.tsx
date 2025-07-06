import { Conferencedate } from "@/models/conferencedate";
import { Homepagesaudi } from "@/models/homepagesaudi";
import { Sessionitem } from "@/models/sessionitem";
import React, { useState } from "react";
import { FaCalendar } from "react-icons/fa6";

interface PageDataProps {
  pageData: Homepagesaudi | null;
}

const AgendaSection: React.FC<PageDataProps> = ({ pageData }) => {
  const [selectedAgenda, setSelectedAgenda] = useState<Conferencedate | null>(
    () => {
      if (pageData && pageData.agendaitems.value.length > 0) {
        return pageData.agendaitems.value[0] as Conferencedate;
      }
      return null;
    }
  );

  if (!pageData || !selectedAgenda) {
    return null;
  }

  const handleDateChange = (id: string) => {
    const selected = pageData.agendaitems.value.find(
      (item: Conferencedate) => item.system.id === id
    );
    if (selected) setSelectedAgenda(selected);
  };
  return (
    <section className="container mx-auto px-4 py-10">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10">
        {pageData.agendaheading.value}
      </h2>

      {/* Pills (agenda filter) */}
      <div className="flex flex-wrap gap-3 justify-center mb-10 overflow-x-auto scrollbar-hide">
        {pageData.agendaitems.value.map(
          (item: Conferencedate, index: number) => (
            <button
              key={index}
              onClick={() => handleDateChange(item.system.id)}
              className={`px-5 py-2 rounded text-sm font-medium border transition duration-150 ${
                selectedAgenda.system.id === item.system.id
                  ? "bg-primary-saudi text-white border-primary-saudi shadow"
                  : "bg-white text-primary-saudi border-gray-300 hover:bg-gray-100"
              }`}
            >
              {item.datestring.value}
            </button>
          )
        )}
      </div>

      {/* Sessions */}
      <div className="max-w-4xl mx-auto">
        {selectedAgenda && selectedAgenda.sessionitems.value.length > 0 ? (
          <div className="grid grid-cols-1  gap-5">
            {selectedAgenda.sessionitems.value.map((m: any, index: number) => {
              const item: Sessionitem = m;
              return (
                <div key={`session-${index}`} className="">
                  <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3 gap-2">
                      <FaCalendar size={14} />
                      <span>{item.time.value}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {item.name.value}
                    </h3>
                    <div
                      className="text-sm text-gray-700 leading-relaxed"
                      dangerouslySetInnerHTML={{
                        __html: item.content.value,
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <p className="text-center text-gray-500 text-sm">
            No sessions available.
          </p>
        )}
      </div>
    </section>
  );
};

export default AgendaSection;
