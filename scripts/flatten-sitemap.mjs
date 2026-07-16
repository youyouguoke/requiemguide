import { renameSync, rmSync } from 'fs';
import { join } from 'path';

const dist = join(process.cwd(), 'dist');

// Flatten Astro's sitemap-index.xml + sitemap-0.xml into a single sitemap.xml
renameSync(join(dist, 'sitemap-0.xml'), join(dist, 'sitemap.xml'));
try { rmSync(join(dist, 'sitemap-index.xml')); } catch {}
