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
      <Html lang="en" className="scroll-pt-[2rem] scroll-smooth">
        <Head></Head>
        <body className="relative bg-gray-50 text-gray-600 antialiased selection:bg-fuchsia-200 selection:text-gray-900 dark:bg-gray-900  dark:text-gray-400 dark:selection:bg-fuchsia-300">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
