# Docode Apps Static Site

Simple static website for `docode.app`, including FrameScore marketing, support and privacy pages.

Live URLs:

- `https://docode.app`
- `https://docode.app/web-development`
- `https://docode.app/web-development/docode`
- `https://docode.app/web-development/apres-school`
- `https://docode.app/framescore`
- `https://docode.app/framescore/help`
- `https://docode.app/framescore/release-notes`
- `https://docode.app/framescore/support`
- `https://docode.app/framescore/privacy`

App Store Connect URLs:

- Marketing URL: `https://docode.app/framescore/`
- Support URL: `https://docode.app/framescore/support/`
- Privacy Policy URL: `https://docode.app/framescore/privacy/`

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

## World Cup Sweepstake Results

The sweepstake page is intentionally static. Match scores are stored in:

```text
world-cup-sweepstake/results.json
```

## World Cup Sweepstake Draw

The live shared draw is stored in:

```text
world-cup-sweepstake/draw.json
```

Workflow:

1. Open `/world-cup-sweepstake/`.
2. Unlock admin mode.
3. Add entrants.
4. Run the draw once.
5. Use **Export Draw JSON**.
6. Replace the contents of `world-cup-sweepstake/draw.json` with the exported JSON.
7. Commit and deploy.

Once `draw.json` contains a generated draw, the page loads that draw for everyone and treats it as locked for the tournament. Browser-local entrant edits and resets are blocked while a shared draw is loaded.

Admin mode uses a simple client-side password gate for convenience. Because this is a static site, the password is not secure against someone inspecting the page source. It is suitable for a private sweepstake page, not for sensitive administration.

To update results, add completed matches to the `matches` array:

```json
{
  "id": "mexico-south-africa",
  "teamA": "mexico",
  "teamB": "south-africa",
  "teamAScore": 2,
  "teamBScore": 1,
  "stage": "Group A",
  "playedAt": "2026-06-11"
}
```

Use a unique `id` for each match. `teamA` and `teamB` must match the team IDs exactly. After editing the file, refresh `/world-cup-sweepstake/`; the page recalculates standings, goals, refunds and prize status.

Team IDs:

```text
mexico
south-africa
south-korea
czechia
canada
bosnia-herzegovina
qatar
switzerland
brazil
morocco
haiti
scotland
united-states
paraguay
australia
turkiye
germany
curacao
ivory-coast
ecuador
netherlands
japan
sweden
tunisia
belgium
egypt
iran
new-zealand
spain
cape-verde
saudi-arabia
uruguay
france
senegal
iraq
norway
argentina
algeria
austria
jordan
portugal
dr-congo
uzbekistan
colombia
england
croatia
ghana
panama
```
