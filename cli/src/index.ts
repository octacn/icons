#!/usr/bin/env node

import chalk from "chalk";

export async function runCLI(): Promise<void> {
  console.log(chalk.bold.cyan("\n🚀 Welcome to octacn icons!\n"));
}

runCLI().catch((error) => {
  console.error("An error occurred:", error.message);
  process.exit(1);
});
