import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Head from "next/head";
import { Toaster, toast } from "react-hot-toast";
import Main from "@/components/Main";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex max-w-7xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Head>
        <title>ProductiveAI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 mb-[100px] sm:mt-20">
        <h1 className="sm:text-6xl text-4xl max-w-2xl font-bold text-slate-900">
          AI-Powered Personal Productivity Tool
        </h1>
        <iframe
          src="https://embeds.beehiiv.com/413408ae-b01d-4440-9712-6334011b012c"
          data-test-id="beehiiv-embed"
          width="100%"
          height="320"
          className="rounded-md bg-transparent my-4"
          scrolling="no"
        ></iframe>
        <Main />

        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{ duration: 2000 }}
        />
        <hr className="h-px bg-gray-700 border-1 dark:bg-gray-700" />
      </main>
      <footer className="w-full ">
        <p className="border-t-2 flex justify-center font-semibold py-2">
          Powered by OpenAI GPT-3 API
        </p>
      </footer>
    </div>
  );
}
