import react from '@vitejs/plugin-react'
import vike from 'vike/plugin'
import devServer from "@hono/vite-dev-server"
import { UserConfig } from 'vite'

const config: UserConfig = {
  plugins: [
    react(),
    vike(),
    devServer({
      entry: "./server/index.ts",
      exclude: [
        /^\/@.+$/,
        /.*\.(ts|tsx|vue)($|\?)/,
        /.*\.(s?css|less)($|\?)/,
        /^\/favicon\.ico$/,
        /.*\.(svg|png)($|\?)/,
        /^\/(public|assets|static)\/.+/,
        /^\/node_modules\/.*/
      ],
      injectClientScript: false,
    }),
  ]
}

export default config
