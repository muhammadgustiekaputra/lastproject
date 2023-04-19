import { useEffect, useState } from "react";
import { apiTmdb } from "../api/apiTmdb";
import ModalCard from "./ModalCard";

function Card() {
  const [filmPopular, setFilmPopular] = useState([]);

  async function getData() {
    try {
      const response = await apiTmdb.get("movie/popular");
      const movieData = await Promise.all(response.data.results);
      setFilmPopular(movieData);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {filmPopular.map((movie, index) => (
          <div key={index} className="col">
            <div className="card h-100" data-bs-toggle="modal" data-bs-target={`#modal${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                className="card-img-top"
                alt={`${movie.original_title} poster`}
              />
              <div className="card-body">
                <h5 className="card-title">{movie.original_title}</h5>
              </div>
            </div>
            <ModalCard movie={movie} i={index} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
