import { defineConfig, type DefaultTheme } from "vitepress";

const year = new Date().getFullYear();

const nav: DefaultTheme.NavItem[] = [
  { text: "Home", link: "/" },
  { text: "Portfolio", link: "https://bxamra.github.io", noIcon: true },
  { text: "Punjab Educare", link: "/punjab-educare/", activeMatch: "^/punjab-educare/" },
  // {
  // text: "Products",
  // items: [
  // { text: "Punjab Educare", link: "/punjab-educare/", activeMatch: "^/punjab-educare/" },
  // { text: "WhatsZip Viewer", link: "/whatszip-viewer/", activeMatch: "^/whatszip-viewer/" },
  // { text: "M.A.G.I.C.", link: "/magic-games/", activeMatch: "^/magic-games/" },
  // ],
  // },
];

const sidebar: DefaultTheme.Sidebar = {
  "/punjab-educare/": [
    {
      text: "Punjab Educare",
      link: "/punjab-educare/",
      items: [
        { text: "Home", link: "/punjab-educare/home" },
        { text: "Teacher Registration", link: "/punjab-educare/teacher-registration" },
        { text: "Question Submission", link: "/punjab-educare/question-submissions" },
        { text: "Teacher Support", link: "/punjab-educare/teacher-support" },
        { text: "Backend & API", link: "/punjab-educare/api" },
      ],
    },
    {
      text: "Apps",
      items: [
        { text: "Android", link: "/punjab-educare/android" },
        {
          text: "Teacher Desktop",
          link: "/punjab-educare/teacher-desktop",
          items: [
            {
              text: "Update Guide",
              link: "/punjab-educare/update-from-v1",
            },
          ],
        },
      ],
    },
    {
      text: "Legal",
      items: [
        { text: "Privacy Policy", link: "/punjab-educare/privacy-policy" },
        { text: "Account Deletion", link: "/punjab-educare/delete-account" },
        { text: "Intellectual Property & Collaboration Notice", link: "/punjab-educare/intellectual-property-collaboration-notice" },
      ],
    },
    {
      text: "Change Logs",
      items: [
        { text: "Android", link: "/punjab-educare/changelogs/android" },
        // { text: "Teacher Desktop", link: "/punjab-educare/changelogs/teacher-desktop" },
        // { text: "Admin Desktop", link: "/punjab-educare/changelogs/admin-desktop" },
      ],
    },
  ],

  "/whatszip-viewer/": [
    {
      text: "WhatsZip Viewer",
      items: [
        { text: "About", link: "/whatszip-viewer/" },
        { text: "Android", items: [{ text: "Privacy Policy", link: "/whatszip-viewer/privacy-policy" }] },
      ],
    },
  ],

  "/magic-games/": [
    {
      text: "M.A.G.I.C.",
      items: [
        { text: "About", link: "/magic-games/" },
        { text: "Android", items: [{ text: "Privacy Policy", link: "/magic-games/privacy-policy" }] },
      ],
    },
  ],
};

export default defineConfig({
  title: "BXAMRA",

  outDir: "../docs",
  base: "/docs/",

  vite: { server: { host: "0.0.0.0" } },

  cleanUrls: true,
  lastUpdated: true,

  sitemap: { hostname: "https://bxamra.github.io/docs/" },

  head: [
    ["meta", { property: "og:site_name", content: "BXAMRA" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ["link", { rel: "canonical", href: "https://bxamra.github.io/docs/" }],

    ["link", { rel: "icon", href: "/assets/favicon/favicon.ico" }],
    ["link", { rel: "apple-touch-icon", sizes: "180x180", href: "/assets/favicon/apple-touch-icon.png" }],
    ["link", { rel: "icon", type: "image/png", sizes: "32x32", href: "/assets/favicon/favicon-32x32.png" }],
    ["link", { rel: "icon", type: "image/png", sizes: "16x16", href: "/assets/favicon/favicon-16x16.png" }],
    ["link", { rel: "manifest", href: "/assets/favicon/site.webmanifest" }],

    [
      "script",
      {
        async: "",
        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3391196216969529",
        crossorigin: "anonymous",
      },
    ],
  ],

  themeConfig: {
    search: { provider: "local" },

    nav,
    sidebar,

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
