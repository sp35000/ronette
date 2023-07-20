import { useEffect } from 'react'
import { Configuration, OpenAIApi } from "openai";

function Chat() {
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_Open_AI_Key,
  });
  const openai = new OpenAIApi(configuration);
  useEffect(() => {
    const chatCompletion = async () => {
      let response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: "Hello world" }],
      });
      console.log(response.data);
    }
    chatCompletion();
    }, []);  
    return (
    <>
    response
    </>
  )
}
export default Chat
