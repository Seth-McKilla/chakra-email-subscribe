import { Center, Text } from "@chakra-ui/react";
import Head from "next/head";
import EmailSubscribeForm from "@/components/EmailSubscribeForm";

export default function Home() {
  return (
    <>
      <Head>
        <title>{"Chakra Email Subscribe"}</title>
        <meta
          name="description"
          content="Email subscribe form built with Typescript, NextJS, Chakra UI, and SendGrid."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <EmailSubscribeForm />
        <Center h="100vh">
          <Text fontSize="3xl" align="center" fontWeight="bold">
            {"Chakra Email Subscribe"}
          </Text>
        </Center>
      </main>
    </>
  );
}
