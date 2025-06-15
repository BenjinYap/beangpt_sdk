import { OpenAIClient, OpenAIModel } from "../../../../src/model_clients/openai/OpenAIClient.js";

describe('OpenAIClient', function() {
  let client:OpenAIClient;

  beforeEach(() => {
    client = new OpenAIClient({
      apiKey: (global as any).__env.openai.api_key,
    });
  });
  // const client = new OpenAIClient(OpenAIModel.GPT_4_1_NANO);

  it('should be able to play a Song', async function() {
    const result = await client.sendPrompt(OpenAIModel.GPT_4_1_NANO, 'hi');
    console.log(result);
  });

  it('awd', () => {
  });
});