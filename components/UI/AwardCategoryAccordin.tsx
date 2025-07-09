import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";
import { Awardpage } from "@/models/awardpage";

interface PageDataProps {
  items: any[];
}

export default function AwardsSection({ items }: PageDataProps) {
  return (
    <Accordion type="single" collapsible className="space-y-4">
      {items.map((item: any, idx: any) => (
        <AccordionItem
          key={idx}
          value={`item-${idx}`}
          className="bg-white/10 backdrop-blur-sm border border-green-400/20 rounded-2xl"
        >
          <AccordionTrigger className="px-6 py-4 flex justify-between items-center bg-gray-100">
            <h2 className="text-xl font-medium text-black">
              {item.name.value}
            </h2>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6 pt-0 text-gray-800">
            <div>
              <p className="my-5 text-[18px]">{item.description.value}</p>
              {item.ctabuttonlink.value && (
                <div className="mt-4">
                  <Link href={item.ctabuttonlink.value}>
                    <span className="px-4 py-2 bg-orangeWiD rounded-full text-white hover:-translate-y-1 transition-transform">
                      {item.ctabuttonname.value}
                    </span>
                  </Link>
                </div>
              )}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
