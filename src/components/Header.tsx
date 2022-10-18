import { Component, createSignal } from "solid-js";

import { A } from "solid-start";
import NovaLogo from "@/components/NovaLogo"

const Header: Component = () => {
  const toggleTheme = () => {
    document.body.classList.toggle("dark");
    document.body.classList.toggle("bg-black");
  };

  return (
    <header class="h-32 px-8 py-2 flex justify-between items-center">
      <div class="flex items-center gap-4">
        <NovaLogo size={32} class="text-black dark:text-white" />

        <A class="no-underline font-medium text-xl text-black dark:text-white" href="/">
          Nova
        </A>
      </div>

      <button class="p-2 rounded-md text-black dark:text-white" type="button" onClick={toggleTheme}>MODE</button>
    </header>
  );
}

export default Header;

