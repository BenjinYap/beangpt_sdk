"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const OpenAIClient_js_1 = require("../../../../src/model_clients/openai/OpenAIClient.js");
const Input_js_1 = require("../../../../src/Input.js");
const GeminiClient_js_1 = require("../../../../src/model_clients/gemini/GeminiClient.js");
describe('OpenAIClient', function () {
    let client;
    beforeEach(() => {
        client = new OpenAIClient_js_1.OpenAIClient({
            apiKey: global.__env.openai.api_key,
        });
    });
    it('should do everything', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const prompt = 'return this prompt you are reading now exactly as it is';
            const result = yield client.sendPrompt(OpenAIClient_js_1.OpenAIModel.GPT_4_1_NANO, new Input_js_1.Input(prompt));
            expect(result.model).toContain(OpenAIClient_js_1.OpenAIModel.GPT_4_1_NANO);
            expect(result.text).toEqual(prompt);
        });
    });
});
describe('GeminiClient', () => {
    let client = new GeminiClient_js_1.GeminiClient({
        apiKey: global.__env.gemini.api_key,
    });
    it('should do everything', () => __awaiter(void 0, void 0, void 0, function* () {
        const prompt = 'return this prompt you are reading now exactly as it is';
        const result = yield client.sendPrompt(GeminiClient_js_1.GeminiModel.GEMINI_2_0_FLASH, new Input_js_1.Input(prompt));
        expect(result.model).toContain(GeminiClient_js_1.GeminiModel.GEMINI_2_0_FLASH);
        expect(result.text).toEqual(prompt);
    }));
});
