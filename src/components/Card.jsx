import { useEffect, useState } from "react";
import { apiFood } from "../api/apiFood";
import ModalCard from "./ModalCard";
import { Button, Modal } from "react-bootstrap";


function Card() {
  const [food, setFood] = useState([]);
  const [show, setShow] = useState(null);
  const handleClose = () => setShow(null);
  const handleShow = (foodId) => setShow(foodId);

  const dummyToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im11aGFtbWFkZ3VzdGlla2FwdXRyYUBnbWFpbC5jb20iLCJ1c2VySWQiOiI0NzlkMThlMS1jYmFhLTRkOGItYTEzYi1iYmJlYjU3ZjEyNzYiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2ODM0NTM4MDh9.cw3OpXk9Atz14uFxXpovXHeHCHTVjeYR3DNlgSVI1_0";

  async function getData() {
    try {
      const response = await apiFood.get("/foods", {
        Authorization: dummyToken,
      });
      setFood(response.data.data);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  const handleLike = async (foodId) => {
    try {
      // Kirim request ke API untuk melakukan like pada makanan dengan foodId tertentu
      await apiFood.post(`/foods/${foodId}/like`, {
        Authorization: dummyToken,
      });

      // Perbarui data makanan dengan menambah jumlah like pada makanan dengan foodId tertentu
      setFood((prevFood) =>
        prevFood.map((f) =>
          f.id === foodId ? { ...f, likes: f.likes + 1 } : f
        )
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleUnlike = async (foodId) => {
    try {
      // Kirim request ke API untuk melakukan unlike pada makanan dengan foodId tertentu
      await apiFood.post(`/foods/${foodId}/unlike`, {
        Authorization: dummyToken,
      });

      // Perbarui data makanan dengan mengurangi jumlah like pada makanan dengan foodId tertentu
      setFood((prevFood) =>
        prevFood.map((f) =>
          f.id === foodId ? { ...f, likes: f.likes - 1 } : f
        )
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-4 g-12">
        {food.map((eachFood) => (
          <div key={eachFood.id} className="col>

          col">
            <div
              className="card h-100"
              onClick={() => handleShow(eachFood.id)}
            >
              <img
                src={eachFood.imageUrl}
                className="card-img-top"
                alt={`${eachFood.name} poster`}
              />
              <div className="card-body">
                <h5 className="card-title">{eachFood.name}</h5>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="mb-0">{eachFood.likes} Likes</p>
                  <Button
                    variant="primary"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleLike(eachFood.id);
                    }}
                  >
                    Like
                  </Button>
                </div>
              </div>
            </div>
            <Modal
              show={show === eachFood.id}
              onHide={handleClose}
              size="xl"
              className="modal_test"
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title id={eachFood.id}>{eachFood.name}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <img
                  src={eachFood.imageUrl}
                  alt={`${eachFood.name} poster`}
                />
                <p>{eachFood.description}</p>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button
                  variant="primary"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleLike(eachFood.id);
                  }}
                >
                  Like
                </Button>
                <Button
                  variant="danger"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleUnlike(eachFood.id);
                  }}
                >
                  Unlike
                </Button>
              </Modal.Footer>
            </Modal>{" "}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;

