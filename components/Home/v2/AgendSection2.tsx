import { Conferencedate } from "@/models/conferencedate";
import { Homepagesaudi } from "@/models/homepagesaudi";
import { Sessionitem } from "@/models/sessionitem";
import React, { useState } from "react";
import { FaCalendar } from "react-icons/fa6";

interface PageDataProps {
  pageData: Homepagesaudi | null;
}

const AgendaSection2: React.FC<PageDataProps> = ({ pageData }) => {
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
      <p className="text-stroke-black text-3xl md:text-6xl font-bold text-left  mb-10">
        {pageData.agendaheading.value}
      </p>

      {/* Pills (agenda filter) */}
      <div className="flex flex-wrap gap-3 justify-start mb-10 overflow-x-auto scrollbar-hide">
        {pageData.agendaitems.value.map(
          (item: Conferencedate, index: number) => (
            <button
              key={index}
              onClick={() => handleDateChange(item.system.id)}
              className={`px-5 py-2 rounded text-sm font-medium border transition duration-150 ${
                selectedAgenda.system.id === item.system.id
                  ? "bg-orangeWiD text-white border-primary-saudi shadow"
                  : "bg-white text-black border-gray-300 hover:bg-gray-100"
              }`}
            >
              {item.datestring.value}
            </button>
          )
        )}
      </div>

      {/* Sessions */}
      <div className="max-w-4xl">
        {selectedAgenda && selectedAgenda.sessionitems.value.length > 0 ? (
          <div className="grid grid-cols-1  gap-3">
            {selectedAgenda.sessionitems.value.map((m: any, index: number) => {
              const item: Sessionitem = m;
              return (
                <div key={`session-${index}`} className="">
                  <div className=" flex sm:flex-row flex-col items-start sm:gap-5">
                    <div className=" text-black mb-3 w-full  sm:w-2/12">
                      <p className="text-md font-medium whitespace-nowrap">{item.time.value}</p>
                    </div>
                    <div className=" w-full sm:w-10/12">
                      <h3 className="text-lg font-semibold text-orangeWiD mb-2">
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

export default AgendaSection2;
