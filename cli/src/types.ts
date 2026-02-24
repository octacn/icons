import * as React from "react";

export type IconProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
  strokeWidth?: number;
};

export interface IconChoice {
  name: string;
  value: string;
  variant: "filled" | "outline";
}
