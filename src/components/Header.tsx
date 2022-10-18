import { Component, createSignal } from "solid-js";

import { A } from "solid-start";
import NovaLogo from "@/components/NovaLogo"

const Header: Component = () => {
  const [theme, setTheme] = createSignal<"black" | "white">("black");
  const toggleTheme = () => {
    document.body.classList.toggle("dark");
    document.body.classList.toggle("bg-black");
    if (theme() === "black") setTheme("black");
    else setTheme("white");
  };

  return (
    <header class="h-32 px-8 py-2 flex justify-between items-center">
      <div class="flex gap-4">
        <div >
          <NovaLogo size={32} color={theme()} />
        </div> 

        <A class="no-underline font-bold text-lg text-black dark:text-white" href="/">
          Nova
        </A>
      </div>

      <button class="p-2 rounded-md text-black dark:text-white" type="button" onClick={toggleTheme}>MODE</button>
    </header>
  );
}

export default Header;

