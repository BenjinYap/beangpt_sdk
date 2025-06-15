"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenAIClient = exports.OpenAIModel = exports.dwadwa = void 0;
exports.awdawd = awdawd;
const openai_1 = require("openai");
function awdawd() {
    console.log('wtf');
    return 5;
}
exports.dwadwa = 10;
var OpenAIModel;
(function (OpenAIModel) {
    OpenAIModel["GPT_4_1_NANO"] = "gpt-4.1-nano";
})(OpenAIModel || (exports.OpenAIModel = OpenAIModel = {}));
class OpenAIClient {
    constructor(auth) {
        console.info('hi');
        const options = Object.assign({}, auth);
        console.log(options);
        this.client = new openai_1.OpenAI(options);
    }
    listModels() {
        return [1, 2, 3];
    }
}
exports.OpenAIClient = OpenAIClient;
