import { Application } from './deps.ts';
import colorRouter from './Routers/colorRouter.ts';

const app = new Application();

app.use(colorRouter.routes());

export default app;