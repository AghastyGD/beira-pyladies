import { getCollection } from 'astro:content';

export async function getOrganizers() {
  return getCollection('organizers');
}
