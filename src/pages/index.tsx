import { type NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { NewTweetForm } from "~/components/NewTeetForm";
import { api } from "~/utils/api";

const Home: NextPage = () => {
  return <>
  <header className="sticky top-0 z-10 border-b bg-white pt-2">
    <h1 className="mb-2 px4 text-ls font-bold">Home</h1>
  </header>
  <NewTweetForm />
  </>
};

export default Home;

