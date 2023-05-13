import { useState } from "react";
import { apiRating } from "../api/apiRating";

function RatingForm({ foodId }) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleRatingChange = (event) => {
    setRating(Number(event.target.value));
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await apiRating.createFoodRating(foodId, rating, comment);
      console.log(response.data); // Berhasil membuat food rating, lakukan penanganan sesuai kebutuhan aplikasi Anda
      // Reset form jika diperlukan
      setRating(0);
      setComment("");
    } catch (error) {
      console.log(error.message); // Tangani kesalahan jika terjadi
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="rating">Rating:</label>
        <select id="rating" value={rating} onChange={handleRatingChange}>
          <option value={0}>Pilih Rating</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <div>
        <label htmlFor="comment">Komentar:</label>
        <textarea id="comment" value={comment} onChange={handleCommentChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default RatingForm;
