# Try with Mirra documentation

This repo is **AI-written, customer-facing** Mintlify docs. Humans review PRs; they do not author pages.

**Before you create or edit any MDX or `docs.json` navigation, read [`WRITING.md`](./WRITING.md) and follow it as the writing prompt.** That file is the full script: audience, voice, what to skip, page shape, and the PR checklist.

## Non-negotiables

- Document **only customer interactions**: a merchant in **Shopify Admin** or the **returns / merchant dashboard**, or a shopper in the **customer portal**
- **Never** document internal workings or secret sauce from the codebase (how it is implemented, scored, stored, or routed)
- Do not document fraud rules, billing internals, infra, or unpublished behaviour
- Diff-and-PR only. Never regenerate the whole site. Never merge to `main` yourself
- Product name: **Try with Mirra** or **Mirra**, never TWM

## Terminology

- **Try order** — Shopify order with a trial window
- **Keep / return** — shopper decisions per line
- **Customer portal** — shopper UI after delivery
- **Merchant dashboard** — Mirra admin for stores

## Style (summary)

- Second person, active voice, sentence case headings
- Bold UI labels: Click **Settings**
- Code formatting for URLs, file names, and JSON
- Mintlify `<Steps>`, `<Card>`, `<Note>`, `<Warning>`, `<Tabs>`, `<Accordion>`

## Mintlify MCP

- Docs product knowledge: `https://www.mintlify.com/docs/mcp`
- Project edit MCP: `https://mcp.mintlify.com` (authenticate in Cursor if you use it)
