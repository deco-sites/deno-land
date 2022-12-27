// DO NOT EDIT. This file is generated by deco.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import { DecoManifest } from "$live/types.ts";
import * as $0 from "./routes/[...catchall].tsx";
import * as $1 from "./routes/_app.tsx";
import * as $2 from "./routes/_middleware.ts";
import * as $3 from "./routes/index.tsx";
import * as $$0 from "./islands/LiveControls.tsx";
import * as $$$0 from "./sections/Announcement.tsx";
import * as $$$1 from "./sections/Banner.tsx";
import * as $$$2 from "./sections/Head.tsx";
import * as $$$3 from "./sections/Header.tsx";
import * as $$$4 from "./sections/ImageWithText.tsx";
import * as $$$5 from "./sections/QuoteBlock.tsx";
import * as $$$6 from "./sections/SectionTitle.tsx";
import * as $$$7 from "./sections/ThreeColumnCards.tsx";

const manifest: DecoManifest = {
  routes: {
    "./routes/[...catchall].tsx": $0,
    "./routes/_app.tsx": $1,
    "./routes/_middleware.ts": $2,
    "./routes/index.tsx": $3,
  },
  islands: { "./islands/LiveControls.tsx": $$0 },
  sections: {
    "./sections/Announcement.tsx": $$$0,
    "./sections/Banner.tsx": $$$1,
    "./sections/Head.tsx": $$$2,
    "./sections/Header.tsx": $$$3,
    "./sections/ImageWithText.tsx": $$$4,
    "./sections/QuoteBlock.tsx": $$$5,
    "./sections/SectionTitle.tsx": $$$6,
    "./sections/ThreeColumnCards.tsx": $$$7,
  },
  functions: {},
  schemas: {
    "./sections/Announcement.tsx": {
      "inputSchema": {
        "type": "object",
        "properties": {
          "visible": {
            "type": "boolean",
            "title": "Visible",
          },
          "text": {
            "type": "string",
            "title": "Text",
          },
          "link": {
            "type": "string",
            "title": "Link",
          },
          "bgColor": {
            "type": "string",
            "title": "Bg Color",
          },
        },
        "required": [
          "visible",
          "text",
          "link",
          "bgColor",
        ],
      },
      "outputSchema": null,
    },
    "./sections/Banner.tsx": {
      "inputSchema": {
        "type": "object",
        "properties": {
          "image": {
            "format": "image-uri",
            "type": "string",
            "title": "Image",
          },
          "imageMobile": {
            "format": "image-uri",
            "type": "string",
            "title": "Image Mobile",
          },
          "altText": {
            "type": "string",
            "title": "Alt Text",
          },
          "title": {
            "type": "string",
            "title": "Title",
          },
          "subTitle": {
            "type": "string",
            "title": "Sub Title",
          },
        },
        "required": [
          "image",
          "imageMobile",
          "altText",
          "title",
          "subTitle",
        ],
      },
      "outputSchema": null,
    },
    "./sections/Head.tsx": {
      "inputSchema": {
        "type": "object",
        "properties": {
          "title": {
            "type": "string",
            "title": "Title",
          },
          "description": {
            "type": "string",
            "title": "Description",
          },
          "url": {
            "type": "string",
            "title": "Url",
          },
          "imageUrl": {
            "type": "string",
            "title": "Image Url",
          },
          "faviconUrl": {
            "type": "string",
            "title": "Favicon Url",
          },
          "themeColor": {
            "type": "string",
            "title": "Theme Color",
          },
        },
        "required": [
          "title",
          "description",
          "url",
          "imageUrl",
          "faviconUrl",
          "themeColor",
        ],
      },
      "outputSchema": null,
    },
    "./sections/Header.tsx": {
      "inputSchema": {
        "type": "object",
        "properties": {
          "menu": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "text": {
                  "type": "string",
                  "title": "Text",
                },
                "link": {
                  "type": "string",
                  "title": "Link",
                },
                "submenus": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "properties": {
                      "text": {
                        "type": "string",
                        "title": "Text",
                      },
                      "link": {
                        "type": "string",
                        "title": "Link",
                      },
                    },
                    "required": [],
                  },
                  "title": "Submenus",
                },
              },
              "required": [
                "text",
                "submenus",
              ],
            },
            "title": "Menu",
          },
        },
        "required": [
          "menu",
        ],
      },
      "outputSchema": null,
    },
    "./sections/ImageWithText.tsx": {
      "inputSchema": {
        "type": "object",
        "properties": {
          "title": {
            "type": "string",
            "title": "Title",
          },
          "text": {
            "type": "string",
            "title": "Text",
          },
          "imagePosition": {
            "type": "string",
            "title": "Image Position",
          },
          "image": {
            "format": "image-uri",
            "type": "string",
            "title": "Image",
          },
          "backgroundAtImage": {
            "type": "boolean",
            "title": "Background At Image",
          },
        },
        "required": [
          "title",
          "text",
          "image",
        ],
      },
      "outputSchema": null,
    },
    "./sections/QuoteBlock.tsx": {
      "inputSchema": {
        "type": "object",
        "properties": {
          "text": {
            "type": "string",
            "title": "Text",
          },
          "images": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "image": {
                  "format": "image-uri",
                  "type": "string",
                  "title": "Image",
                },
                "link": {
                  "type": "string",
                  "title": "Link",
                },
              },
              "required": [
                "image",
                "link",
              ],
            },
            "title": "Images",
          },
        },
        "required": [
          "text",
          "images",
        ],
      },
      "outputSchema": null,
    },
    "./sections/SectionTitle.tsx": {
      "inputSchema": {
        "type": "object",
        "properties": {
          "themeTitle": {
            "type": "string",
            "title": "Theme Title",
          },
          "title": {
            "type": "string",
            "title": "Title",
          },
          "subTitle": {
            "type": "string",
            "title": "Sub Title",
          },
        },
        "required": [
          "themeTitle",
          "title",
          "subTitle",
        ],
      },
      "outputSchema": null,
    },
    "./sections/ThreeColumnCards.tsx": {
      "inputSchema": {
        "type": "object",
        "properties": {
          "firstColumn": {
            "title": "First Column",
            "type": "object",
            "properties": {
              "svgIcon": {
                "type": "string",
                "title": "Svg Icon",
              },
              "title": {
                "type": "string",
                "title": "Title",
              },
              "subTitle": {
                "type": "string",
                "title": "Sub Title",
              },
            },
            "required": [
              "svgIcon",
              "title",
              "subTitle",
            ],
          },
          "secondColumn": {
            "title": "Second Column",
            "type": "object",
            "properties": {
              "svgIcon": {
                "type": "string",
                "title": "Svg Icon",
              },
              "title": {
                "type": "string",
                "title": "Title",
              },
              "subTitle": {
                "type": "string",
                "title": "Sub Title",
              },
            },
            "required": [
              "svgIcon",
              "title",
              "subTitle",
            ],
          },
          "thirdColumn": {
            "title": "Third Column",
            "type": "object",
            "properties": {
              "svgIcon": {
                "type": "string",
                "title": "Svg Icon",
              },
              "title": {
                "type": "string",
                "title": "Title",
              },
              "subTitle": {
                "type": "string",
                "title": "Sub Title",
              },
            },
            "required": [
              "svgIcon",
              "title",
              "subTitle",
            ],
          },
        },
        "required": [
          "firstColumn",
          "secondColumn",
          "thirdColumn",
        ],
      },
      "outputSchema": null,
    },
  },
  baseUrl: import.meta.url,
  config,
};

// live — this exposes the manifest so the live server can render components dynamically
globalThis.manifest = manifest;

export default manifest;
