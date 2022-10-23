import type { Component, JSXElement } from "solid-js";
import type { IconTypes } from "solid-icons";

import { createSignal, Show } from "solid-js";
import { HiSolidMoon, HiSolidSun } from "solid-icons/hi";
import { A } from "solid-start";

import { theme, toggleTheme } from "@/stores/theme";
import NovaLogo from "@/components/NovaLogo"

const HeaderIcon: Component<{ icon: IconTypes }> = (props) => <props.icon size={24} />;

const Header: Component = () => {
  return (
    <header class="h-32 px-8 py-2 flex justify-between items-center">
      <div class="flex items-center gap-4">
        <NovaLogo size={32} class="text-black dark:text-white" />

        <A class="no-underline font-medium text-xl text-black dark:text-white" href="/">
          Nova
        </A>
      </div>

      <button class="p-2 rounded-md text-black dark:text-white transition-colors dark:hover:(bg-gray-200 bg-opacity-20)" type="button" onClick={toggleTheme}>
        <Show when={theme() === "dark"}
          fallback={<HeaderIcon icon={HiSolidMoon} />}
        >
          <HeaderIcon icon={HiSolidSun} />
        </Show>
      </button>
    </header>
  );
}

export default Header;

