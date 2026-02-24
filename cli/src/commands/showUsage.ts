import chalk from "chalk";
import inquirer from "inquirer";
import { IconChoice } from "../types";

export async function showUsageExample(icons: IconChoice[]): Promise<void> {
  const { selectedIcon } = await inquirer.prompt([
    {
      type: "list",
      name: "selectedIcon",
      message: "Select an icon for usage example:",
      choices: icons,
    },
  ]);

  const icon = icons.find((i) => i.name === selectedIcon);
  if (!icon) return;

  console.log(chalk.bold(`\n📝 Usage Example: ${chalk.cyan(icon.value)}\n`));
  
  const importPath = icon.variant === "filled" ? "@octacn/icons/filled" : "@octacn/icons/outline";
  
  console.log(chalk.gray("// Import"));
  console.log(chalk.white(`import { ${icon.value} } from "${importPath}";`));
  console.log();
  
  console.log(chalk.gray("// Basic usage"));
  console.log(chalk.white(`<${icon.value} />`));
  console.log();
  
  console.log(chalk.gray("// With custom size"));
  console.log(chalk.white(`<${icon.value} size={32} />`));
  console.log();
  
  console.log(chalk.gray("// With custom stroke width"));
  console.log(chalk.white(`<${icon.value} strokeWidth={3} />`));
  console.log();
  
  console.log(chalk.gray("// With custom color"));
  console.log(chalk.white(`<${icon.value} className="text-blue-500" />`));
  console.log();
  
  console.log(chalk.gray("// With custom styles"));
  console.log(chalk.white(`<${icon.value} style={{ color: 'red' }} />`));
  console.log();
}
