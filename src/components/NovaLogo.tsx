import type { Component, JSX } from "solid-js";

interface NovaIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: string | number;
  style?: JSX.CSSProperties;
}

const NovaLogo: Component<NovaIconProps> = (props) => {
  return (
    <svg {...props}
      width={props.size}
      height={props.size}
      fill="currentColor"
      style={{
        ...props.style,
        overflow: "visible"
      }}

      viewBox="0 0 95 72"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 48L47 0.5L94.5 48L70.5 71.5L47 48L23.5 71.5L0 48Z" />
    </svg>
  );
};

export default NovaLogo;

