# Deployment

This site auto-deploys to **GitHub Pages** on every push to `main`.

## One-time setup

1. Push this repo to GitHub.
2. In your GitHub repo, go to **Settings → Pages**.
3. Under **Source**, choose **GitHub Actions**.
4. Done. Every push to `main` will rebuild and deploy automatically.

The workflow file is at `.github/workflows/deploy.yml`. It:

- Checks out the repo
- Installs Node 20 and dependencies
- Runs `npm run build` (Astro outputs to `dist/`)
- Uploads `dist/` as a Pages artifact
- Deploys via `actions/deploy-pages@v4`

## Deploying to a custom domain

In **Settings → Pages → Custom domain**, add your domain and follow the DNS instructions. To use the apex `youngandaligned.com`, add the A records GitHub lists there.

## Switching hosts

If you'd rather deploy to **Vercel**, **Netlify**, or **Cloudflare Pages** instead of GitHub Pages, replace the `deploy` job with the relevant action, e.g.:

```yaml
# Cloudflare Pages
- uses: cloudflare/pages-action@v1
  with:
    apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
    accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
    projectName: young-and-aligned
    directory: dist
    gitHubToken: ${{ secrets.GITHUB_TOKEN }}
```

```yaml
# Netlify
- uses: nwtgck/actions-netlify@v3.0
  with:
    publish-dir: dist
    production-deploy: true
    deploy-message: 'Deploy from GitHub Actions'
  env:
    NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
    NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
```

The `build` job stays the same — only the final deploy step changes.

## Local preview

```bash
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run preview  # serve dist/ locally
```
