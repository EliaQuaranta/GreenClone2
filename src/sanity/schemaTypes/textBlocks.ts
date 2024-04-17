import { defineField, defineType } from "sanity";

export const textBlocks = defineType({
  name: "textBlocks",
  type: "object",
  fields: [
    defineField({
      name: "blocks",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "label",
              type: "string",
            }),
            defineField({
              name: "heading",
              type: "string",
            }),
            defineField({
              name: "link",
              type: "url",
            }),
          ],
        },
      ],
    }),
  ],
});
