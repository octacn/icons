import chalk from "chalk";
import inquirer from "inquirer";
import { IconChoice } from "../types";

export async function viewIconDetails(icons: IconChoice[]): Promise<void> {
  const { selectedIcon } = await inquirer.prompt([
    {
      type: "list",
      name: "selectedIcon",
      message: "Select an icon to view:",
      choices: icons,
    },
  ]);

  const icon = icons.find((i) => i.name === selectedIcon);
  if (!icon) return;

  console.log(chalk.bold(`\n📊 Icon Details: ${chalk.cyan(icon.value)}\n`));
  console.log(`${chalk.gray("Variant:")} ${icon.variant}`);
  console.log(`${chalk.gray("Name:")} ${icon.value}`);
  console.log(`${chalk.gray("Default size:")} 24px`);
  console.log(`${chalk.gray("Default strokeWidth:")} 2`);
  console.log();
}
