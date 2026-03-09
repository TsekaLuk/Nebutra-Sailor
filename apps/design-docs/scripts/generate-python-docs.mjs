/* eslint-env node */
/* global process, console */
import { rimraf } from 'rimraf';
import * as Python from 'fumadocs-python';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';

// Note: You must first extract python documentation using `fumapy-generate <package-name>`
// Output JSON file path
const jsonPath = path.resolve(process.cwd(), './docs-python.json');

async function generate() {
    const out = path.resolve(process.cwd(), 'content/docs/zh/(api)'); // Output to docs framework

    // Try to read the JSON file, if it doesn't exist, we exit gracefully
    try {
        await fs.access(jsonPath);
    } catch {
        console.warn(`[Python Docgen] Skipping: Could not find Python api docs at ${jsonPath}`);
        console.warn(`[Python Docgen] Have you run 'fumapy-generate' yet?`);
        return;
    }

    // clean previous output
    await rimraf(out);

    const content = JSON.parse((await fs.readFile(jsonPath)).toString());

    const converted = Python.convert(content, {
        baseUrl: '/docs/zh/(api)', // Align with Fumadocs locale baseline
    });

    await Python.write(converted, {
        outDir: out,
    });

    console.warn(`[Python Docgen] Successfully generated Python documentation to ${out}`);
}

void generate();
