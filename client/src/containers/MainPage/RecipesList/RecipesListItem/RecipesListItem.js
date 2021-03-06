import React from "react";
import { Link } from "react-router-dom";

import Img from "../../../../components/Img/Img";

const RecipesListItem = ({ _id, name, difficulty, time, servings, imgUrl }) => {
  return (
    <Link to={`/${_id}`}>
      <li className="recipe">
        <div className="recipe__picture-box picture-box">
          <Img
            className="picture-box__img"
            src={imgUrl}
            alt={`Picture of ${name}`}
          />
          <div className="recipe__detail-box">
            <p>Difficulty: {difficulty}/5</p>
            <p>Time complexity: {time} min</p>
            <p>For {servings} people</p>
          </div>
        </div>
        <p className="recipe__title">{name}</p>
      </li>
    </Link>
  );
};

export default RecipesListItem;
