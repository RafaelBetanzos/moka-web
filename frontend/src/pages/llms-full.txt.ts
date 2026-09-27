import type { APIRoute } from "astro";
import { audience, company, context, keyPages, offer, proof, research, summary, terms, trust } from "../data/llmsContent";

export const GET: APIRoute = () => {
  const body = `# Moka Bio — full description

> ${summary}

## Company

${company}

## What Moka offers

${offer}

## Who it is for

${audience}

## Proof points

${proof}

## Why it matters (with sources)

${context}

## Trust

${trust}

## Selected research highlighted by Moka

${research()}

## Key pages (English, Spanish, Brazilian Portuguese)

${keyPages()}

## Related terms

${terms}
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
