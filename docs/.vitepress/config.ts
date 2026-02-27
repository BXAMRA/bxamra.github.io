import { defineConfig } from "vitepress";

const year = new Date().getFullYear();

export default defineConfig({
  title: "BXAMRA",

  outDir: "../products",
  base: "/products/",

  cleanUrls: true,
  lastUpdated: true,

  sitemap: { hostname: "https://bxamra.github.io/products/" },

  themeConfig: {
    search: {
      provider: "local",
    },

    nav: [
      { text: "Home", link: "/" },
      { text: "Portfolio", link: "https://bxamra.github.io" },
      {
        text: "Products",
        items: [
          { text: "Punjab Educare", link: "/punjab-educare/" },
          { text: "WhatsZip Viewer", link: "/whatszip-viewer/" },
        ],
      },
    ],

    sidebar: {
      "/punjab-educare/": [
        {
          text: "Punjab Educare",
          items: [
            { text: "General", link: "/punjab-educare/" },
            {
              text: "Account Deletion",
              link: "/punjab-educare/delete-account",
            },
            {
              text: "Privacy Policy",
              link: "/punjab-educare/privacy-policy",
            },
            {
              text: "Intellectual Property & Collaboration Notice",
              link: "/punjab-educare/intellectual-property-collaboration-notice",
            },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: "instagram", link: "https://www.instagram.com/jas.bxamra" },
      { icon: "github", link: "https://github.com/bxamra" },
      {
        icon: "fiverr",
        link: "https://www.fiverr.com/bxamra",
        ariaLabel: "Fiverr",
      },
    ],

    footer: {
      // message: "Really good and fully featured Vue Tauri Starter template",
      copyright: `© ${year} BXAMRA. All rights reserved`,
    },
  },
});
