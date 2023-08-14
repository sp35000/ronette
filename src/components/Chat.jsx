import { Configuration, OpenAIApi } from "openai";

import showTime from './ShowTime';

function chat(question) {

  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_Open_AI_Key,
  });
  const openai = new OpenAIApi(configuration);
  console.log("chat - question: "+question);

  // 3. UseEffect 
  const chatCompletion = async () => {
    let response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: question }],
    });
    var answer = "One moment..."
    answer = response.data.choices[0].message.content;
    var currentTime=showTime();
    var myAnswer = "<p>"+currentTime+"<strong> Ronette: </strong>"+answer+'</p>';
    var myLogDiv = document.getElementById("log");
    myLogDiv.innerHTML += myAnswer; 
  }
    // answer = "chatCompletion OK";
    chatCompletion();
}
export default chat;
