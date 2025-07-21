import { Menu } from "@/models/menu";
import Globals from "@/modules/Globals";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function MenuComponent() {
  const [pageData, setPageData] = useState<Menu | null>(null);
  const { asPath, locale, push, locales } = useRouter();
  useEffect(() => {
    Globals.KontentClient.item("menu_2025_saudi")
      .withParameter("depth", "3")
      .toObservable()
      .subscribe((response: any) => {
        setPageData(response.item);
      });
  }, []);
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="flex justify-between">
        <div>
          <Link href="/">
            <img
              src={pageData?.poweredbylogo.value[0]?.url}
              alt=""
              className="bg-white p-5 w-44 sm:w-52 object-contain rounded-br-2xl"
            />
          </Link>
        </div>

        <div>
          <div className="flex gap-1">
            {locales!.map((loc) => (
              <button
                key={loc}
                className={`lang-btn bg-orangeWiD rounded-xl text-white p-3 ${
                  loc === locale ? "active" : ""
                }`}
                onClick={() => push(asPath, asPath, { locale: loc })}
              >
                {loc === "en" ? "En" : "Ar"}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
