import * as React from "react";
import type { SVGProps } from "react";

export const ThemeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="36"
    height="36"
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18 25C19.8565 25 21.637 24.2625 22.9497 22.9497C24.2625 21.637 25 19.8565 25 18C25 16.1435 24.2625 14.363 22.9497 13.0503C21.637 11.7375 19.8565 11 18 11V25Z"
      fill="current"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 0.5C8.33475 0.5 0.5 8.33475 0.5 18C0.5 27.6652 8.33475 35.5 18 35.5C27.6652 35.5 35.5 27.6652 35.5 18C35.5 8.33475 27.6652 0.5 18 0.5ZM18 4V11C16.1435 11 14.363 11.7375 13.0503 13.0503C11.7375 14.363 11 16.1435 11 18C11 19.8565 11.7375 21.637 13.0503 22.9497C14.363 24.2625 16.1435 25 18 25V32C21.713 32 25.274 30.525 27.8995 27.8995C30.525 25.274 32 21.713 32 18C32 14.287 30.525 10.726 27.8995 8.10051C25.274 5.475 21.713 4 18 4Z"
      fill="current"
    />
  </svg>
);