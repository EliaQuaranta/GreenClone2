import { type SchemaTypeDefinition } from "sanity";

import { formType } from "./components/formType";
import { heroType } from "./schemaTypes/heroType";
import { imageGalleryType } from "./schemaTypes/imageGallery";
import { pageType } from "./schemaTypes/pageType";
import { videoType } from "./components/videoType";
import { textImg } from "./schemaTypes/textImg";

export const schemaPages: { types: SchemaTypeDefinition[] } = {
  types: [pageType, heroType, textImg, imageGalleryType, formType, videoType],
};
