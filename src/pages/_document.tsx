import NextDocument, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

export default class Document extends NextDocument {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await NextDocument.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en" className="dark scroll-pt-[2rem] scroll-smooth">
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
        <body className="relative bg-gray-50 text-gray-600 antialiased selection:bg-fuchsia-200 selection:text-gray-900 dark:bg-gray-900  dark:text-gray-400 dark:selection:bg-fuchsia-300">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
