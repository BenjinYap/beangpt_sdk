import { OpenAIModel } from "./openai/OpenAIClient.js";

export interface ModelClientInterface {
  sendPrompt(model:OpenAIModel, prompt:string):Promise<any>;
}