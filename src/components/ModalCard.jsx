import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function ModalCard({ food, test }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (id) => setShow(id);
    if (test === "true" ) setShow(true)
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{food.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={food.imageUrl} alt={`${food.name} poster`} />
          <p>{food.description}</p>
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
