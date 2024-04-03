import React, { useState } from "react";
import Number from "./Number";
import LoadingDots from "./LoadingDots";
import { Toaster, toast } from "react-hot-toast";
import { generateContentByGPT } from "@/utils/api";

const Main = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [tasks, setTasks] = useState<string>("");
  const [available, setAvailable] = useState<string>("");
  const [rest, setRest] = useState<string>("");
  const [generatedContent, setGeneratedContent] = useState<string>("");

  let prompt = `
  Create a personalized schedule for the day based on the following inputs:

  Tasks:${tasks}
  
  Amount of time available: ${available}
  
  Include a rest period? (optional): ${rest}
  
  Analyze each task and provide a breakdown of the steps needed to complete it efficiently. Create a schedule for the day, incorporating each task and step, taking into account the available time and rest period.

  The response should be like this for each task: Write out my thesis: This could take an Hour. Here's how to get it done effectively (gives steps on how to get it done)
      `;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(prompt);
    setLoading(true);

    try {
      setGeneratedContent("");
      const data = await generateContentByGPT(prompt);
      let response = data.choices[0].text;
      setGeneratedContent(response);
      console.log(response);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
      toast("Error occured. Please try again later.", {
        icon: "❌",
      });
    }
  };

  return (
    <div className="max-w-3xl w-full my-[30px]">
      <form onSubmit={handleSubmit}>
        <Number number={1} title={"Enter your tasks for the day:"} />
        <textarea
          className="block p-2.5 mt-2 mb-3 w-full h-[100px] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-black focus:border-black "
          placeholder="Write here..."
          onChange={(e) => setTasks(e.target.value)}
        ></textarea>

        <Number number={2} title={"Amount of time available:"} />
        <textarea
          className="block p-2.5 mt-2 mb-3 w-full h-[100px] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-black focus:border-black "
          placeholder="Write here..."
          onChange={(e) => setAvailable(e.target.value)}
        ></textarea>

        <Number number={3} title={"Include a rest period? (optional):"} />
        <textarea
          className="block p-2.5 mt-2 mb-3 w-full h-[100px] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-black focus:border-black "
          placeholder="Write here..."
          onChange={(e) => setRest(e.target.value)}
        ></textarea>

        <div className="mt-3" />

        {!loading && (
          <button
            className="bg-black rounded-xl text-white font-medium px-4 py-2 sm:mt-10 mt-8 hover:bg-black/80 w-full"
            value="Generate"
            type="submit"
          >
            Generate &rarr;
          </button>
        )}
        {loading && (
          <button
            className="bg-black rounded-xl text-white font-medium px-4 py-2 sm:mt-10 mt-8 hover:bg-black/80 w-full"
            disabled
          >
            <LoadingDots color="white" style="large" />
          </button>
        )}
        {generatedContent && (
          <>
            <label className="block my-2 text-md text-left font-medium text-gray-900 dark:text-white">
              Answer:
            </label>
            <div
              className="p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer overflow-x-auto"
              onClick={() => {
                navigator.clipboard.writeText(generatedContent);
                toast("Copied to clipboard", {
                  icon: "✂️",
                });
              }}
            >
              <pre className="text-left max-w-[400px]">{generatedContent}</pre>
            </div>
            <p className="my-1 text-sm text-gray-500 ">
              Click on the answer to copy on clipboard
            </p>
          </>
        )}
      </form>
  </div>
  );
};

export default Main;
