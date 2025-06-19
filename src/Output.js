"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Output = void 0;
class Output {
    constructor(body) {
        this.model = body.model;
        this.text = body.text;
        this.usage = body.usage;
    }
}
exports.Output = Output;
