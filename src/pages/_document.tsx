import NextDocument, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';

export default class Document extends NextDocument {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await NextDocument.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en" className="scroll-pt-[2rem] scroll-smooth">
        <Head>
          <link href="/static/favicons/site.webmanifest" rel="manifest" />
          {/* TODO replace favicons */}
          <link href="/static/favicons/favicon.ico" rel="shortcut icon" />
          <link
            href="/static/favicons/apple-touch-icon.png"
            rel="apple-touch-icon"
            sizes="180x180"
          />
          <link
            href="/static/favicons/favicon-32x32.png"
            rel="icon"
            sizes="32x32"
            type="image/png"
          />
          <link
            href="/static/favicons/favicon-16x16.png"
            rel="icon"
            sizes="16x16"
            type="image/png"
          />
          <link
            rel="mask-icon"
            href="/static/favicons/safari-pinned-tab.svg"
            color="#6366f1"
          />
          <meta content="#ffffff" name="theme-color" />
          <meta content="#ffffff" name="msapplication-TileColor" />
          <meta
            content="/static/favicons/browserconfig.xml"
            name="msapplication-config"
          />

          <link
            rel="alternate"
            type="application/rss+xml"
            href="/feeds/feed.xml"
          />

          {/* TODO integrate analytics & google verifications */}
          {/* <meta content="14d2e73487fa6c71" name="yandex-verification" />
          <meta
            content="eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw"
            name="google-site-verification"
          /> */}
        </Head>
        <body className="relative bg-gray-50 text-gray-600 antialiased selection:bg-fuchsia-200 selection:text-gray-900 dark:bg-gray-900  dark:text-gray-400 dark:selection:bg-fuchsia-300">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
