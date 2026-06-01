import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Meccanica Superiore 1 - 2026",
  lang: 'it-IT',
  description: "Pagina del corso Meccanica Superiore 1 (Meccanica Statistica)",
  // Following is part of publishing to multiple platforms, this is the location for the TV website.  Note that since the website went down I have changed it to match the github.io directory convention, so I may have to make adjustments to get it working again later
  base: process.env.VITEPRESS_BASE ?? '/~greenblatt/MS1-2026/',
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' }
    ],
    
    sidebar: [
        { text: "Home", link: "/"},
        { text: "Diario delle lezioni", link: "diary"}
    ],

    locales: {
      root: {
        label: 'Italiano',
        lang: 'it',
      },
    },
    

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
