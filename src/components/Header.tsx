import type { Component, ParentComponent } from "solid-js";

import { A } from "solid-start";
import {
  // Components
  Show,

  // Control Flow
  createSignal
} from "solid-js";

  const [mobileOpenedNav, setMobileOpenedNav] = createSignal(false);

  // Helpers
const closeMobileNav = () => setMobileOpenedNav(false);
const openMobileNav = () => setMobileOpenedNav(true);


const Header: Component = () => {
  const NavLink: ParentComponent<{
    href: string
  }> = (props) => (
    <A href={props.href}>
      {props.children}
    </A>
  );

  return (
    <header class="h-32 px-8 py-2 flex justify-between items-center">

      <A href="/">
        Nova
        </A>

      <nav class="flex justify-center gap-2">
        <NavLink href="/about">
          À propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;

