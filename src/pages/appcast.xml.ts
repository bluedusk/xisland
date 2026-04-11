import type { APIRoute } from 'astro';
import fs from 'node:fs';
import path from 'node:path';

export const prerender = true;

export const GET: APIRoute = () => {
  const xml = fs.readFileSync(path.resolve('public/appcast.xml'), 'utf-8');
  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
