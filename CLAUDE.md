# Claude Code Notes

This is a small static website for a new recruiting agency. Keep it simple unless explicitly asked to add a framework.

## Project Goal

Create a polished, credible first website that helps:

- Employers understand what Talent Poole does and start a hiring conversation
- Candidates understand the agency's approach and reach out confidentially
- The founder edit copy and keep the site current without technical overhead

## Editing Rules

- Put ordinary copy changes in `content/site-content.js`.
- Put layout/markup changes in `index.html`.
- Put visual changes in `styles.css`.
- Put small interactions in `script.js`.
- Do not add a build system, package manager, React, Next.js, Tailwind, or CMS unless Jay or the founder asks for it.
- Preserve the static nature of the site so it can deploy anywhere.
- Keep CTAs clear and practical. Avoid generic recruiting filler.

## Brand Direction

Current placeholder direction:

- Professional, direct, boutique recruiting
- Clear and credible rather than trendy
- Palette uses deep ink, green, coral, and gold accents
- Rectangular 8px-radius elements, no overly rounded SaaS bubbles

Update this file when the real agency positioning, niche, and brand preferences are known.

## Handoff Notes

For a future Claude Code session, start by reading:

1. `README.md`
2. `content/site-content.js`
3. `index.html`
4. `styles.css`

Then ask what content or visual change is desired.

## Deployment

Current deployment target: GitHub Pages from the `main` branch.

Expected repo:

```text
https://github.com/jdm0005/talent-poole-site
```

Expected site:

```text
https://jdm0005.github.io/talent-poole-site/
```

Keep the site static unless the owner explicitly asks for forms, a CMS, job listings, or private content.
