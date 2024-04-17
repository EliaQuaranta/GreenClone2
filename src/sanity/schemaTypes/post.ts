import { defineArrayMember, defineField, defineType } from "sanity";

{
  /*export default defineType({
  name: "post",
  title: "Post",
  type: "document",

  fields: [
    {
      name: "custom",
      title: "Custom",
      type: "string",
      components: {
        input: MyCustomStringInput,
      },
    },
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "shortDescription",
      title: "ShortDescription",
      type: "string",
    }),

    defineField({
      name: "fullPostContent",
      type: "array",
      title: "Content",
      of: [
        {
          type: "block",
        },
      ],
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
    }),

    defineField({
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),
    defineField({
      name: "postCategories",
      title: "PostCategories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "blockContent",
    }),
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    },
  },*/
}

export const Post = defineType({
  name: "post",
  type: "document",
  title: "post",
  fields: [
    defineField({ name: "title", type: "string" }),

    defineField({
      name: "shortDescription",
      title: "ShortDescription",
      type: "string",
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
    }),

    defineField({
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),
    defineField({
      name: "postCategories",
      title: "PostCategories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    }),
    defineField({
      name: "pageBuilder",
      type: "array",
      title: "fullPostContent",
      of: [
        defineArrayMember({
          name: "fullPostContent",
          type: "block",
        }),
      ],
    }),
  ],
});
