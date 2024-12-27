## Vike with Hono.
This is an example of integrating Hono with Vite and Vike.

The development server uses [@hono/vite-dev-server](https://github.com/honojs/vite-plugins/blob/main/packages/dev-server) (Vite Plugin).

The production server uses [@hono/node-server](https://github.com/honojs/node-server) (Node.js Adapter for Hono).

To run this example:
- Fork or clone this repo
```bash
cd vike-react-hono
pnpm install
# Start the Vite development server
pnpm dev 
# Build the Vike app for production
pnpm build
# Run the app in a production environment
pnpm prod
```

> [!NOTE]
> The `./server/index.ts` file is not transpiled. If you'd like your server to be transpiled with Vite, you can use [`vike-node`](https://github.com/vikejs/vike-node).

**Read the official documentations of Vike at [_vike.dev_](https://vike.dev).**

**This repo was scaffolded with `pnpm create vike`.**