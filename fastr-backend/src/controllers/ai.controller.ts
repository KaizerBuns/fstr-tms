import {Request, Response} from 'express';
import {MongoClient} from "mongodb";
import axios from 'axios';

async function getEmbedding(query: string) {
  // Define the OpenAI API url and key.
  const url = 'https://api.openai.com/v1/embeddings';
  const openai_key = process.env.OPENAI_API_KEY ?? ''; // Replace with your OpenAI key.

  // Call OpenAI API to get the embeddings.
  let response = await axios.post(url, {
    input: query,
    model: "text-embedding-ada-002"
  }, {
    headers: {
      'Authorization': `Bearer ${openai_key}`,
      'Content-Type': 'application/json'
    }
  });

  if(response.status === 200) {
    return response.data.data[0].embedding;
  } else {
    throw new Error(`Failed to get embedding. Status code: ${response.status}`);
  }
}

async function findSimilarDocuments(embedding: any) {
  const url = process.env.MONGO_URI ?? '' // Replace with your MongoDB url.
  const client = new MongoClient(url);

  try {
    await client.connect();

    const db = client.db('test'); // Replace with your database name.
    const collection = db.collection('embedded_trips'); // Replace with your collection name.

    // Query for similar documents.
    return await collection.aggregate([
      {
        "$search": {
          "index": "default",
          "knnBeta": {
            "vector": embedding,
            "path": "embeddings",
            "k": 5
          }
        }
      }
    ]).toArray();
  } catch(e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

class AiController {
  async vectorSearch(req: Request, res: Response) {
    try {
      const query = req.body.query // Replace with your query.

      try {
        const embedding = await getEmbedding(query);
        const documents = await findSimilarDocuments(embedding);

        if (documents && documents.length > 0) {
          for (const doc of documents) {
            for (const key of Object.keys(doc)) {
              if (typeof doc[key] === 'string' || typeof doc[key] === 'number') {
              }
            }
          }
        }
      } catch (err) {
        console.error(err);
      }
    } catch (e: any) {
      console.error(e);
    }
  }
}

export default new AiController();
