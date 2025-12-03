// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import "@catppuccin/vitepress/theme/mocha/lavender.css";
import { theme as openApiTheme } from "vitepress-openapi/client";
import "vitepress-openapi/dist/style.css";

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },
  async enhanceApp(ctx) {
    openApiTheme.enhanceApp(ctx);
  },
} satisfies Theme;
