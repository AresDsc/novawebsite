import type { Component } from "solid-js";

import Header from "@/components/Header";

const Home: Component = () => {
  return (
    <>
      <Header />
      <main class=" px-10 flex flex-col justify-center items-start">
        <h1 class="dark:text-white font-bold text-4xl">Nova</h1>
        <h2 class="text-4xl dark:text-gray-300">Better<br />Communities</h2>

        <div class="mt-4 flex gap-2">
          <button class="border border-black rounded-md dark:border-white dark:text-white px-4 py-1">
            Discord
          </button>
        </div>
      </main>
    </>
  );
};

export default Home;

