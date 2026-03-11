// docs/.vitepress/theme/index.ts
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import MyLayout from "./MyLayout.vue";

import "./edo.css";
import "./fiver-social-tweek.css";
import "./custom.css";

export default {
  extends: DefaultTheme,
  Layout: MyLayout,
} satisfies Theme;
