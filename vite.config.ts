import react from '@vitejs/plugin-react'
import vike from 'vike/plugin'
import devServer, { defaultOptions } from "@hono/vite-dev-server"
import { UserConfig } from 'vite'

const config: UserConfig = {
  plugins: [
    react(),
    vike(),
    devServer({
      entry: "./server/index.ts",
      exclude: [
        ...defaultOptions.exclude,
        /.*\.ts$/,
        /.*\.tsx?($|\?)/,
        /.*\.(s?css|less)($|\?)/,
        /.*\.(svg|png)($|\?)/,
        /^\/(public|assets)\/.+/,
      ],
      injectClientScript: false,
    }),
  ]
}

export default config
