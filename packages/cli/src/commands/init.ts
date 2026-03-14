import * as p from '@clack/prompts';
import pc from 'picocolors';
import fs from 'fs';
import path from 'path';

export async function initCommand() {
  p.intro(pc.bgCyan(pc.black(' nebutra init ')));

  const cwd = process.cwd();
  const configPath = path.join(cwd, 'nebutra.config.json');

  if (fs.existsSync(configPath)) {
    p.log.warn('nebutra.config.json already exists in this directory.');
    const overwrite = await p.confirm({
      message: 'Do you want to overwrite it?',
      initialValue: false,
    });

    if (!overwrite) {
      p.outro('Operation aborted.');
      process.exit(0);
    }
  }

  p.spinner().start('Initializing Nebutra CLI configuration...');

  const config = {
    $schema: 'https://nebutra.com/schema.json',
    componentsDirectory: 'packages/ui/src/components',
    tailwind: {
      config: 'tailwind.config.ts',
      css: 'packages/tokens/styles.css',
      baseColor: 'slate',
      cssVariables: true,
    },
    aliases: {
      components: '@nebutra/ui',
      utils: '@nebutra/ui/utils',
    },
  };

  fs.writeFileSync(configPath, JSON.stringify(config, null, 2) + '\n');

  await new Promise((resolve) => setTimeout(resolve, 800));

  p.spinner().stop(pc.green('Configuration saved to nebutra.config.json'));
  p.outro(pc.cyan('Initialization complete! You can now use "nebutra add" to start injecting components.'));
}
