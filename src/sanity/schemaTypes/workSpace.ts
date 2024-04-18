import { defineField, defineType } from "sanity";

export const workSpace = defineType({
  name: "workSpace",
  type: "object",
  fields: [
    defineField({
      name: "image",
      type: "image",
    }),
  ],
});
