import express from 'express';
import { initTRPC } from '@trpc/server';
import * as trpcExpress from '@trpc/server/adapters/express';
import cors from 'cors';

const app = express();
const PORT = 3000;

const t = initTRPC.create();

const appRouter = t.router({
  hello: t.procedure.query(() => {
    return 'Hello World';
  }),
});

app.get('/', (_req, res) => res.send('hello')); //削除可能

app.use(cors());
app.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router: appRouter,
  })
);

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));

export type AppRouter = typeof appRouter;
