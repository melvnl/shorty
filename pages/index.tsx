import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";

const title = `Welcome to Shorty`;
const desc = `Personal URL Shortener that generate short links and store them to your Notion Database`;

const checkUrl = (url: string) => {
  const pattern =
    /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

  if (!pattern.test(url)) {
    console.log("not a url");
  }
};

const Home: NextPage = () => {
  const [inputEl, setInputEl] = useState("");

  return (
    <div className=" h-screen items-center p-4 justify-center bg-gray-200 flex flex-col">
      <Head>
        <title>Shorty</title>
        <meta
          name="description"
          content="Shorty, Personal URL Shortener that generate short links and store them to your Notion Database"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="">
        <h1 className="text-lg md:text-2xl font-bold">{title}</h1>
        <p className=" text-sm md:text-lg font-normal text-gray-500 max-w-md">
          {desc} {inputEl}
        </p>
        <input
          onChange={(e) => setInputEl(e.currentTarget.value)}
          type="text"
          className=" my-3 p-4 w-full rounded-md border-2 focus:border-green-400 outline-none"
        />
        <div
          className="p-4 bg-green-700 rounded-md text-white text-center cursor-pointer active:bg-green-600"
          onClick={() => checkUrl(inputEl)}
        >
          Generate
        </div>
      </main>
    </div>
  );
};

export default Home;
