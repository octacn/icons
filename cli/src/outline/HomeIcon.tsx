import * as React from "react";
import { IconProps } from "../types";

export const HomeIcon = ({
  size = 24,
  strokeWidth = 2,
  ...props
}: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M3 10L12 3l9 7" />
    <path d="M5 10v10h14V10" />
  </svg>
);
