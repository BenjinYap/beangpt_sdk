import { ModelClientInterface } from "../ModelClientInterface.js";
import { ClientOptions, OpenAI } from "openai";

export enum OpenAIModel {
  GPT_4_1_NANO = 'gpt-4.1-nano',
}

type OpenAIAuth = {
  apiKey: string;
}

export class OpenAIClient implements ModelClientInterface {
  private client:OpenAI;

  constructor(auth:OpenAIAuth) {
    console.log('hi');
    const options:ClientOptions = {
      ...auth
    };
    this.client = new OpenAI(options);
  }

  async sendPrompt(model:OpenAIModel, prompt:string): Promise<any> {
    const response = await this.client.responses.create({
      model: model,
      input: prompt,
    });
    return response;
  }
}

