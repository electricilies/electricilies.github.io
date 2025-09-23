import { defineConfig } from "vitepress";
import { configureDiagramsPlugin } from "vitepress-plugin-diagrams";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Electricilies Docs",
  description: "Electricilies docs",
  lang: "en-GB",
  markdown: {
    theme: {
      light: "catppuccin-latte",
      dark: "catppuccin-mocha",
    },
    config: (md) => {
      configureDiagramsPlugin(md);
    },
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Overview", link: "/overview" },
      { text: "Docs", link: "/docs" },
    ],

    sidebar: [
      {
        text: "Overview",
        items: [{ text: "Overview", link: "/overview" }],
      },
      {
        text: "Docs",
        items: [
          {
            text: "Database",
            link: "/docs/database",
          },
          {
            text: "UML",
            link: "/docs/uml",
            collapsed: true,
            items: [],
          },
        ],
      },
    ],

    search: {
      provider: "local",
    },

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/electricilies",
      },
    ],
  },
});
