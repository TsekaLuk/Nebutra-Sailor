#!/bin/bash
# Vercel "Ignored Build Step" script for monorepo apps.
#
# Usage: Set "Ignored Build Step" in Vercel project settings to:
#   bash scripts/vercel-ignore-build.sh apps/web
#   bash scripts/vercel-ignore-build.sh apps/api-gateway
#   bash scripts/vercel-ignore-build.sh apps/landing-page
#   bash scripts/vercel-ignore-build.sh apps/studio
#   bash scripts/vercel-ignore-build.sh apps/docs-hub
#
# Vercel exit code contract:
#   exit 0 → skip build (no relevant changes)
#   exit 1 → proceed with build (changes detected)
#
# Vercel env vars used:
#   VERCEL_GIT_PREVIOUS_SHA  — SHA of the last successfully deployed commit
#   VERCEL_GIT_COMMIT_REF    — current branch name

set -euo pipefail

APP_DIR="${1:?Usage: $0 <app-dir>  e.g. apps/web}"

echo "Checking for changes in: $APP_DIR and packages/"

# If Vercel has no previous deployment SHA, always build
if [ -z "${VERCEL_GIT_PREVIOUS_SHA:-}" ]; then
  echo "No previous deployment found — building."
  exit 1
fi

# Fetch enough history to compare with the previous deployed commit
git fetch origin --depth=50 2>/dev/null || true

# Check if anything in this app or shared packages changed
CHANGED=$(git diff "$VERCEL_GIT_PREVIOUS_SHA" HEAD --name-only 2>/dev/null \
  | grep -E "^${APP_DIR}/|^packages/" \
  || true)

if [ -n "$CHANGED" ]; then
  echo "Changes detected:"
  echo "$CHANGED"
  echo "→ Building."
  exit 1
else
  echo "No relevant changes since $VERCEL_GIT_PREVIOUS_SHA"
  echo "→ Skipping build."
  exit 0
fi
