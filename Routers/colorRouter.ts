import { Router } from "../deps.ts";
import ColorController from "../Controllers/ColorController.ts";

const colorController = ColorController.getInstance();

const colorRouter = new Router()
  .post("/", colorController.postColor)
  .get("/", colorController.getColors);

export default colorRouter;
