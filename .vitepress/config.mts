import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Meccanica Superiore 1 - 2026",
  lang: 'it-IT',
  description: "Pagina del corso Meccanica Superiore 1 (Meccanica Statistica)",
  base: '/~greenblatt/ms1_2026/',
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
