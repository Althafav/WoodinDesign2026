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

      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-THXPZM8Q"
        height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe></noscript>
    </div>
  );
}
