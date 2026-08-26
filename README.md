# Try with Mirra docs

Customer-facing docs for Try with Mirra (Shopify try-before-you-buy). Hosted by [Mintlify](https://www.mintlify.com). Live site: [https://mirra-docs.mintlify.site](https://mirra-docs.mintlify.site).

Short how-tos still live in the [Help Center](https://helpcenter.trywithmirra.com/knowledge-base). This site is the deeper product guide.

Agents must follow [`WRITING.md`](./WRITING.md) and [`AGENTS.md`](./AGENTS.md). Document **only customer interactions** (merchant in Shopify Admin / the returns dashboard, or shopper in the customer portal).

## Local preview

Needs Node.js 20.17+. From this directory:

```bash
npm i -g mint
mint dev
```

Open [http://localhost:3000](http://localhost:3000) (or the next free port).

## Deploy

Push or merge to `main`. The Mintlify GitHub App builds automatically.
