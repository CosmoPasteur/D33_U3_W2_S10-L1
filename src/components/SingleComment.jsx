import { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import Loading from "./Loading";
import Error from "./Error";

class CommentArea extends Component {
  state = {
    comments: [],
    isLoading: false,
    isError: false,
  };

  fetchComments = async () => {
    if (!this.props.asin) return;

    this.setState({ isLoading: true, isError: false });

    try {
      let response = await fetch(`https:striveschool-api.herokuapp.com/api/comments/${this.props.asin}`, {
        headers: {
          Authorization:
            "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2FhMGQwZGJiZTAwNDAwMTU5OWY0MzkiLCJpYXQiOjE3MzkxOTc3MDksImV4cCI6MTc0MDQwNzMwOX0.39x81mE2ZspUlGJJxZlu6FUf_FrXkJwRGXeWi7w58m8",
        },
      });

      if (response.ok) {
        let comments = await response.json();
        this.setState({ comments, isLoading: false, isError: false });
      } else {
        throw new Error("Errore nel recupero dei commenti");
      }
    } catch (error) {
      console.log(error);
      this.setState({ isLoading: false, isError: true });
    }
  };

  componentDidUpdate(prevProps) {
    if (prevProps.asin !== this.props.asin && this.props.asin) {
      this.fetchComments();
    }
  }

  render() {
    return (
      <div className="text-center">
        {!this.props.asin && <p>Seleziona un libro per vedere i commenti</p>}
        {this.state.isLoading && <Loading />}
        {this.state.isError && <Error />}
        {this.props.asin && <AddComment asin={this.props.asin} />}
        {this.props.asin && <CommentList commentsToShow={this.state.comments} />}
      </div>
    );
  }
}

export default CommentArea;
