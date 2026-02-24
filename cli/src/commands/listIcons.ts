import chalk from "chalk";
import { IconChoice } from "../types";

export async function listIcons(icons: IconChoice[]): Promise<void> {
  console.log(chalk.bold("\n📦 Available Icons:\n"));
  
  const filled = icons.filter((i) => i.variant === "filled");
  const outline = icons.filter((i) => i.variant === "outline");

  if (filled.length > 0) {
    console.log(chalk.bold.magenta("Filled:"));
    filled.forEach((icon) => {
      console.log(chalk.white(`  • ${icon.value}`));
    });
    console.log();
  }

  if (outline.length > 0) {
    console.log(chalk.bold.blue("Outline:"));
    outline.forEach((icon) => {
      console.log(chalk.white(`  • ${icon.value}`));
    });
    console.log();
  }
}
