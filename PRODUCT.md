# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Montara Project is a software company that takes on project-based work. The website exists to win that work from four audiences, all in scope:

- **Founders and early-stage startups** who need a small team to take a product from idea to production.
- **Small and medium businesses already operating** who need internal systems, web apps, or modernization of existing software.
- **Engineering teams inside companies** who need added capacity for a specific area: backend, DevOps, or a desktop app.
- **International clients**, working remotely. Indonesia is not the only market.

Their job on the site: judge quickly whether Montara can build what they need and is credible enough to contact, then start a conversation by email.

## Product Purpose

The site presents Montara's services, shows real shipped work as proof, introduces the team, and gets the visitor to email `hello@montaraproject.com`. Success is a qualified inquiry. There is no contact form; the mailto link is the conversion.

## Positioning

What Montara can claim that a typical software house cannot:

- **Small senior team, end to end.** The same people own backend, frontend, and infrastructure, with no layered handoffs.
- **Its own open-source products.** Code is public under the `montara-project` GitHub organization (e.g. Tera Router, Veil App), so visitors can inspect the quality themselves.
- **Tauri and desktop specialism.** Lightweight cross-platform desktop apps, including Electron-to-Tauri migration.
- **AI and AI infrastructure.** Built Tera Router, a self-hosted AI provider gateway; the team includes an AI/LLM consultant.

## Operating Context

- Visitors usually arrive from a link, search, or GitHub, scan the home page, then check Projects and About before deciding to email.
- Contact is email-only, with a stated typical response of within 48 hours on business days.
- Client engagements are governed by a separate written agreement; the site's Terms of Use say service descriptions are not a binding offer.

## Capabilities and Constraints

- **Services (four):** Backend Development; Mobile & Frontend Development; DevOps & Cloud; Desktop Development (Tauri). Source of truth: `data/site.ts`.
- **Mobile:** offered as part of Mobile & Frontend. The mobile framework is **undecided / not yet stated**; do not name one until confirmed.
- **Languages:** the site is English today. A **Bahasa Indonesia version is required** going forward (bilingual EN + ID). How it is structured (routing, translation ownership) is not yet decided.
- **Hosting and analytics:** Cloudflare Workers via vinext; a self-hosted analytics script at `analytics.masb0ymas.com`, disclosed in the Privacy Policy.
- **Derived numbers:** hero stats and the "Technologies we work with" list are computed from the project and service data; keep them derived rather than hand-written.

## Brand Commitments

- Name: **Montara Project**. Tagline: **"Build something different."**
- Logo: `public/assets/images/brand-logo.png`.
- Legal pages (Terms of Use, Privacy Policy) are effective as of October 6, 2026.

## Evidence on Hand

- **Projects:** nine listed in `data/site.ts` with live or GitHub links. They are a **mix of Montara's own products and client work**; which are which is not yet recorded, so do not label any project as client work (or as in-house) without confirmation.
- **Hero screenshot:** Tera Router dashboard, `public/assets/images/terarouter.png`.
- **Team:** N. Fajri (Founder & Engineer) and Mahdy Arief (PM & AI Consultant), with photos in `public/assets/images/teams/`. `mahdy.jpg` is only 320px and needs a higher-resolution replacement.
- **Absent, must not be fabricated:** client testimonials, client logos, case-study metrics, revenue or user numbers, pricing, certifications, and industry counts.

## Product Principles

1. **Proof over promises.** Every claim points to something inspectable: a live product, a public repo, or a named person. If it can't be shown, don't say it.
2. **One team, whole stack.** Present services as one end-to-end capability rather than separate departments.
3. **Show the code.** Open-source work is the strongest credibility signal; make it easy to reach.
4. **Credible to every audience.** A founder, an SME owner, and a staff engineer should each find what they need without the site picking one and losing the others.
5. **Bilingual by design.** New copy and structure should be written so an Indonesian version can follow without rework.
