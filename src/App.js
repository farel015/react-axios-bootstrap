import React from "react";
import { Container, Card } from "react-bootstrap";

function App() {
  return (
    <div>
      <Container>
        <Card className="mt-5">
          <Card.Header>
            <Card.Title>Bismillah Lancar</Card.Title>
          </Card.Header>
          <Card.Body>
            <li>React</li>
            <li>Axios</li>
            <li>React-Bootstrap</li>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default App;
