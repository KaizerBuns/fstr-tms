import nlp from 'compromise'
import { ChatOpenAI } from "langchain/chat_models/openai";
import { ConversationalRetrievalQAChain } from "langchain/chains";
import { HNSWLib } from "langchain/vectorstores/hnswlib";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { BufferMemory } from "langchain/memory";
import * as fs from "fs";

class DriverService {
  translateToMongoQuery(instruction: any) {
    let query: any = {};
    let parsedInstruction;

    // Check if instruction is JSON
    try {
      parsedInstruction = JSON.parse(instruction);
    } catch(e) {
      parsedInstruction = null;
    }

    // If instruction is JSON, process it directly
    if(parsedInstruction) {
      for (let [key, value] of Object.entries(parsedInstruction)) {
        // Parse the value to its correct type (number, boolean, etc.)
        value = isNaN(Number(value)) ? value : Number(value);

        // If value is a string, remove any quotes around it
        if (typeof value === 'string') {
          value = value.replace(/^"|"$/g, '');
        }
        query[key] = value;
      }
    } else {
      // If instruction is not JSON, use NLP to parse it
      const doc = nlp(instruction);
      const nouns = doc.nouns().out('array');
      const values = doc.terms().out('array');

      // Assume that the first noun is the field name and the first value is the value
      let field = nouns[0];
      let value = values[0];

      // Parse the value to its correct type (number, boolean, etc.)
      value = isNaN(Number(value)) ? value : Number(value);

      // Construct the MongoDB query
      query[field] = value;
    }

    return query;
  }
  translateToHumanReadable(results: any) {
    try {

      return `Result: ${results.length}`
    } catch (e) {
      console.error(e);
    }

  }

  // chatQA(docs) {
  //   // let data: JsonObject;
  //   //
  //   //
  //   // /* Initialize the LLM to use to answer the question */
  //   // /* Load in the file we want to do question answering over */
  //   // const text = fs.readFileSync("state_of_the_union.txt", "utf8");
  //   // /* Split the text into chunks */
  //   // const textSplitter = new RecursiveCharacterTextSplitter({ chunkSize: 1000 });
  //   // const docs = await textSplitter.createDocuments([text]);
  //   // /* Create the vectorstore */
  //   const vectorStore = await HNSWLib.fromDocuments(docs, new OpenAIEmbeddings());
  //   /* Create the chain */
  //   const chain = ConversationalRetrievalQAChain.fromLLM(
  //     model,
  //     vectorStore.asRetriever(),
  //     {
  //       memory: new BufferMemory({
  //         memoryKey: "chat_history", // Must be set to "chat_history"
  //       }),
  //     }
  //   );
  //   /* Ask it a question */
  //   const question = "What did the president say about Justice Breyer?";
  //   const res = await chain.call({ question });
  //   /* Ask it a follow up question */
  //   const followUpRes = await chain.call({
  //     question: "Was that nice?",
  //   });
  // }
}

export default new DriverService();
