import { existsSync } from "node:fs";
import { join } from "node:path";

// Some images are supplied after the pages are built. They are referenced by their
// public/ path and only rendered once the file exists, so a missing image never
// shows as an empty frame or a broken icon (checked at build time / on each dev request).
export const hasPublicFile = (path: string) => existsSync(join(process.cwd(), "public", path.replace(/^\//, "")));

// Per-page Open Graph image, falling back to the site default until the file exists.
export const ogImageOr = (path: string) => (hasPublicFile(path) ? path : "/og-image.jpg");
