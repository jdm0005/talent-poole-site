# Talent Poole Website

Static sales-recruiting brochure for Talent Poole Partners, founded by Lucy Poole in Birmingham, Alabama.

The project is intentionally simple so it can be edited in VS Code, Claude Code, or any plain text editor without needing a full application framework.

## Edit The Site

Most text lives here:

```text
content/site-content.js
```

Change the agency name, tagline, email, phone, hero copy, employer/candidate sections, process, and contact text in that file. Set both `phone` (display) and `phoneHref` (international `tel:` URI).

After copy changes, synchronize the complete static HTML fallback:

```bash
node scripts/sync-content.mjs
node scripts/sync-content.mjs --check
```

This dependency-free maintenance helper is not a deployment build step. The page remains fully readable and navigable without JavaScript. Head metadata, section labels, and founder title also live in `index.html`; review those when changing business details.

Visual styling lives here:

```text
styles.css
```

Page structure lives here:

```text
index.html
```

Behavior lives here:

```text
script.js
```

## Run Locally

From this folder:

```bash
python3 -m http.server 5173 --bind 127.0.0.1
```

Then open:

```text
http://localhost:5173
```

You can also open `index.html` directly in a browser, but the local server is closer to how the site will behave once deployed.

## Deploy

This first version is deployed with Vercel.

Production site:

```text
https://talent-poole-site.vercel.app/
```

Vercel project:

```text
https://vercel.com/jay-mcdaniels-projects/talent-poole-site
```

Project repo:

```text
https://github.com/jdm0005/talent-poole-site
```

No database, build step, or paid hosting is required.

## Handoff Workflow

1. Open the folder in VS Code or Claude Code.
2. Edit `content/site-content.js` for normal copy changes and run `node scripts/sync-content.mjs`.
3. Review desktop/mobile and run `node scripts/sync-content.mjs --check`; commit and push to GitHub.
4. Vercel will publish the latest version from the connected GitHub repo.

The site is intentionally back to a single public brochure page. Do not add a client portal unless Jay or Lucy explicitly revives that scope.

## Project Memory

Use these files for future project continuity:

- `PRD.md` - durable scope, requirements, deployment, and open questions
- `CLAUDE.md` - operating notes for future agent sessions
- `CHANGELOG.md` - dated project changes
- `docs/content-brief.md` - content intake and unresolved business details

Daily session notes belong in `/Users/telemachus/clawd/memory/YYYY-MM-DD.md`; long-term cross-project memory should stay compact in `/Users/telemachus/clawd/MEMORY.md`.

## Next Content To Gather

- Exact legal/brand name
- Domain access for `talentpoolepartners.com`
- Recruiting niche or target industries
- Founder bio and headshot
- Confirm email address and phone number from Lucy's signature
- LinkedIn/company profile details
- Original logo/brand files
- Any client/candidate proof points she can publicly use
- Preferred tone: polished corporate, warm boutique, niche expert, or something else

Known reference links are tracked in `docs/content-brief.md`.

## Contact

The contact section uses Lucy's signature details as a static contact card with direct email, phone, and LinkedIn links. If the site needs real form submissions later, add Netlify Forms, Formspree, or a small serverless endpoint.
