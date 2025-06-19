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
exports.GeminiClient = exports.GeminiModel = void 0;
const Output_js_1 = require("../../Output.js");
const genai_1 = require("@google/genai");
var GeminiModel;
(function (GeminiModel) {
    GeminiModel["GEMINI_2_0_FLASH"] = "gemini-2.0-flash";
})(GeminiModel || (exports.GeminiModel = GeminiModel = {}));
class GeminiClient {
    constructor(auth) {
        const options = Object.assign({}, auth);
        this.client = new genai_1.GoogleGenAI(options);
    }
    sendPrompt(model, input) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d, _e, _f, _g;
            const response = yield this.client.models.generateContent({
                model: model,
                contents: input.prompt,
            });
            // console.log(response.candidates);
            return new Output_js_1.Output({
                model: response.modelVersion,
                text: (_e = (_d = (_c = (_b = (_a = response.candidates) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.content) === null || _c === void 0 ? void 0 : _c.parts) === null || _d === void 0 ? void 0 : _d[0]) === null || _e === void 0 ? void 0 : _e.text.trim(),
                usage: {
                    input_tokens: (_f = response.usageMetadata) === null || _f === void 0 ? void 0 : _f.promptTokenCount,
                    output_tokens: (_g = response.usageMetadata) === null || _g === void 0 ? void 0 : _g.candidatesTokenCount,
                },
            });
        });
    }
}
exports.GeminiClient = GeminiClient;
