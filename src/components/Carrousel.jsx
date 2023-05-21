import { apiFood } from "../api/apiFood";
import { useState, useEffect } from "react";

function Carrousel() {
  const [filmPopular, setFilmPopular] = useState([]);

  useEffect(() => {
    async function getMovies() {
      try {
        const response = await apiFood.get("/movie/popular");
        setFilmPopular(response.data.results);
      } catch (error) {
        console.log(error.message);
      }
    }

    getMovies();
  }, []);

  return (
    <>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="10000"
      >
        <div className="carousel-inner">
          {filmPopular.slice(3, 8).map((movie, i) => (
            <div
              key={i}
              className={`carousel-item ${i === 0 ? "active" : ""}`}
            >
              <img
                src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
                className="d-block w-100"
                alt="banner1"
              />
            </div>
          ))}

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <h1>
          {" "}
          <span className="badge border-light-subtle"></span>
        </h1>
      </div>
    </>
  );
}

export default Carrousel;
