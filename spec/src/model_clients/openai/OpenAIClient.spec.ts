import { OpenAIClient, OpenAIModel } from "../../../../src/model_clients/openai/OpenAIClient.js";
import { Input } from "../../../../src/Input.js";
import { GeminiClient, GeminiModel } from "../../../../src/model_clients/gemini/GeminiClient.js";

describe('OpenAIClient', function() {
  let client:OpenAIClient;

  beforeEach(() => {
    client = new OpenAIClient({
      apiKey: (global as any).__env.openai.api_key,
    });
  });

  it('should do everything', async function() {
    const prompt = 'return this prompt you are reading now exactly as it is';
    const result = await client.sendPrompt(OpenAIModel.GPT_4_1_NANO, new Input(prompt));
    expect(result.model).toContain(OpenAIModel.GPT_4_1_NANO);
    expect(result.text).toEqual(prompt);
  });
});

describe('GeminiClient', () => {
  let client:GeminiClient = new GeminiClient({
    apiKey: (global as any).__env.gemini.api_key,
  });
  it('should do everything', async () => {
    const prompt = 'return this prompt you are reading now exactly as it is';
    const result = await client.sendPrompt(GeminiModel.GEMINI_2_0_FLASH, new Input(prompt));
    expect(result.model).toContain(GeminiModel.GEMINI_2_0_FLASH);
    expect(result.text).toEqual(prompt);
  });
});