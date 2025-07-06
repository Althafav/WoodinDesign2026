import { Menu } from "@/models/menu";
import Globals from "@/modules/Globals";
import React, { useEffect, useState } from "react";

export default function MenuComponent() {
  const [pageData, setPageData] = useState<Menu | null>(null);

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
      <div className="flex">
       
        <img
          src={pageData?.poweredbylogo.value[0]?.url}
          alt=""
          className="bg-white p-5 w-24 object-contain rounded-br-2xl"
        />
      </div>
    </header>
  );
}
