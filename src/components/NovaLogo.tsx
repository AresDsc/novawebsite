import type { Component } from "solid-js";

const NovaLogo: Component<{
  color: "black" | "white";
  size: number;
}> = (props) => {
  return (
    <svg width={props.size} height={props.size} viewBox="0 0 95 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 48L47 0.5L94.5 48L70.5 71.5L47 48L23.5 71.5L0 48Z" fill={props.color} />
    </svg>
  );
};

export default NovaLogo;

