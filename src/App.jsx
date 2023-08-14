import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import showTime from './components/ShowTime';
import chat from './components/Chat';

import 'bootstrap/dist/css/bootstrap.min.css';
import './sig.css';

function App() {
  
  const[text,setText] = useState("");
  const[log,setLog] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent the default form submission behavior
    // process the form data, e.g. make an API call or update the state
    var question=text;
    var currentTime=showTime();
    var mytext = "<p>"+currentTime+"<strong> User: </strong>"+text+"</p>";
    var myLogDiv = document.getElementById("log");
    myLogDiv.innerHTML += mytext; 
    // contacts ChatGPT
    if (question != "") {
      var answer=chat(question);
      // var answer="answer to question " + question;
      var currentTime=showTime();
      var myAnswer = "<p>"+currentTime+"<strong> Ronette: </strong>"+answer+'</p>';
      var myLogDiv = document.getElementById("log");
      myLogDiv.innerHTML += myAnswer; 
      setLog(myLogDiv.innerHTML);
      question = "";
    } else {
      answer = "chatCompletion NOK";
      console.log(answer);
    }
    setLog(myLogDiv.innerHTML);
    setText("");    
  };
  // if (myLogDiv != null && question == "") {
  //   myLogDiv.innerHTML ="<h2>History</h2>"
  // }

  
  return (
    <>
      <Container className="d-flex justify-content-center align-items-center h-100">
      <Row>
        <Col>
          <h1>Ronette</h1>  
          <form onSubmit={handleSubmit}>
            <textarea value={text} onChange={(e) => setText(e.target.value)} />
            <button type="submit">Submit</button>
          </form>
          <br/>
          <div id="log">
          </div>
        </Col>
      </Row>
    </Container>
    </>
  )
}
export default App
