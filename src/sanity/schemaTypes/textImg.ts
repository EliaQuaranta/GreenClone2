import { defineField, defineType } from "sanity";

export const textImg = defineType({
  name: "textImg",
  type: "object",
  title: "textImg",
  fields: [
    defineField({
      name: "blockTitle",
      type: "string",
    }),
    defineField({
      name: "blockSubtitle",
      type: "string",
    }),
    defineField({
      name: "blockText",
      type: "text",
    }),
    defineField({
      name: "image",
      type: "array",
      of: [{ type: "image" }],
      options: { layout: "grid" },
    }),
    defineField({
      name: "imagePosition",
      type: "string",
      description: "Select where the image will be",
      options: {
        list: ["Left", "Right"],
      },
    }),
  ],
});
