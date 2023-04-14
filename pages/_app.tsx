import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Fragment } from "react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title>Rocket app</title>
        <meta
          name="description"
          content="Rocket plans for people who intersted in traveling with rockets"
        />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}
