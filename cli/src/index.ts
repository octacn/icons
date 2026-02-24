#!/usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";
import { collectAllIcons } from "./utils/collectIcons";
import { listIcons } from "./commands/listIcons";
import { viewIconDetails } from "./commands/viewIcon";
import { showUsageExample } from "./commands/showUsage";

export async function runCLI(): Promise<void> {
  console.log(chalk.bold.cyan("\n🚀 Welcome to octacn icons!\n"));
  console.log(chalk.gray("Interactive CLI for browsing and testing icons\n"));

  // Collect all available icons
  const allIcons = collectAllIcons();

  if (allIcons.length === 0) {
    console.log(chalk.yellow("⚠️  No icons found!"));
    console.log(chalk.gray("Add icons to cli/src/filled/ or cli/src/outline/\n"));
    return;
  }

  console.log(chalk.green(`✨ Found ${allIcons.length} icons\n`));

  const mainMenu = async (): Promise<void> => {
    const { action } = await inquirer.prompt([
      {
        type: "list",
        name: "action",
        message: "What would you like to do?",
        choices: [
          { name: "📋 List all icons", value: "list" },
          { name: "🔍 View icon details", value: "view" },
          { name: "📝 Get usage example", value: "usage" },
          { name: "📖 View documentation", value: "docs" },
          { name: "🚪 Exit", value: "exit" },
        ],
      },
    ]);

    switch (action) {
      case "list":
        await listIcons(allIcons);
        await mainMenu();
        break;
      case "view":
        await viewIconDetails(allIcons);
        await mainMenu();
        break;
      case "usage":
        await showUsageExample(allIcons);
        await mainMenu();
        break;
      case "docs":
        console.log(chalk.cyan("\n📖 Documentation available at: cli/USAGE.md"));
        console.log(chalk.gray("Run: cat cli/USAGE.md | more\n"));
        await mainMenu();
        break;
      case "exit":
        console.log(chalk.cyan("\n👋 Thanks for using octacn icons!"));
        console.log(chalk.gray("Check out USAGE.md for more details\n"));
        break;
    }
  };

  await mainMenu();
}

runCLI().catch((error) => {
  console.error(chalk.red("\n❌ An error occurred:"), error.message);
  process.exit(1);
});
