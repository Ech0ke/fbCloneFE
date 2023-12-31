import Head from "next/head";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import type { GetServerSidePropsContext } from "next";
import { getSession, useSession } from "next-auth/react";
import Login from "@/components/Login";
import Feed from "@/components/Feed";
import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data: session } = useSession();

  if (!session) return <Login />;

  return (
    <>
      <Head>
        <title>Facebook</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex bg-gray-100">
        <LeftSidebar />
        <Feed />
        <RightSidebar />
      </main>
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession(context);
  return {
    props: { session },
  };
}
