// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
//
import "@/styles/main.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
