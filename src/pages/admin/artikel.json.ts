import { getCollection } from 'astro:content';

// Daftar semua artikel (termasuk draft/terjadwal) untuk panel admin. Panel /admin/ tidak diindeks Google.
export const GET = async () => {
  const [a, l] = await Promise.all([getCollection('artikel'), getCollection('lp')]);
  const pick = (c: any) => ({
    slug: c.id, title: c.data.title, description: c.data.description, date: c.data.date.toISOString().slice(0, 10),
    category: c.data.category || '', tags: c.data.tags || [], image: c.data.image || '', draft: !!c.data.draft, body: c.body || '',
  });
  return new Response(JSON.stringify({ dibuat: new Date().toISOString(), artikel: a.map(pick), lp: l.map((x: any) => ({ slug: x.id, title: x.data.title })) }), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};
