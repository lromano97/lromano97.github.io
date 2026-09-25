# Lucas Romano portfolio

A static portfolio built with Astro and published on GitHub Pages. English is at `/` and Spanish is at `/es/`. Visitors switch languages through visible links; the site does not inspect their browser locale.

## Local development

Use Node.js 24 and pnpm. Install dependencies with pnpm install, run the site with pnpm dev, check types and Astro files with pnpm check, and build with pnpm build.

Contact links live in `src/data/site.ts`. English and Spanish copy, role titles, and career dates live in `src/data/i18n.ts`. Update both languages there for routine content changes; the shared page layout lives in `src/components/PortfolioPage.astro`.

## Editorial review before publishing

The current GenAI Gateway description comes from Lucas's direct account and public GitHub profile. The earlier role names and approximate years came from indexed public career sources because LinkedIn's detailed experience is gated. Lucas must confirm the roles, dates, and wording before this version is published. Do not add internal architecture, team size, or performance numbers without his approval.

The résumé action is intentionally absent until a current PDF is provided.

## Deployment

The workflow in .github/workflows/deploy.yml builds and publishes commits on the source branch. In the GitHub repository settings, choose GitHub Actions as the Pages publishing source before the first deployment. The repository name matches the username.github.io pattern, so the site is served from the domain root.
