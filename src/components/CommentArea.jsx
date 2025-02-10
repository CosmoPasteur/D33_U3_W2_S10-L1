import { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

class CommentArea extends Component {
  state = {
    reviews: []
  };

  fetchComments = async () => {
    const resp = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin, {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2E0ZGUxYmNhMDcwNDAwMTU4YmY5NzkiLCJpYXQiOjE3Mzg4NTgwMTEsImV4cCI6MTc0MDA2NzYxMX0.KY1i3aAaFytdpVHLectYt_unBT7ZsLQJtlf6z-iXCXg"
      }
    });

    if (resp.ok) {
      const reviews = await resp.json();
      console.log(reviews);

      //   this.setState({reviews: reviews})
      this.setState({ reviews });
    }
  };

  componentDidMount() {
    console.log("componentDidMount()");
    this.fetchComments();
  }

  render() {
    console.log("RENDER COMMENT AREA", this.state.reviews);
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
