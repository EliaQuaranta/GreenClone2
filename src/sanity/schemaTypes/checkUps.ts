// ./schemas/formType.js

import { defineField, defineType } from "sanity";

export const checkUps = defineType({
  name: "checkUps",
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
});
