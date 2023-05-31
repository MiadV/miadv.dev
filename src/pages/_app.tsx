// Import 3rd party styles
import 'swiper/css';
import 'swiper/css/pagination';
//
import '@/styles/main.css';
import React, { useEffect } from 'react';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import NextNProgress from 'nextjs-progressbar';
import type { CustomNextPage } from './page';
import { useRouter } from 'next/router';
import * as gtag from '@/utils/gtag';

const interFont = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

type AppPropsWithCustomPage = AppProps & {
  Component: CustomNextPage;
};

function MyApp({ Component, pageProps }: AppPropsWithCustomPage) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    // this is to fix view-height problem on mobile browsers
    function setDynamicVH() {
      let vh = window?.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    setDynamicVH();

    window?.addEventListener('resize', setDynamicVH);

    return () => {
      window?.removeEventListener('resize', setDynamicVH);
    };
  }, []);

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${interFont.style.fontFamily}, TwemojiCountryFlags;
        }
      `}</style>

      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_MEASUREMENT_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />

      <NextNProgress color="#D946EF" nonce="fv" />
      <ThemeProvider attribute="class">
        <div id="top" className={`${interFont.variable} font-sans`}>
          {getLayout(<Component {...pageProps} />)}
        </div>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
