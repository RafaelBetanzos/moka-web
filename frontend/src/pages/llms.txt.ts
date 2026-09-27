import type { APIRoute } from "astro";
import { company, keyPages, offer, summary } from "../data/llmsContent";

export const GET: APIRoute = () => {
  const body = `# Moka Bio

> ${summary}

${company}

## What Moka offers

${offer}

## Key pages

${keyPages()}

## More detail

- [Full description for language models](https://moka.bio/llms-full.txt)
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
