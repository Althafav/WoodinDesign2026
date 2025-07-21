import HeadComponent from "@/components/HeadComponent";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/next";
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
      </Head>

      <Component {...pageProps} />
      <Analytics />
    </LayoutComponent>
  );
}
