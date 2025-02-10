import { Component } from "react";
import { Alert, Container, Form, Row } from "react-bootstrap";

import SingleBook from "./SingleBook";

class BookList extends Component {
  state = {
    searchQuery: "",
    selectedBookAsin: null,
  };

  setSelectedBook = (asin) => {
    this.setState({ selectedBookAsin: asin });
  };

  render() {
    return (
      <Container>
        <Form.Control
          className="mt-4"
          type="text"
          placeholder="Cerca un titolo"
          value={this.state.searchQuery}
          onChange={(e) => this.setState({ searchQuery: e.target.value })}
        />
        <Row xs={1} sm={2} md={4} xl={5} xxl={6} className="mt-4">
          {this.props.books
            .filter((book) => book.title.toLowerCase().includes(this.state.searchQuery.toLowerCase()))
            .map((book) => (
              <SingleBook key={book.asin} book={book} />
            ))}
        </Row>

        {this.props.books.length === 0 && (
          <Alert variant="warning" className="mt-4">
            Premi un bottone per visualizzare dei libri👆
          </Alert>
        )}
      </Container>
    );
  }
}

export default BookList;
