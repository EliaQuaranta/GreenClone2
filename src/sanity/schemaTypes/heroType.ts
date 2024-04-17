import { defineField, defineType } from "sanity";

export const heroType = defineType({
  name: "hero",
  type: "object",
  fields: [
    defineField({
      name: "text",
      type: "string",
    }),
    defineField({
      name: "buttonText",
      type: "string",
    }),
    defineField({
      name: "link",
      type: "url", // Puoi utilizzare il tipo "url" per un campo link
    }),
  ],
});
