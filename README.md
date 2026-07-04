# Talent Poole Website

Static recruiting-agency website scaffold for Talent Poole.

The project is intentionally simple so it can be edited in VS Code, Claude Code, or any plain text editor without needing a full application framework.

## Edit The Site

Most text lives here:

```text
content/site-content.js
```

Change the agency name, tagline, email, hero copy, employer/candidate sections, services, and contact text in that file.

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
python3 -m http.server 5173
```

Then open:

```text
http://localhost:5173
```

You can also open `index.html` directly in a browser, but the local server is closer to how the site will behave once deployed.

## Deploy

This first version is deployed with Vercel and connected to the GitHub repo.

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

GitHub Pages fallback:

```text
https://jdm0005.github.io/talent-poole-site/
```

No database, build step, or paid hosting is required.

## Handoff Workflow

1. Open the folder in VS Code or Claude Code.
2. Edit `content/site-content.js` for normal copy changes.
3. Commit and push to GitHub.
4. Vercel will publish the latest version from the connected GitHub repo.

GitHub Pages is also enabled as a backup static host.

## Next Content To Gather

- Exact legal/brand name
- Domain name
- Recruiting niche or target industries
- Founder bio and headshot
- Real email address and phone number
- LinkedIn profile URL
- Any client/candidate proof points she can publicly use
- Preferred tone: polished corporate, warm boutique, niche expert, or something else

## Contact Form

The form currently opens the visitor's email app using `mailto:`.

That is deliberate for the first version. If the site needs real form submissions later, add Netlify Forms, Formspree, or a small serverless endpoint.
