import type { Component } from "solid-js";

import Header from "@/components/Header";

const Home: Component = () => {
  return (
    <>
      <Header />
      <main class=" px-10 flex flex-col justify-center items-start">
        <div class="flex flex-col gap-2">
          <h1 class="dark:text-white font-bold text-4xl">Nova</h1>
          <h2 class="text-4xl dark:text-gray-300">
            Better
          </h2>
          <h2 class="text-4xl dark:text-gray-300">
            Communities
          </h2>
        </div>

        <div class="mt-6 flex gap-2">
          <button class="border-2 border-black rounded-md bg-black text-white px-4 py-1 hover:shadow-lg transition dark:(text-black bg-white border-white)">
            Networks
          </button>
          <button class="border-2 border-black rounded-md px-4 py-1 hover:(bg-black text-white shadow-lg) transition dark:(border-white text-white) dark:hover:(bg-white text-black)">
            Discord Server
          </button>
        </div>
      </main>
    </>
  );
};

export default Home;

