import { defineConfig } from "vitepress";

const year = new Date().getFullYear();

export default defineConfig({
  title: "Invoices - BXAMRA",
  description: "Commercial invoices and delivery reports.",

  outDir: "../invoices",
  base: "/invoices/",

  vite: { server: { host: "0.0.0.0" } },

  cleanUrls: true,
  lastUpdated: false,

  head: [["meta", { name: "robots", content: "noindex, nofollow" }]],

  themeConfig: {
    logoLink: "#",

    nav: [],
    sidebar: {},

    socialLinks: [
      { icon: "instagram", link: "https://www.instagram.com/jas.bxamra" },
      { icon: "github", link: "https://github.com/bxamra" },
      { icon: "fiverr", link: "https://www.fiverr.com/bxamra", ariaLabel: "Fiverr" },
    ],

    footer: {
      copyright: `© ${year} BXAMRA. All rights reserved`,
    },
  },
});
