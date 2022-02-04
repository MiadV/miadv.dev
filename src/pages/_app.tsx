import '@/assets/css/fonts.css';
import '@/assets/css/main.css';
import { Fragment } from 'react';
import type { AppProps } from 'next/app';
import { LayoutProps } from '@/types';
import { TitleMeta } from '@/components/TitleMeta';

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
      <TitleMeta suffix='Miad Vosoughi'>{meta?.title}</TitleMeta>
      <Layout {...layoutPropsObj}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
