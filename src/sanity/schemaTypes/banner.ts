import { defineField, defineType } from "sanity";

export const banner = defineType({
  name: "banner",
  type: "object",
  fields: [
    defineField({
      name: "image",
      type: "image",
    }),
  ],
});
