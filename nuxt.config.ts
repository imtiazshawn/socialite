// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            link: [
                {rel: "stylesheet", href: "css/style.css"},
                {rel: "stylesheet", href: "css/icons.css"},
                {rel: "stylesheet", href: "css/uikit.css"},
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
                { rel: 'stylesheet', type: 'text/css', href: 'https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css' },
                { rel: 'stylesheet', href: '@fortawesome/fontawesome-free/css/all.css' },
            ],
            script: [
                {
                  src: 'https://code.jquery.com/jquery-3.6.0.min.js',
                  integrity: 'sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=',
                  crossorigin: 'anonymous'
                },
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
