import { useState, useEffect } from "react";
import { apiRating } from "../api/apiRating";

function LikeButton({ foodId }) {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    // Memeriksa apakah makanan sudah dilike sebelumnya
    const checkLikedStatus = async () => {
      try {
        const response = await apiRating.checkFoodLikedStatus(foodId);
        setLiked(response.data.liked);
      } catch (error) {
        console.log(error.message);
      }
    };

    checkLikedStatus();
  }, [foodId]);

  const handleLike = async () => {
    try {
      await apiRating.likeFood(foodId);
      setLiked(true);
      console.log("Berhasil melakukan like");
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleUnlike = async () => {
    try {
      await apiRating.unlikeFood(foodId);
      setLiked(false);
      console.log("Berhasil melakukan unlike");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      {liked ? (
        <button onClick={handleUnlike}>Unlike</button>
      ) : (
        <button onClick={handleLike}>Like</button>
      )}
    </div>
  );
}

export default LikeButton;
