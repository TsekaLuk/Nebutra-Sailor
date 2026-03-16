import * as p from '@clack/prompts';
import pc from 'picocolors';
import { execSync } from 'child_process';

interface AddOptions {
  ['21st']?: string;
  v0?: string;
}

export async function addCommand(components: string[], options: AddOptions) {
  p.intro(pc.bgCyan(pc.black(' nebutra add ')));

  if (components.length === 0 && !options['21st'] && !options.v0) {
    p.log.warn('No components specified.');
    p.outro('Operation aborted.');
    process.exit(0);
  }

  if (options['21st']) {
    p.log.info(pc.cyan(`\nInvoking shadcn integration for 21st.dev component: ${options['21st']}...`));
    try {
      const componentId = options['21st'];
      const resolvedUrl = componentId.startsWith('http') 
        ? componentId 
        : `https://21st.dev/r/${componentId}`;
        
      const addCmd = `pnpm dlx shadcn@latest add "${resolvedUrl}"`;
      
      // eslint-disable-next-line no-console
      console.log(`Executing: ${addCmd}\n`);
      execSync(addCmd, { stdio: 'inherit' });
      
      // eslint-disable-next-line no-console
      console.log(pc.green('\nHappy building with 21st.dev!'));
      process.exit(0);
    } catch (error: unknown) {
      // eslint-disable-next-line no-console
      console.log(pc.red(`\nFailed to execute shadcn CLI for 21st.dev component.`));
      if (error instanceof Error && error.message) {
        // eslint-disable-next-line no-console
        console.log(error.message);
      }
      process.exit(1);
    }
  }

  if (options.v0) {
    p.log.info(pc.cyan(`\nInvoking shadcn integration for v0 URL: ${options.v0}...`));
    try {
      const addCmd = `pnpm dlx shadcn@latest add "${options.v0}"`;
      
      // eslint-disable-next-line no-console
      console.log(`Executing: ${addCmd}\n`);
      execSync(addCmd, { stdio: 'inherit' });
      
      // eslint-disable-next-line no-console
      console.log(pc.green('\nHappy building with v0.dev!'));
      process.exit(0);
    } catch (error: unknown) {
      // eslint-disable-next-line no-console
      console.log(pc.red(`\nFailed to execute shadcn CLI for v0 component.`));
      if (error instanceof Error && error.message) {
        // eslint-disable-next-line no-console
        console.log(error.message);
      }
      process.exit(1);
    }
  }

  // eslint-disable-next-line no-console
  console.log(pc.cyan(`\nAdding core components: ${components.join(', ')}...`));
  try {
    // eslint-disable-next-line no-console
    console.log(pc.green(`Delegating to HeroUI component registry...`));
    
    // Instead of a proprietary registry, Nebutra leverages HeroUI for base components.
    // If they want raw Tailwind/Radix, they use --21st or --v0. 
    // Otherwise, standard `add` implies adding to the core design system (HeroUI).
    for (const component of components) {
      const addCmd = `npx heroui-cli@latest add ${component}`;
      // eslint-disable-next-line no-console
      console.log(`Executing: ${addCmd}`);
      execSync(addCmd, { stdio: 'inherit' });
    }
    
    // eslint-disable-next-line no-console
    console.log(pc.green(`\nSuccessfully added: ${components.join(', ')}`));
    process.exit(0);
  } catch (error: unknown) {
    // eslint-disable-next-line no-console
    console.log(pc.red(`\nFailed to add HeroUI components.`));
    if (error instanceof Error && error.message) {
      // eslint-disable-next-line no-console
      console.log(error.message);
    }
    process.exit(1);
  }
}
