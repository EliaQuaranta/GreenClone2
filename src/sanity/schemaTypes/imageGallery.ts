import { defineField, defineType } from "sanity";

export const imageGalleryType = defineType({
  name: "gallery",
  title: "gallery",
  type: "object",
  fields: [
    defineField({
      name: "mainTitle",
      type: "string",
    }),
    defineField({
      name: "mainDescription",
      type: "text",
    }),
    defineField({
      name: "image1",
      type: "object",
      fields: [
        defineField({
          name: "image",
          type: "image",
        }),
        defineField({
          name: "shortDescription",
          type: "text",
        }),
      ],
    }),
    defineField({
      name: "image2",
      type: "object",
      fields: [
        defineField({
          name: "image",
          type: "image",
        }),
        defineField({
          name: "shortDescription",
          type: "text",
        }),
      ],
    }),
  ],
});
