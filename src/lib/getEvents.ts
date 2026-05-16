import { getCollection } from 'astro:content';

export async function getEvents() {
  return getCollection('events');
}
