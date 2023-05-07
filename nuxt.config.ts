// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
    app: {
        head: {
            link: [
                {rel: "stylesheet", href: "css/style.css"},
                {rel: "stylesheet", href: "css/icons.css"},
                {rel: "stylesheet", href: "css/uikit.css"},
                // {rel: "stylesheet", href: "css/main.css"},
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
                { rel: 'stylesheet', type: 'text/css', href: 'https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css' },
            ],
            script: [
                {
                  src: 'js/tippy.all.min.js'
                },
                {
                  src: 'js/uikit.js'
                },
                {
                  src: 'js/simplebar.js'
                },
                {
                  src: 'js/custom.js'
                },
                {
                  src: 'js/bootstrap-select.min.js'
                },
                {
                  src: 'https://unpkg.com/ionicons@5.2.3/dist/ionicons.js'
                }
              ]
        }
    }
})
