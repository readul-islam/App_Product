# Survey App

This project was generated using [Nx](https://nx.dev).

## What's Next?

Next steps for you:

- [ ] Add a README to the root of your workspace
- [ ] Add a README to each app and lib
- [ [Customize the CI/CD configuration](https://nx.dev/recipes/other/ci-setup)
- [ ] Join the [Nx Community Slack](https://go.nx.dev/community)

## Development

### Prerequisites

- Node.js 20+
- pnpm

### Setup

```bash
# Install dependencies
pnpm install

# Start development servers
pnpm dev
```

### Available Scripts

- `pnpm dev` - Start all development servers (Frontend:3000, Admin:3001, Backend:8000)
- `pnpm dev-front` - Start Frontend only
- `pnpm dev-admin` - Start Admin only
- `pnpm dev:backend` - Start Backend only

## Git Hooks (Husky)

This project uses Husky to enforce code quality before commits and pushes:

- **Pre-commit**: Runs linting and tests across all projects
- **Pre-push**: Runs builds across all projects to ensure everything compiles

The hooks will automatically run when you:
- `git commit` - Triggers pre-commit hook
- `git push` - Triggers pre-push hook

## CI/CD (GitHub Actions)

### CI Workflow

The CI workflow runs on every push and pull request to `main` and `develop` branches:

1. **Setup**: Node.js 20 + pnpm
2. **Install**: Dependencies with caching
3. **Lint**: Run ESLint across all projects
4. **Test**: Run Jest tests across all projects
5. **Build**: Build all projects
6. **Artifacts**: Upload build outputs for deployment

### Deployment Workflow

The deployment workflow triggers on GitHub releases:

1. **Build**: All projects
2. **Deploy**: Ready for production deployment

### Manual Trigger

You can manually trigger workflows from the GitHub Actions tab or by creating a release.

## Project Structure

- `apps/Admin` - Admin dashboard (Next.js)
- `apps/Frontend` - Public frontend (Next.js)
- `apps/Backend` - API server (NestJS)
- `packages/styles` - Shared CSS/Tailwind styles
- `libs/` - Shared libraries and utilities

## Build & Test

```bash
# Build all projects
pnpm nx run-many -t build --all

# Test all projects
pnpm nx run-many -t test --all

# Lint all projects
pnpm nx run-many -t lint --all
```
