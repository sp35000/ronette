import { useState } from 'react';
import showTime from './ShowTime';

function ChatMock({text}) {

  const[log,setLog] = useState("");
  
  var currentTime=showTime();
  setLog(currentTime+"<strong> user: </strong>"+text);
  var myQuestion = log+"<br/>";
  var myLogDiv = document.getElementById("log");
  myLogDiv.innerHTML += myQuestion; 
  
    return (
      <>
      {/* <div id="log" className='bg-white'>  */}
      <div id="log"></div>          
      </>    
  )
}
export default ChatMock
