import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  main: [
    "index",
    "quick-start",
    "mongodb",
    {
      type: "category",
      label: "Data Ingest CLI",
      collapsible: true,
      collapsed: true,
      items: [
        "ingest/configure",
        "ingest/configuration-reference",
        "ingest/command-reference",
        "ingest/data-sources",
        "ingest/optimize",
      ],
    },
    {
      type: "category",
      label: "Chatbot Server",
      collapsible: true,
      collapsed: true,
      items: [
        "server/configure",
        "server/conversations",
        "server/user-message",
        "server/llm",
        {
          type: "category",
          label: "Retrieval Augmented Generation (RAG)",
          collapsed: true,
          collapsible: true,
          items: [
            {
              type: "doc",
              id: "server/rag/index",
              label: "Set up RAG",
            },
            "server/rag/preprocess",
            "server/rag/retrieve",
            "server/rag/references",
          ],
        },
        "server/custom-logic",
        "server/tools",
        "server/persist",
        "server/evaluate",
        {
          type: "link",
          label: "OpenAPI Spec",
          href: "/server/openapi",
        },
      ],
    },
    "ui",
    {
      type: "category",
      label: "API Reference",
      collapsible: true,
      collapsed: true,
      link: {
        type: "generated-index",
        title: "API Reference",
        description:
          "This section contains full generated API reference documentation.",
        slug: "/reference/",
      },
      items: [
        {
          "mongodb-chatbot-server": [
            {
              type: "autogenerated",
              dirName: "reference/server",
            },
          ],
        },
        {
          "mongodb-rag-core": [
            {
              type: "autogenerated",
              dirName: "reference/core",
            },
          ],
        },
        {
          "mongodb-rag-ingest": [
            {
              type: "autogenerated",
              dirName: "reference/ingest",
            },
          ],
        },
      ],
    },
  ],
};

export default sidebars;
