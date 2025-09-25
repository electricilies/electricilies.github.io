import { defineConfig } from "vitepress";
import { configureDiagramsPlugin } from "vitepress-plugin-diagrams";

console.log(process.env.KROKI_SERVER_URL);

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
      configureDiagramsPlugin(md, {
        krokiServerUrl: process.env.KROKI_SERVER_URL ?? null,
      });
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
            text: "Usecase",
            collapsed: true,
            items: [
              {
                text: "User",
                link: "/docs/usecase/user",
              },
              {
                text: "Customer",
                link: "/docs/usecase/customer",
              },
              {
                text: "Staff",
                link: "/docs/usecase/staff",
              },
              {
                text: "Admin",
                link: "/docs/usecase/admin",
              },
            ],
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
