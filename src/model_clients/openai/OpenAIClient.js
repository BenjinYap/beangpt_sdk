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
exports.OpenAIClient = exports.OpenAIModel = void 0;
const openai_1 = require("openai");
const Output_js_1 = require("../../Output.js");
var OpenAIModel;
(function (OpenAIModel) {
    OpenAIModel["GPT_4_1_NANO"] = "gpt-4.1-nano";
})(OpenAIModel || (exports.OpenAIModel = OpenAIModel = {}));
class OpenAIClient {
    constructor(auth) {
        const options = Object.assign({}, auth);
        this.client = new openai_1.OpenAI(options);
    }
    sendPrompt(model, input) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.client.responses.create({
                model: model,
                input: input.prompt,
            });
            return new Output_js_1.Output({
                model: response.model,
                text: response.output_text,
                usage: {
                    input_tokens: response.usage.input_tokens,
                    output_tokens: response.usage.output_tokens,
                },
            });
        });
    }
}
exports.OpenAIClient = OpenAIClient;
