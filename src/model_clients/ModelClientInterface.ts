import { Input } from "../Input.js";
import { Output } from "../Output.js";

export interface ModelClientInterface<Model> {
  sendPrompt(model:Model, prompt:Input):Promise<Output>;
}