import React from "react";
import MenuComponent from "./Menu/MenuComponent";
import { useRouter } from "next/router";

export default function LayoutComponent({ children }: any) {
  const router = useRouter();
  const isRegisterInterestRoute = router.pathname.startsWith("/saudi/forms");
  return (
    <div className="flex flex-col min-h-screen">
      {!isRegisterInterestRoute && <MenuComponent />}

      <main className="flex-grow">{children}</main>
    </div>
  );
}
