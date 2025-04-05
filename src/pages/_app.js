import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>AnishPortfolio</title>
        <meta name="description" content="AnishPortfolio - A creative portfolio built with Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
      <footer className="w-full py-4 text-center text-sm text-muted">
        AnishPortfolio
      </footer>
    </>
  );
}

export default MyApp;