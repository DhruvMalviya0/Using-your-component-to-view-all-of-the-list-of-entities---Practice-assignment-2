import React from "react";
import LikeButton from "./likebutton";

const PostCard = ({ profileImage, username, content, isLiked }) => {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg flex flex-col gap-2 border">
      <div className="flex items-center gap-3">
        <img
          src={profileImage}
          alt={username}
          style={{ width: '300px', height: '300px', objectFit: 'cover' }}
          className="rounded-lg border"
        />
        <h3 className="text-lg font-semibold">{username}</h3>
      </div>
      <p className="text-gray-600">{content}</p>
      <div className="mt-2">
        <LikeButton isLiked={isLiked} />
      </div>
    </div>
  );
};

export default PostCard;
