#!/usr/bin/env node

import { Command } from 'commander';
import { addCommand } from './commands/add.js';
import { initCommand } from './commands/init.js';

async function main() {
  const program = new Command();

  program
    .name('nebutra')
    .description('Nebutra Package & Component Manager')
    .version('0.1.0');

  program
    .command('init')
    .description('Initialize a Nebutra project and create nebutra.config.json')
    .action(async () => {
      await initCommand();
    });

  program
    .command('add [components...]')
    .description('Add a component or feature to your project')
    .action(async (components) => {
      await addCommand(components);
    });

  program.parse(process.argv);
}

main().catch(console.error);
