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
      { text: "Portfolio", link: "https://bxamra.github.io", noIcon: true },
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
            { text: "Overview", link: "/punjab-educare/" },
            {
              text: "Account Deletion",
              link: "/punjab-educare/delete-account",
            },
            {
              text: "Intellectual Property & Collaboration Notice",
              link: "/punjab-educare/intellectual-property-collaboration-notice",
            },
          ],
        },
        {
          text: "Android App",
          items: [
            {
              text: "Privacy Policy",
              link: "/punjab-educare/privacy-policy",
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
      message:
        '<a href="https://www.flaticon.com/free-icons/google-docs" title="document icons" target="_blank" rel="noreferrer">Document icons created by Vectors Tank - Flaticon</a>',
      copyright: `© ${year} BXAMRA. All rights reserved`,

      // <a href="https://www.flaticon.com/free-icons/google-docs" title="google docs icons">Google docs icons created by Vectors Tank - Flaticon</a>
    },
  },
});
