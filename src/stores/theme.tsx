import { createSignal } from "solid-js";

/**
 * Initialize the signal for the global theme.
 * We only allow dark and light themes.
 *
 * Defaults to light theme.
 */
const [theme, _setTheme] = createSignal<"light" | "dark">("light");

const setTheme = (value: "light" | "dark") => {
  // Set the theme.
  _setTheme(value);

  // Save into localStorage.
  localStorage.setItem("theme", value);
};


// A quick helper
const toggleTheme = () => {
  const new_theme = theme() === "light" ? "dark" : "light";
  setTheme(new_theme);
};

export { theme, setTheme, toggleTheme };

