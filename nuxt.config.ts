// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // 1. Aquí van los módulos oficiales de Nuxt
  modules: [
    '@nuxtjs/tailwindcss'
  ],
// CONFIGURACIÓN DE METADATOS GLOBALES
  app: {
    head: {
      title: 'Tech Solutions', // Título por defecto de la pestaña
      htmlAttrs: {
        lang: 'es' // Configura el idioma del sitio en español
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {  name: 'description', content: 'Tu mejor aliado en tus qupis informaticos' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { 
          rel: 'stylesheet', 
          href: 'https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.css' 
        } // Icono de la pestaña
      ]
    }
  },
  // 2. Aquí va la configuración de las librerías que no tienen módulo de Nuxt
  runtimeConfig: {
    public: {}
  }
})
