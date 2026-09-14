# Talent Poole Website PRD

## Summary

Talent Poole Website is a static public brochure site for Talent Poole Partners, a Birmingham-based recruiting agency founded by Lucy Poole.

The site should establish credibility, explain the agency's sales/revenue-team recruiting focus, and make it easy for employers or candidates to contact Lucy directly.

## Current Scope

- Single-page public website
- Static HTML, CSS, and JavaScript
- Editable content in `content/site-content.js`
- Direct contact card using Lucy's email, phone, and LinkedIn
- Hero, employer, process, candidate, founder/about, and contact sections
- Employer/candidate email actions with distinct prefilled subjects
- Full static HTML fallback; optional dependency-free content-sync maintenance helper
- Keyboard-accessible progressive mobile navigation and reduced-motion support
- Vercel deployment from GitHub

## Source Of Truth

- Ordinary site copy: `content/site-content.js`
- Page structure: `index.html`
- Visual styling: `styles.css`
- Small interactions: `script.js`
- Static fallback synchronization: `scripts/sync-content.mjs` (maintenance only; no build step)
- Content intake and assumptions: `docs/content-brief.md`
- Operating notes for future sessions: `CLAUDE.md`
- User-facing run/deploy instructions: `README.md`
- Dated project history: `CHANGELOG.md`

## Explicit Non-Scope

- Client portal
- Candidate database
- Authentication
- Forms or serverless submissions
- CMS
- Job board
- React, Next.js, Tailwind, or other framework migration

Jay decided on 2026-07-04 to remove the client portal concept for now. Do not revive it without first defining scope.

## Key Decisions

- Keep the site static and lightweight so Lucy can maintain it without application overhead.
- Use the public launch graphic only as temporary brand context until original logo/brand files are available.
- Position the agency around sales talent and revenue teams based on current public/context clues.
- Treat Lucy's email signature details from Jay as the current source of truth for contact information.
- Do not point Vercel at `talentpoolepartners.com` until registrar/DNS access is available and the correct DNS records can be set.

## Audience

### Employers

Hiring leaders who need revenue-critical sales hires and want a focused search partner.

### Candidates

Sales professionals considering a confidential career move.

## Product Requirements

- The first viewport should clearly show the Talent Poole Partners brand.
- Copy should feel polished, practical, and credible rather than generic recruiting filler.
- The agency should be positioned around sales talent and revenue-team momentum unless Lucy changes the niche.
- The page should explain the search process without promising unverified outcomes or proof points.
- Normal copy edits should stay in `content/site-content.js`.
- The site should remain deployable as static files.
- Contact actions should use direct links for email, phone, and LinkedIn.
- Any public claims, proof points, testimonials, or founder bio details must be confirmed with Jay or Lucy before publishing.

## Future Scope Triggers

Only add these after Jay or Lucy explicitly asks and the scope is defined:

- Contact form or serverless submissions
- CMS or editable admin interface
- Job listings
- Client portal
- Candidate/client database
- Authentication or private content
- Custom-domain launch

## Brand And Content Notes

- Agency name: Talent Poole Partners
- Founder: Lucy Poole
- Title: Principal
- Location: Birmingham, Alabama
- Tagline: Building Momentum for Revenue Teams
- Email: `lucy@talentpoolepartners.com`
- Phone: `(404) 368-9648`
- LinkedIn: `https://www.linkedin.com/company/talent-poole-partners/`
- Planned custom domain: `talentpoolepartners.com`

Detailed open content questions live in `docs/content-brief.md`.

## Deployment

- Production: `https://talent-poole-site.vercel.app/`
- Vercel project: `https://vercel.com/jay-mcdaniels-projects/talent-poole-site`
- GitHub repo: `https://github.com/jdm0005/talent-poole-site`

## Verification Expectations

- For copy-only edits, review the affected page in a browser or local server.
- For layout or styling edits, check desktop and mobile widths.
- For deployment changes, confirm Vercel production output after push/deploy.
- For domain changes, verify apex and `www` DNS plus HTTPS.

## Open Questions

- Exact legal/brand name confirmation
- Domain registrar/DNS access for `talentpoolepartners.com`
- Recruiting niche, target industries, and target role levels
- Founder bio and headshot
- Original logo and brand files
- Any public proof points, testimonials, or client/candidate language Lucy approves

## September 14, 2026 review

- Replaced repetitive cards/oversized repeated headings with a shorter editorial page, retaining the existing cream/navy/blue/gold palette and real logo.
- Removed unconfirmed direct-hire/confidentiality service promises; no new sectors, outcomes, experience claims, testimonials, or guarantees were added.
- Added canonical/Open Graph metadata for the current Vercel hostname. Update these deliberately if the custom domain is launched.
- Founder introduction is factual, not a fabricated biography. Original vector logo, headshot, and approved public proof points remain content opportunities.
- Local verification: nine viewport widths (320–1920), no-JS mobile/desktop, link destinations, navigation/keyboard behavior, reduced motion, and text-contrast audit passed. Final deployment evidence lives in the review record.
