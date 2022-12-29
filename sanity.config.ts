import {defineConfig} from "sanity";
import {deskTool} from "sanity/desk";
import {markdownSchema} from "sanity-plugin-markdown";
import {visionTool} from "@sanity/vision";
import {schemaTypes} from "src/sanity/schemas";

export default defineConfig({
  name: "default",
  title: "asher.io",

  projectId: "fqeiodwu",
  dataset: "production",

  plugins: [deskTool(), visionTool(), markdownSchema()],

  schema: {
    types: schemaTypes,
  },
});
