import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import showTime from './components/ShowTime'

import 'bootstrap/dist/css/bootstrap.min.css';
import './sig.css';

function App() {
  
  const[text,setText] = useState("");
  const[log,setLog] = useState("");

  let time = new Date();
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent the default form submission behavior
    // process the form data, e.g. make an API call or update the state
    var currentTime=showTime();
    var myQuestion = currentTime+"<strong> user: </strong>"+text+'<br/>';
    console.log('inside: '+log);
    var myLogDiv = document.getElementById("log");
    myLogDiv.innerHTML += myQuestion; 
    setLog(myLogDiv.innerHTML);
    setText("");
    console.log('inside: '+text);
  };

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
          <div id="log"></div>
        </Col>
      </Row>
    </Container>
    </>
  )
}
export default App
