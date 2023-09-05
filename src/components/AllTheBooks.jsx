import { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
class AllTheBooks extends Component {
  state = {
    selectedLibro: null,
  };
  render() {
    return (
      <Container>
        <Row>
          <Col>1 of 3</Col>
          <Col>2 of 3</Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>
    );
  }
}
export default AllTheBooks;
