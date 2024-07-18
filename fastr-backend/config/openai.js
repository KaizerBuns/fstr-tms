"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const openai_1 = require("openai");
console.log('openai:apikey: ', process.env.OPENAI_API_KEY);
const configuration = new openai_1.Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new openai_1.OpenAIApi(configuration);
exports.default = openai;
