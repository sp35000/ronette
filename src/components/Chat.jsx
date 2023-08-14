import { Configuration, OpenAIApi } from "openai";

import showTime from './ShowTime';

function chat(question) {

  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_Open_AI_Key,
  });
  const openai = new OpenAIApi(configuration);
  console.log("chat - question: "+question);

  function updateLog(answer) {
      var currentTime=showTime();
      var myAnswer = "<p>"+currentTime+"<strong> Ronette: </strong>"+answer+'</p>';
      var myLogDiv = document.getElementById("log");
      myLogDiv.innerHTML += myAnswer; 
  }

  let myPromise = new Promise(function(myResolve, myReject) {
    let x = 0;
    if (x == 0) {
      myResolve(chatCompletion())
    } else {
      myReject("Error contacting ChatGPT");
    }
  });

  async function chatCompletion() {
    let response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: question }],
    });    
    return(response.data.choices[0].message.content);
  }

  myPromise.then(
    function(value) {updateLog(value);},
    function(error) {updateLog(error);}
  );

}
export default chat;
