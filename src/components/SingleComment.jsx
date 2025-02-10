import { Component } from "react";
import { Button, ListGroupItem } from "react-bootstrap";

class SingleComment extends Component {
  handleDelete = (id) => {
    fetch("https://striveschool-api.herokuapp.com/api/comments/" + id, {
      method: "DELETE",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2E0ZGUxYmNhMDcwNDAwMTU4YmY5NzkiLCJpYXQiOjE3Mzg4NTgwMTEsImV4cCI6MTc0MDA2NzYxMX0.KY1i3aAaFytdpVHLectYt_unBT7ZsLQJtlf6z-iXCXg"
      }
    });
  };

  render() {
    return (
      <ListGroupItem className="d-flex justify-content-between">
        <span>{this.props.review.comment}</span> <span>{this.props.review.rate}</span>
        <Button
          variant="danger"
          onClick={() => {
            this.handleDelete(this.props.review._id);
          }}
        >
          🗑️
        </Button>
      </ListGroupItem>
    );
  }
}

export default SingleComment;
