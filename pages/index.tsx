import Head from "next/head";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Chakra Email Subscribe</title>
        <meta
          name="description"
          content="Email subscribe form built with Typescript, NextJS, Chakra UI, and SendGrid."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={inter.className}>Chakra Email Subscribe</main>
    </>
  );
}
