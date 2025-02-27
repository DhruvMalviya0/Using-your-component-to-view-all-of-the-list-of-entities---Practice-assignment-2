import React, { useState } from "react";

const LikeButton = ({ isLiked: initialLiked }) => {
  const [isLiked, setIsLiked] = useState(initialLiked);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <button
      onClick={toggleLike}
      className={`px-3 py-1 rounded-md text-white font-bold transition duration-300 ${
        isLiked ? "bg-red-500" : "bg-gray-400"
      }`}
    >
      {isLiked ? "❤️ Liked" : "🤍 Like"}
    </button>
  );
};

export default LikeButton;
