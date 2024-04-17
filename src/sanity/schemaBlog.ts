import { type SchemaTypeDefinition } from "sanity";
import { fullPostContent } from "./schemaTypes/fullPostContent";

export const BlogPage: { types: SchemaTypeDefinition[] } = {
  types: [fullPostContent],
};
