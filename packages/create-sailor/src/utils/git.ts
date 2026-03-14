import { execSync } from 'child_process';
import fs from 'fs';

export async function cloneTemplate(targetDir: string) {
  try {
    // We use curl and tar to download and extract the repository instead of git clone.
    // This is much faster and avoids ssh key / auth hangs.
    const url = 'https://github.com/Nebutra/Nebutra-Sailor/archive/refs/heads/main.tar.gz';
    
    // Ensure target exists
    fs.mkdirSync(targetDir, { recursive: true });

    // We use bash with pipefail so that if curl fails (e.g. network drop), the command throws
    execSync(`set -o pipefail; curl -sSL ${url} | tar -xz -C "${targetDir}" --strip-components=1`, {
      stdio: 'ignore', // Don't clutter the user's console
      shell: 'bash',
    });
    
  } catch {
    throw new Error('Failed to download the template repository. Please ensure you have internet access and curl/tar installed.');
  }
}
