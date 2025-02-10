import { Alert, Container } from "react-bootstrap";

const Welcome = () => (
  <Container className="my-3">
    <Alert variant="info">Benvenuti nel nostro Epic-Negozio</Alert>
    <p>Il miglior negozio per libri, alla faccia di amazon!</p>
  </Container>
);
export default Welcome;
