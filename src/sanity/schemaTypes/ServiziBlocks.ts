import { defineField, defineType } from "sanity";

export default defineType({
  name: "PostServizi",
  title: "PostServizi",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "textImgs",
      title: "Text Images",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
            }),
            defineField({
              name: "subtitle",
              title: "Subtitle",
              type: "string",
            }),
            defineField({
              name: "image",
              title: "Image",
              type: "image",
            }),
          ],
        },
      ],
    }),

    defineField({
      name: "textBlocks",
      title: "Text Blocks",
      type: "array",
      of: [
        {
          type: "object",
          name: "banner1",
          fields: [
            defineField({
              name: "Banner",
              title: "Banner",
              type: "image",
            }),
          ],
        },
        {
          type: "object",
          name: "textBlocks1",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
            }),
            defineField({
              name: "text",
              title: "Text",
              type: "text",
            }),
            defineField({
              name: "link",
              title: "Link",
              type: "string",
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "banner",
      title: "Banner",
      type: "array",
      of: [
        defineField({
          name: "Banner",
          title: "Banner",
          type: "image",
        }),
      ],
    }),
    defineField({
      name: "PartnerBanners",
      title: "Partner Banners",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "mainTitle",
              title: "Main Title",
              type: "string",
            }),
            defineField({
              name: "firstText",
              title: "First Text",
              type: "text",
            }),
            defineField({
              name: "secondText",
              title: "Second Text",
              type: "text",
            }),
            defineField({
              name: "firstImage",
              title: "First Image",
              type: "image",
            }),
            defineField({
              name: "secondImage",
              title: "Second Image",
              type: "image",
            }),
          ],
        },
      ],
    }),

    defineField({
      name: "checkUps",
      title: "Check Ups",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "checkUpText",
              title: "Check Up Text",
              type: "text",
            }),
            defineField({
              name: "checkUpButtonText",
              title: "Check Up Button Text",
              type: "string",
            }),
            defineField({
              name: "checkUpLink",
              title: "Check Up Link",
              type: "string",
            }),
          ],
        },
      ],
    }),
  ],
});
