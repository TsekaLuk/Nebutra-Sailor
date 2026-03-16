#!/usr/bin/env bash
# Nebutra Automagic Supabase SKILL injection macro
set -e

echo "⛵ Initializing Nebutra Supabase Backend Environment..."
# 1. Initialize local Supabase project if missing
if [ ! -f "supabase/config.toml" ]; then
    echo "Bootstrapping fresh local cluster..."
    npx supabase init
fi

# 2. Start the local database
echo "Starting local docker cluster..."
npx supabase start

# 3. Apply schema migrations if they exist from the template
if [ -d "supabase/migrations" ]; then
    echo "Pushing standard Nebutra schemas to local Postgres..."
    npx supabase db push
fi

echo "✅ Supabase cluster ready for agentic workflows!"
