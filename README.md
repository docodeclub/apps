# Docode Apps Static Site

Simple static website for `docode.app`, including FrameScore marketing, support and privacy pages.

Live URLs:

- `https://docode.app`
- `https://docode.app/framescore`
- `https://docode.app/framescore/support`
- `https://docode.app/framescore/privacy`

## Preview Locally

Open `index.html` in a browser:

```text
docode-app-site/index.html
```

The site uses explicit relative links to `index.html` files, so normal navigation works when opened from the local folder.

## Deploy to GitHub Pages

1. Create a repository for this site.
2. Add the contents of `docode-app-site/` to the repository root.
3. Commit and push to GitHub.
4. In the repository settings, open **Pages**.
5. Set the source to the main branch and root folder.
6. Add `docode.app` as the custom domain. The included `CNAME` file is already set to `docode.app`.

Example commands after creating an empty GitHub repository:

```sh
git remote add origin https://github.com/YOUR-ACCOUNT/YOUR-REPO.git
git branch -M main
git push -u origin main
```

## Deploy to Netlify

1. Create a new Netlify site from the repository, or drag the `docode-app-site/` folder into Netlify Deploys.
2. No build command is required.
3. Set the publish directory to the site root if deploying from this folder.
4. Add `docode.app` under domain settings.

## Domain

Point `docode.app` to the static host you choose. Configure the DNS records required by GitHub Pages, Netlify, Vercel or your chosen static hosting provider.

Required live URLs:

- `https://docode.app`
- `https://docode.app/framescore`
- `https://docode.app/framescore/support`
- `https://docode.app/framescore/privacy`
