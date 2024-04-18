import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemaTypes/blockContent";
import category from "./schemaTypes/category";
import author from "./schemaTypes/author";

import AnalisiBlocks from "./schemaTypes/AnalisiBlocks";

import { formType } from "./components/formType";
import { heroType } from "./schemaTypes/heroType";
import { pageType } from "./schemaTypes/pageType";
import { videoType } from "./components/videoType";
import sectionPages from "./schemaTypes/sectionPages";
import { textBlocks } from "./schemaTypes/textBlocks";
import { banner } from "./schemaTypes/banner";
import { checkUps } from "./schemaTypes/checkUps";
import { textImg } from "./schemaTypes/textImg";
import { fullPostContent } from "./schemaTypes/fullPostContent";
import { Post } from "./schemaTypes/post";
import { workSpace } from "./schemaTypes/workSpace";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    author,
    category,
    blockContent,
    AnalisiBlocks,
    sectionPages,
    banner,
    checkUps,
    pageType,
    heroType,
    textImg,
    workSpace,
    formType,
    videoType,
    textBlocks,
    Post,
    fullPostContent,
  ],
};
