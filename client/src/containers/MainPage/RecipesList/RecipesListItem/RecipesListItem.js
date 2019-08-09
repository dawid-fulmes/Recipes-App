import React from "react";
import noImg from "../../../../img/noImg.png";

const RecipesListItem = ({ name, difficulty, time, servings }) => {
  return (
    <li className="recipe">
      <div className="recipe__picture-box">
        <img className="recipe__img" src={noImg} alt="Problem with img" />
        <div className="recipe__detail-box">
          <p>Difficulty: {difficulty}/5</p>
          <p>Time complexity: {time} min</p>
          <p>For {servings} people</p>
        </div>
      </div>
      <p className="recipe__title">{name}</p>
    </li>
  );
};

export default RecipesListItem;
