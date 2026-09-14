# Claude Code Notes

This is a small static website for a new recruiting agency. Keep it simple unless explicitly asked to add a framework.

## Project Goal

Create a polished, credible first website that helps:

- Employers understand what Talent Poole does and start a hiring conversation
- Candidates understand the agency's approach and reach out confidentially
- The founder edit copy and keep the site current without technical overhead

## Editing Rules

- Put ordinary copy changes in `content/site-content.js`, then run `node scripts/sync-content.mjs` and its `--check` mode. The helper refreshes full HTML fallback content and contact links; no deployment build is required.
- Preserve no-JavaScript content/mobile navigation, keyboard access, reduced-motion support, and AA text contrast.
- Phone display and destination are separate editable `agency.phone` and `agency.phoneHref` values.
- Keep employer/candidate subject-specific mailto links and the direct contact block.
- Put layout/markup changes in `index.html`.
- Put visual changes in `styles.css`.
- Put small interactions in `script.js`.
- Do not add a build system, package manager, React, Next.js, Tailwind, or CMS unless Jay or the founder asks for it.
- Preserve the static nature of the site so it can deploy anywhere.
- Keep CTAs clear and practical. Avoid generic recruiting filler.

## Brand Direction

Current visual direction (reviewed September 14, 2026):

- Professional, direct, boutique recruiting
- Clear and credible rather than trendy
- Palette uses deep navy, warm cream, target blue, and muted gold from the public launch graphic
- Warm cream editorial layout, Georgia serif display headings, system sans-serif body text
- Restrained 3–6px corner radii, real logo artwork, and navy process/contact sections
- Do not restore repetitive concern/service cards or floating decorative UI panels

Update this file when the real agency positioning, niche, and brand preferences are known.

Known reference links live in `docs/content-brief.md`. Do not scrape or reuse social copy blindly; use it as context and confirm final public copy with Jay/founder.

## Handoff Notes

For a future Claude Code session, start by reading:

1. `README.md`
2. `PRD.md`
3. `CHANGELOG.md`
4. `docs/content-brief.md`
5. `content/site-content.js`
6. `index.html`
7. `styles.css`

Then continue the requested work using the current task scope.

## Memory / Save Protocol

This project should follow the same lightweight 2/5-style project memory pattern as Precon:

- `PRD.md` captures durable product scope, requirements, deployment, and open questions.
- `CLAUDE.md` captures operating instructions for future agent sessions.
- `CHANGELOG.md` captures meaningful changes by date.
- `README.md` captures user-facing run/edit/deploy instructions.
- `docs/content-brief.md` captures content intake and unresolved business details.
- Daily cross-session notes still belong in `/Users/telemachus/clawd/memory/YYYY-MM-DD.md`.
- Long-term `/Users/telemachus/clawd/MEMORY.md` should only carry a compact active-project summary, not full working detail.

When Jay says "save per memory protocol" or after substantial project work, update the relevant project docs plus the daily memory log.

## Deployment

Current deployment target: Vercel.

Production site:

```text
https://talent-poole-site.vercel.app/
```

Vercel project:

```text
https://vercel.com/jay-mcdaniels-projects/talent-poole-site
```

Repo:

```text
https://github.com/jdm0005/talent-poole-site
```

Keep the site static unless the owner explicitly asks for forms, a CMS, job listings, a client portal, or private content.

Planned custom domain: `talentpoolepartners.com`, pending DNS/domain access.

## Latest review

See `docs/reviews/2026-09-14-review.md` for findings, implementation, and verification. Original logo files, founder headshot, approved proof points, and custom-domain access remain outstanding; do not invent them. GitHub → Vercel is the verified deployment path; local Vercel CLI authentication failed on September 14.
