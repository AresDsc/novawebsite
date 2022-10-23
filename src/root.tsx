// @refresh reload
import "@fontsource/rubik/latin-300.css";
import "@fontsource/rubik/latin-400.css";
import "@fontsource/rubik/latin-500.css";
import "virtual:windi.css";

import { Suspense, onMount } from "solid-js";
import { theme, setTheme } from "@/stores/theme";

import {
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";

export default function Root () {
  onMount(() => {
    // Check theme from localStorage.
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "light" || storedTheme === "dark") {
      setTheme(storedTheme);
    }
    else setTheme("light");
  });

  return (
    <Html lang="en" classList={{
      "dark": theme() === "dark"
    }}>
      <Head>
        <Title>Nova</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body class="transition-colors dark:bg-black">
        <Suspense>
          <ErrorBoundary>
            <Routes>
              <FileRoutes />
            </Routes>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
