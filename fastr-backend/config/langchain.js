"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const openai_1 = require("langchain/llms/openai");
exports.default = new openai_1.OpenAI({
    openAIApiKey: process.env.OPENAI_API_KEY,
});
