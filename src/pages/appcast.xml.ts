import type { APIRoute } from 'astro';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

export const GET: APIRoute = () => {
  const dir = path.dirname(fileURLToPath(import.meta.url));
  const xml = fs.readFileSync(path.join(dir, '../../public/appcast.xml'), 'utf-8');
  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' },
  });
};
