import * as React from "react";
import { IconProps } from "../types";

export const SettingsIcon = ({
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
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1-2 3.5-1.3-.5a1.7 1.7 0 0 0-2 .7l-.2 1.5H9.7l-.2-1.5a1.7 1.7 0 0 0-2-.7l-1.3.5-2-3.5.1-.1a1.7 1.7 0 0 0 .3-1.8l-1.1-1.1 1.1-1.1a1.7 1.7 0 0 0-.3-1.8l-.1-.1 2-3.5 1.3.5a1.7 1.7 0 0 0 2-.7l.2-1.5h4.6l.2 1.5a1.7 1.7 0 0 0 2 .7l1.3-.5 2 3.5-.1.1a1.7 1.7 0 0 0-.3 1.8l1.1 1.1-1.1 1.1z" />
  </svg>
);
