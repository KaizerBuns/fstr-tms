import { OpenAI } from "langchain/llms/openai";

export default new OpenAI({
  openAIApiKey: process.env.OPENAI_API_KEY,
});
