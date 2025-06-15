import { ModelClientInterface } from "../ModelClientInterface.js";
import { Input } from "../../Input.js";
import { Output } from "../../Output.js";
import { GoogleGenAI, GoogleGenAIOptions } from "@google/genai";

export enum GeminiModel {
  GEMINI_2_0_FLASH = 'gemini-2.0-flash',
}

type GeminiAuth = {
  apiKey: string;
}

export class GeminiClient implements ModelClientInterface<GeminiModel> {
  private client:GoogleGenAI;

  constructor(auth:GeminiAuth) {
    const options:GoogleGenAIOptions = {
      ...auth
    };
    this.client = new GoogleGenAI(options);
  }

  async sendPrompt(model:GeminiModel, input:Input): Promise<Output> {
    const response = await this.client.models.generateContent({
      model: model,
      contents: input.prompt,
    });
    // console.log(response.candidates);
    return new Output({
      model: response.modelVersion!,
      text: response.candidates?.[0]?.content?.parts?.[0]?.text!.trim()!,
      usage: {
        input_tokens: response.usageMetadata?.promptTokenCount!,
        output_tokens: response.usageMetadata?.candidatesTokenCount!,
      },
    });
  }
}

