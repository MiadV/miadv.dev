// Import 3rd party styles
import 'swiper/css';
import 'swiper/css/pagination';
//
import '@/styles/main.css';
import React from 'react';
import { ThemeProvider } from 'next-themes';
import ProgressBar from '@badrap/bar-of-progress';
import type { AppProps } from 'next/app';
import { Router } from 'next/router';

const progress = new ProgressBar({
  size: 2,
  color: '#D946EF', //fuchsia-500
  className: 'bar-of-progress',
  delay: 100,
});

Router.events.on('routeChangeStart', () => progress.start());
Router.events.on('routeChangeComplete', () => progress.finish());
Router.events.on('routeChangeError', () => progress.finish());

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
