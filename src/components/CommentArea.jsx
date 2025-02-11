import { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import { Alert, Image, Spinner } from "react-bootstrap";

class CommentArea extends Component {
  state = {
    reviews: [],
    fetched: false,
  };

  fetchComments = async () => {
    const resp = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin, {
      method: "GET",
      headers: {
        Authorization:
          "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2FhMGQwZGJiZTAwNDAwMTU5OWY0MzkiLCJpYXQiOjE3MzkxOTc3MDksImV4cCI6MTc0MDQwNzMwOX0.39x81mE2ZspUlGJJxZlu6FUf_FrXkJwRGXeWi7w58m8",
      },
    });

    if (resp.ok) {
      const reviews = await resp.json();
      console.log(reviews);

      //   this.setState({reviews: reviews})
      this.setState({ reviews, fetched: true });
    }
  };

  componentDidMount() {
    console.log("componentDidMount()");
    this.fetchComments();
  }

  componentDidUpdate(prevProps) {
    console.log(prevProps.asin);
    console.log(this.props.asin);
    if (prevProps.asin !== this.props.asin) {
      console.log("prop diversa, vai di fetch!");

      this.fetchComments();
    } else {
      console.log("prop uguale, STOP!");
    }
  }

  render() {
    console.log("RENDER COMMENT AREA", this.state.reviews);
    return (
      <div className="commentArea sticky-top">
        <Image fluid className="d-block w-75 mx-auto mb-4 img-fluid" src={this.props.imgSrc} />
        <h6>Recensioni per {this.props.title}</h6>
        {this.state.fetched ? (
          this.state.reviews.length > 0 ? (
            <CommentList reviews={this.state.reviews} fetchComments={this.fetchComments} />
          ) : (
            <Alert variant="info">Non ci sono ancora recensioni</Alert>
          )
        ) : (
          <Spinner animation="border" variant="info" />
        )}

        <AddComment asin={this.props.asin} fetchComments={this.fetchComments} />
      </div>
    );
  }
}

export default CommentArea;
