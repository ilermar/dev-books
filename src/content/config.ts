import { defineCollection, z } from "astro:content";
// Zod ... is a library that helps to define collections and their schemas
// Zod is used to validate the structure of the data in the collections

// Define a collection for books with a schema
export const books = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string(),
    img: z.string(),
    readtime: z.number(),
    description: z.string(),
    buy: z.object({
      spain: z.string().url(),
      usa: z.string().url(),
    }),
  }),
});

export const collections = { books };
