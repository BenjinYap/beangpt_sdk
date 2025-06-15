import { OpenAIClient, OpenAIModel } from "../../../../src/model_clients/openai/OpenAIClient.js";
import { Input } from "../../../../src/Input.js";

describe('OpenAIClient', function() {
  let client:OpenAIClient;

  beforeEach(() => {
    client = new OpenAIClient({
      apiKey: (global as any).__env.openai.api_key,
    });
  });

  it('should do everything', async function() {
    const result = await client.sendPrompt(OpenAIModel.GPT_4_1_NANO, new Input('hi'));
    expect(result.model).toContain(OpenAIModel.GPT_4_1_NANO);
  });
});