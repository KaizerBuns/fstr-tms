import axios from "axios";

export async function chat(messageList) {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await axios.post(
      "http://localhost:3000/ai/chat/queries",
      {
        query: messageList
      },
    );

    return response.data;
  } catch (error) {
    throw error;
  }
}
