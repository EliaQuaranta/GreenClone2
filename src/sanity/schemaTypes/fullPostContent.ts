import { defineField, defineType } from "sanity";

export const fullPostContent = defineType({
  name: "fullPostContent",
  type: "object",
  fields: [
    defineField({
      name: "blocks",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "image",
      type: "image",
    }),
  ],
});
