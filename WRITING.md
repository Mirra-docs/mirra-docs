# Writing script for Try with Mirra docs

This file is the **prompt**. Read it before you create or edit any page. Humans review pull requests; they do not author these docs. You write every customer-facing page, and you keep pages in sync when product behaviour changes.

If a request would produce internal, engineering-only, or unpublished content, **stop and skip it**. Do not work around this file.

## The codebase is not the docs

You may **read** the app to learn what shipped. You must **not** document how it works inside.

Do **not** write up internal workings or secret sauce: algorithms, scoring, data models, services, jobs, flags, repo structure, or “why we built it this way.” Product code lives in `try-with-mirra`.

Document **only customer interactions** — screens they open and actions they take:

| Who | Where they work | What you may document |
| --- | --- | --- |
| **Merchant / brand** | Try with Mirra in **Shopify Admin**, and the **returns / merchant dashboard** | Settings they click, policies they turn on, orders they review, integrations they connect |
| **Shopper** | The **customer portal** (and emails/links that get them there) | Keep / return, payment for kept items, return instructions |

If a change never appears in those UIs, it is not a docs change. Open no PR.

## Goal

Publish docs that a customer can finish a job with:

| Customer | Jobs |
| --- | --- |
| **Shopper** | Place a try order, open the customer portal, keep or return items, pay for what they keep |
| **Merchant / brand** | Install Mirra, configure try, returns, emails, and **integrations and automations** (Klaviyo, MCP, Shopify, and similar) |

Support teams reuse the same pages. There is no third voice for “ops” or “engineering.”

Short HubSpot Help Center articles still exist. This site is the deeper product guide. Link to the Help Center when a short how-to already lives there; do not duplicate it word for word.

## Audience test (must pass)

Before you keep a sentence, ask: **could a shopper or a merchant complete a task using only this page?**

Pass:

- Click **Settings → Return policies** and turn on store credit
- Add the MCP URL in Cursor and approve the store
- In the portal, mark a line **keep** or **return**

Fail (do not write):

- How Mirra stores an order, routes a job, or scores risk
- Fraud, denylists, chargeback tactics, or other secret sauce
- Billing, plan metering, or invoice internals
- Env vars, CI, infra, feature flags, unpublished experiments
- Internal names (`TWM`, ticket ids, collection names, function names)
- Anything a merchant would not see in Shopify Admin / the returns dashboard, or a shopper would not see in the customer portal

If the product diff is only internal, **open no PR**. Silence is correct.

## What you write from

You are driven by **shipped product behaviour**, not by inventing a docs site from scratch.

1. Read the app change (diff, PR, or feature description) only to find **customer-visible** behaviour.
2. Ask: does a merchant see this in Shopify Admin or the returns dashboard, or does a shopper see it in the customer portal? If neither, stop.
3. Find the existing MDX page. Prefer **update** over a new page.
4. Write the interaction (clicks, labels, outcomes). Do not explain the implementation behind it.
5. Open a GitHub PR on this docs repo. Do not merge. Do not regenerate the whole site.

Never full-replace MDX to “refresh” the site. Never overwrite branding (`docs.json` colours, `style.css`, logos, fonts) unless the task is explicitly about brand.

## Two sites, two folders

| Path | Reader | Voice |
| --- | --- | --- |
| `shoppers/` | Person who ordered from a brand | “You received a try order…” |
| `merchants/` | Brand staff in Shopify Admin / Mirra dashboard | “In the dashboard, click…” |
| Root (`quickstart`, `how-it-works`) | Merchants first; shoppers may still read lifecycle pages | Merchant “you”, with a clear shopper section when needed |

Do not mix shopper portal copy and merchant setup on the same page unless the page is a lifecycle overview (`how-it-works`). Integrations and automations always live under `merchants/`.

Merchant pages may mention what shoppers will see (so the brand can set expectations). Shopper pages never mention Admin, MCP, Klaviyo, or dashboard settings.

## Voice

- Second person, active voice: “Open the portal”, not “The portal can be opened”
- Sentence case headings: `Connect Klaviyo`, not `Connect Klaviyo Email Events`
- Bold UI labels: Click **Allow access**
- Product name: **Try with Mirra** or **Mirra**, never TWM
- Calm and specific. No slogans, no emoji, no “simply” / “just” / “powerful”
- British or American spelling is fine; stay consistent with the page you are editing

## Required terms

Use these words even if the code uses other names:

| Say | Do not say |
| --- | --- |
| try order | TBYB order, trial checkout (as the product name) |
| trial window | SLA, TTL |
| keep / return | accept / reject, purchase / decline |
| customer portal | shopper app, magic link page (unless you are describing the email link) |
| merchant dashboard | admin SPA, backoffice |
| shopper | end user, consumer |
| merchant or brand | tenant, shop record |

UI strings that appear in the product should match the product. If the dashboard says **Return policies**, write **Return policies**.

## Page shape

Every MDX page:

```yaml
---
title: "Sentence case title"
description: "One sentence: who this is for and what they can do."
keywords: ["try before you buy", "relevant", "terms"]
---
```

Then:

1. One short opening: who this is for and the outcome.
2. Prerequisites if they must have something first.
3. Numbered `<Steps>` for anything they click through.
4. Tables for options, event names, or permissions.
5. `<Note>`, `<Tip>`, `<Warning>`, `<Info>`, `<Check>` only when they add a real constraint.
6. Links to the next job (`<Card>` / `<CardGroup>`), not a marketing outro.

Frontmatter `title` is required. Add the page to `docs.json` navigation or it will not show in the sidebar.

## Mintlify mechanics

- Files: kebab-case `.mdx`
- Internal links: root-relative, no `.mdx` — `/merchants/klaviyo` not `../klaviyo.mdx`
- Code blocks always have a language tag
- Images in `images/` with alt text
- Prefer `<Steps>`, `<Tabs>`, `<Accordion>`, `<CardGroup>` over long prose
- Do not add pages that are only API internals. Public integration contracts (Klaviyo metric names, MCP URL) **are** customer-facing — document those.

Match existing pages (`quickstart.mdx`, `merchants/klaviyo.mdx`, `shoppers/customer-portal.mdx`) before inventing a new layout.

## Integrations and automations (merchant)

When the change is an integration:

- Document the **customer job**: connect, map events, test, turn on, revoke
- Include copy-pasteable identifiers they will see in the other product (metric names, webhook names, MCP URL)
- State permissions clearly (read-only vs can change orders)
- Point at the Help Center for click-by-click Shopify/Klaviyo UI if that article already exists
- Do not document how Mirra emits the event, stores payloads, or retries internally

## Shopper pages

- Write as if the brand sent them this URL
- No Shopify Admin, no API, no “your developer”
- Tell them what happens if they do nothing before the trial ends
- Send brand-specific policy questions to **the store they ordered from**; portal login issues can use [support@trywithmirra.com](mailto:support@trywithmirra.com)

## Help Center vs this site

- Help Center: short setup articles merchants already use
- This site: lifecycle, policies, integration reference, shopper portal language
- Link out. Do not fork a second version of the same article unless you are replacing it on purpose

## What never ships

- Internal workings or secret sauce from the codebase, even if the diff makes it obvious
- Fraud, risk, chargebacks, denylists
- Billing, margins, Mirra fees, plan internals
- Infra, databases, queues, repo layout of `try-with-mirra`
- Unpublished or flagged behaviour
- Calling this site a demo, preview, or internal-only doc on a published page
- Regenerating all MDX in one PR
- Editing `style.css`, logos, or theme as a side effect of a content update

## PR you open

Title and body should say **why the customer docs changed** (the product behaviour), not “update docs”.

Checklist before you open the PR:

- [ ] Every page is a customer interaction (Shopify Admin / returns dashboard, or customer portal)
- [ ] No internal workings, secret sauce, or “how the code does it”
- [ ] Shopper copy and merchant copy are in the right folders
- [ ] New pages are in `docs.json`
- [ ] Terms match the table above
- [ ] No fraud, billing, or infra
- [ ] Diff-only change; branding files untouched
- [ ] You did not merge to `main`
