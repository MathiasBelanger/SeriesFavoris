"use client";
import { useState } from "react";
import { addLikeAction } from "../_actions/_favorisActions";

const BoutonLike = ({ userId, nbLike }) => {
  // const [nbLike, setNbLike] = useState(0);
  const clickHandler = () => {
    addLikeAction(userId);
  };

  // const clickHandler = () => {
  //   setNbLike(nbLike + 1);
  // };

  return (
    <button
      className="user-like-button"
      onClick={clickHandler}
      type="button"
      title="Like"
    >
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
        <path
          d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span>Like: {!nbLike ? 0 : nbLike}</span>
    </button>
  );
};

export default BoutonLike;
