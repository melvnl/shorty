import type { NextPage } from "next";
import Head from "next/head";
import { Form, FormState } from "../lib/types";
import { useState } from "react";
import ErrorMessage from "../components/ErrorMessage";
import SuccessMessage from "../components/SuccessMessage";

const title = `Welcome to Shorty`;
const desc = `Personal URL Shortener that generate short links and track them.`;

const Home: NextPage = () => {
  const [form, setForm] = useState<FormState>({ state: Form.Initial });
  const [inputEl, setInputEl] = useState("");

  const hashUrl = () => Math.random().toString(20).substr(2, 6);

  const checkUrl = (url: string) => {
    const pattern =
      /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

    if (!pattern.test(url)) {
      setForm({
        state: Form.Error,
        message: `Not a valid URL`,
      });
      return;
    }

    setForm({
      state: Form.Success,
      message: `localhost:3000/${hashUrl()}`,
    });
  };

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
          {desc}
        </p>
        <input
          onChange={(e) => setInputEl(e.currentTarget.value)}
          type="text"
          className=" my-3 p-4 w-full rounded-md border-2 focus:border-green-400 outline-none"
        />
        <div
          className="p-4 mb-2 bg-green-700 rounded-md text-white text-center cursor-pointer active:bg-green-600"
          onClick={() => checkUrl(inputEl)}
        >
          Generate
        </div>
        {form.state === Form.Error ? (
          <ErrorMessage>{form.message}</ErrorMessage>
        ) : form.state === Form.Success ? (
          <SuccessMessage>{form.message}</SuccessMessage>
        ) : null}
      </main>
    </div>
  );
};

export default Home;
