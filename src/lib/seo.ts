import type { SeoMeta } from '../types/seo';

export function buildSeo(meta: SeoMeta): SeoMeta {
  return {
    title: meta.title,
    description: meta.description,
  };
}
