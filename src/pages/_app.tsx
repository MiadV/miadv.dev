import "@/assets/css/fonts.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
//
import "@/assets/css/main.css";
import { Fragment } from "react";
import type { AppProps } from "next/app";
import { LayoutProps } from "@/types";
import { TitleMeta } from "@/components/TitleMeta";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

function MyApp({
  Component,
  pageProps,
}: AppProps<{ layoutProps: LayoutProps }>) {
  const layoutProps = Component.defaultProps?.layoutProps;
  const Layout = (layoutProps && layoutProps.Layout) || Fragment;

  const layoutPropsObj =
    layoutProps && layoutProps.Layout ? { layoutProps: layoutProps } : {};

  const meta = layoutProps && layoutProps.meta;

  return (
    <>
      <TitleMeta suffix="Miad Vosoughi">{meta?.title}</TitleMeta>
      <header>
        <Navbar />
      </header>
      <div className="flex h-screen flex-col justify-between">
        <Layout {...layoutPropsObj}>
          <Component {...pageProps} />
        </Layout>
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
