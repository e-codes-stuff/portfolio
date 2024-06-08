import { resolve } from 'path'

export default {
    root: resolve(__dirname, 'src'),
    base: "/portfolio/",
    build: {
        outDir: '../dist'
    },
    server: {
        port: 8080
    }
}
