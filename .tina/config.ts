import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "ecb3de53-de70-4707-876b-13e541eaf536", // Get this from tina.io
  token: "6a83bb50d7e19fb153f6ad611eba774e116db2de", // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "/",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "assets",
    },
  },
  schema: {
    collections: [
      {
        label: "Posts",
        name: "posts",
        path: "_posts",
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
