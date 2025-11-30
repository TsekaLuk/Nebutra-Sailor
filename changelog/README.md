# Changelog System

This directory contains all release notes and changelog for Nebutra-Sailor.

## Directory Structure

```
changelog/
├── README.md           # This file
├── CHANGELOG.md        # Main changelog (auto-generated)
└── releases/           # Individual release notes
    └── TEMPLATE.md     # Template for release notes
```

## Commit Message Convention

We use [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

### Types

| Type       | Description                                      | Triggers Release |
|------------|--------------------------------------------------|------------------|
| `feat`     | A new feature                                    | ✅ Minor         |
| `fix`      | A bug fix                                        | ✅ Patch         |
| `perf`     | Performance improvement                          | ✅ Patch         |
| `refactor` | Code change (no feature/fix)                     | ✅ Patch         |
| `revert`   | Revert a previous commit                         | ✅ Patch         |
| `docs`     | Documentation changes                            | ❌               |
| `style`    | Code style (formatting)                          | ❌               |
| `test`     | Tests                                            | ❌               |
| `build`    | Build system or dependencies                     | ❌               |
| `ci`       | CI configuration                                 | ❌               |
| `chore`    | Other changes                                    | ❌               |

### Scopes

Use the module/package name as scope:

**Apps:** `web`, `landing-page`, `api-gateway`

**Packages:** `ui`, `db`, `design-system`, `rate-limit`, `cache`, `event-bus`, `saga`, `mcp`, `brand`

**Services:** `ai`, `content`, `recsys`, `ecommerce`, `web3`

**Infrastructure:** `infra`, `inngest`, `supabase`

**Other:** `deps`, `release`, `config`

### Examples

```bash
# New feature
feat(web): add dashboard analytics widget

# Bug fix
fix(api-gateway): resolve rate limiting edge case

# Breaking change (use ! or BREAKING CHANGE footer)
feat(db)!: rename user table columns

feat(api-gateway): update authentication flow

BREAKING CHANGE: JWT token format has changed
```

## Commands

### Making Commits

```bash
# Interactive commit (recommended)
pnpm commit

# Or use git commit directly (validated by commitlint)
git commit -m "feat(web): add new feature"
```

### Creating Releases

```bash
# Preview what will be released (dry run)
pnpm release:dry

# Create a release (auto-determines version)
pnpm release

# Force specific version bump
pnpm release:patch   # 1.0.0 → 1.0.1
pnpm release:minor   # 1.0.0 → 1.1.0
pnpm release:major   # 1.0.0 → 2.0.0

# Regenerate full changelog
pnpm changelog:all
```

### What happens during release

1. **Version bump** - `package.json` version is updated based on commits
2. **Changelog generation** - `changelog/CHANGELOG.md` is updated
3. **Commit** - Changes are committed with message `chore(release): vX.Y.Z`
4. **Tag** - Git tag `vX.Y.Z` is created

## GitHub Actions Workflow

The release workflow (`.github/workflows/release.yml`) runs on:
- **Push to `main`** - Auto-checks for releasable commits
- **Manual trigger** - Allows specifying version type or dry-run

### Manual Release

Go to Actions → Release → Run workflow:
- `release_type`: `patch`, `minor`, `major`, or specific version
- `dry_run`: Check to preview without actual release

## Writing Good Release Notes

For user-facing releases in `releases/`, use the template and focus on:

1. **User impact** - What does this mean for users?
2. **Plain language** - Avoid technical jargon when possible
3. **Visuals** - Screenshots/GIFs for UI changes
4. **Migration steps** - Clear upgrade instructions if needed

## Best Practices

1. **Atomic commits** - One logical change per commit
2. **Descriptive subjects** - Be specific about what changed
3. **Reference issues** - Include `#123` in commit body/footer
4. **Breaking changes** - Always document migration steps
5. **Review before release** - Check `pnpm release:dry` output

## Troubleshooting

### Commit rejected by commitlint

Check your commit message format:
```bash
# Test a message
echo "feat(web): add feature" | npx commitlint
```

### Husky hooks not running

```bash
# Reinstall husky
pnpm install
pnpm prepare
```

### Reset changelog

```bash
# Regenerate from all commits
pnpm changelog:all
```
