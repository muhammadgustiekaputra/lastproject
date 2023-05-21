import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function ModalCard({ food, test }) {
  const [show, setShow] = useState(false);
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  if (test === "true") {
    handleShow();
  }

  const handleLike = () => {
    const URL_API = "https://api-bootcamp.do.dibimbing.id/api/v1/like"; // Ganti dengan URL API yang sesuai
    fetch(URL_API, {
      method: "POST",
      body: JSON.stringify({ foodId: food.id }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setLiked(true);
        setLikesCount(data.likesCount);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleUnlike = () => {
    const URL_API = "https://api-bootcamp.do.dibimbing.id/api/v1/unlike"; // Ganti dengan URL API yang sesuai
    fetch(URL_API, {
      method: "DELETE",
      body: JSON.stringify({ foodId: food.id }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setLiked(false);
        setLikesCount(data.likesCount);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{food.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={food.imageUrl} alt={`${food.name} poster`} />
          <p>{food.description}</p>
          <p>Likes: {likesCount}</p>
          {liked ? (
            <Button variant="secondary" onClick={handleUnlike}>
              Unlike
            </Button>
          ) : (
            <Button variant="danger" onClick={handleLike}>
              Like
            </Button>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalCard;
