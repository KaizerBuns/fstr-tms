import {Configuration, OpenAIApi} from "openai";

console.log('openai:apikey: ', process.env.OPENAI_API_KEY);

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default openai;
