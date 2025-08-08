import HeadComponent from "@/components/HeadComponent";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import LayoutComponent from "@/components/Layout/LayoutComponent";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const { locale } = useRouter();
  useEffect(() => {
    if (locale) {
      document.documentElement.lang = locale;
      document.documentElement.dir = locale.startsWith("ar") ? "rtl" : "ltr";
    }
  }, [locale]);
  return (
    <LayoutComponent>
      <Head>
        <HeadComponent />

           <script
              dangerouslySetInnerHTML={{
                __html: `(function(w,d,s,l,i){w[l]=w[l]||[];
                  w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
                  var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
                  j.async=true;
                  j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                  f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-THXPZM8Q');`,
              }}
            />
      </Head>

      <Component {...pageProps} />
      <Analytics />
      <SpeedInsights />
    </LayoutComponent>
  );
}
