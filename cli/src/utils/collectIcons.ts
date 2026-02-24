import * as FilledIcons from "../filled/index";
import * as OutlineIcons from "../outline/index";
import { IconChoice } from "../types";

export function collectAllIcons(): IconChoice[] {
  const filledIconChoices: IconChoice[] = Object.keys(FilledIcons).map(
    (name) => ({
      name: `${name} (filled)`,
      value: name,
      variant: "filled" as const,
    })
  );

  const outlineIconChoices: IconChoice[] = Object.keys(OutlineIcons).map(
    (name) => ({
      name: `${name} (outline)`,
      value: name,
      variant: "outline" as const,
    })
  );

  return [...filledIconChoices, ...outlineIconChoices];
}
