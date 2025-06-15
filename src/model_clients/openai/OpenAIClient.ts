import { ModelClientInterface } from "../ModelClientInterface.js";
import { ClientOptions, OpenAI } from "openai";
import { Input } from "../../Input.js";
import { Output } from "../../Output.js";

export enum OpenAIModel {
  GPT_4_1_NANO = 'gpt-4.1-nano',
}

type OpenAIAuth = {
  apiKey: string;
}

export class OpenAIClient implements ModelClientInterface<OpenAIModel> {
  private client:OpenAI;

  constructor(auth:OpenAIAuth) {
    const options:ClientOptions = {
      ...auth
    };
    this.client = new OpenAI(options);
  }

  async sendPrompt(model:OpenAIModel, input:Input): Promise<Output> {
    const response = await this.client.responses.create({
      model: model,
      input: input.prompt,
    });
    return new Output({
      model: response.model,
      text: response.output_text,
      usage: {
        input_tokens: response.usage!.input_tokens,
        output_tokens: response.usage!.output_tokens,
      },
    });
  }
}

