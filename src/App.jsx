import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ChatMock from './components/ChatMock';

import 'bootstrap/dist/css/bootstrap.min.css';
import './sig.css';

function App() {
  const[text,setText] = useState("");
  const[log,setLog] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent the default form submission behavior
    // process the form data, e.g. make an API call or update the state
    setLog(log + " " +text);
    setText("")
  };

  return (
      <Container className="d-flex justify-content-center align-items-center h-100">
      <Row>
        <Col>
          <h1>Ronette</h1>  
          <form onSubmit={handleSubmit}>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <button type="submit">Submit</button>
          </form>
          <br/>
          <ChatMock text={log}/>
        </Col>
      </Row>
    </Container>
  )
}
export default App
