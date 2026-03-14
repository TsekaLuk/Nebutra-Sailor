import { pruneTemplate } from './utils/prune.js';
import { type NebutraConfig } from './utils/config.js';

async function run() {
  const targetDir = '/tmp/sailor-test-3';
  const config = {
    orm: 'none',
    database: 'none',
    payment: 'none',
    aiProvider: 'none',
    i18n: false
  };
  
  console.warn('Starting prune test...');
  await pruneTemplate(targetDir, config as unknown as NebutraConfig);
  console.warn('Pruning completed locally on /tmp/sailor-test-3');
}

run().catch(console.error);
