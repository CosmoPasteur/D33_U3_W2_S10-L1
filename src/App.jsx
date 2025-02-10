import { Component } from "react";
import "./App.css";
import BookList from "./components/BookList";
import Footer from "./components/Footer";
import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";

import fantasy from "./data/books/fantasy.json";
import history from "./data/books/history.json";
import horror from "./data/books/horror.json";
import romance from "./data/books/romance.json";
import scifi from "./data/books/scifi.json";
import { Button } from "react-bootstrap";

class App extends Component {
  state = {
    books: fantasy,
  };

  render() {
    console.log("render App");
    return (
      <>
        <MyNav />
        <Welcome />
        <div className="d-flex justify-content-center gap-1">
          <Button variant="primary" onClick={() => this.setState({ books: fantasy })}>
            Fantasy
          </Button>
          <Button variant="warning" onClick={() => this.setState({ books: history })}>
            History
          </Button>
          <Button variant="danger" onClick={() => this.setState({ books: horror })}>
            Horror
          </Button>
          <Button variant="success" onClick={() => this.setState({ books: romance })}>
            Romance
          </Button>
          <Button variant="info" onClick={() => this.setState({ books: scifi })}>
            Scifi
          </Button>
        </div>
        <BookList books={this.state.books} />
        <Footer />
      </>
    );
  }
}

export default App;
