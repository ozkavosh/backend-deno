import { Context } from "../deps.ts";

let instance: ColorController | null = null;
const colorsRepository: string[] = [];

export default class ColorController {
  async postColor(ctx: Context) {
    const {color} = await ctx.request.body().value;
    if(color){
        if(colorsRepository.includes(color)){
            ctx.response.body = { success: false, error: "Color already exists" };
        }else{
            colorsRepository.push(color);
            ctx.response.body = { success: true };
        }
    }else{
        ctx.response.body = { success: false, error: "Invalid color" };
    }
  }

  getColors(ctx: Context) {
    ctx.response.body = colorsRepository;
  }

  static getInstance(): ColorController {
    if (instance == null) {
      instance = new ColorController();
      return instance;
    } else {
      return instance;
    }
  }
}
