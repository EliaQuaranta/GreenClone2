import { DocumentIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const pageType = defineType({
  name: "pages",
  type: "document",
  title: "Pages",
  fields: [
    defineField({ name: "title", type: "string" }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
        maxLength: 200,
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200), // Opzionale, definisce come generare lo slug
      },
    }),
    defineField({
      name: "Parent",
      title: "Parent",
      type: "array",
      of: [{ type: "reference", to: { type: "Parent" } }],
    }),
    defineField({
      name: "pageBuilder",
      type: "array",
      title: "Page builder",
      of: [
        defineArrayMember({
          name: "hero",
          type: "hero",
        }),
        defineArrayMember({
          name: "textImg",
          type: "textImg",
        }),
        defineArrayMember({
          name: "gallery",
          type: "gallery",
        }),
        defineArrayMember({
          name: "textBlocks",
          type: "textBlocks",
        }),
        defineArrayMember({
          name: "banner",
          type: "banner",
        }),
        defineArrayMember({
          name: "checkUps",
          type: "checkUps",
        }),
      ],
    }),
  ],
});
