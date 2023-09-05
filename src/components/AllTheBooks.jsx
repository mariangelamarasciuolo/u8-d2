import { Component } from "react";
import { Row, Col, Card } from "react-bootstrap";
import library from "../data/books/scifi.json";
class AllTheBooks extends Component {
  state = {
    selectedLibro: null,
  };
  render() {
    console.log("RENDER avvenuto", this.state);
    return (
      <Row>
        {library.map((book, index) => (
          <Col md={4} className="mb-3" key={index}>
            <Card>
              <Card.Img variant="top" src={book.img} alt={book.title} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>{book.price}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    );
  }
}
export default AllTheBooks;
