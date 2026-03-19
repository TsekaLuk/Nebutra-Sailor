#!/usr/bin/env tsx

import { loadUiGovernancePolicy } from "./lib/ui-governance-policy";

const _policy = loadUiGovernancePolicy();

// biome-ignore lint/suspicious/noConsole: CI guardrail script
console.log("UI governance policy schema validation passed ✓");
