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
      <Html lang="en" className="dark">
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                  try {
                    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                      document.documentElement.classList.add('dark')
                    } else {
                      document.documentElement.classList.remove('dark')
                    }
                  } catch (_) {}
                `,
            }}
          />
        </Head>
        <body className="antialiased bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-400 dark:highlight-white/5">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
