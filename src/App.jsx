import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ChatMock from './components/ChatMock';

import 'bootstrap/dist/css/bootstrap.min.css';
import './sig.css';

function App() {
    return (
    <Container>
    <Row>
      <Col>
      <h1 className="text-center">Ronette</h1>
      <ChatMock question={"One "} />
      <ChatMock question={"Two "} />
      </Col>
    </Row>
  </Container>
  )
}
export default App
