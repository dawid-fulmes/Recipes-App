import React from "react";
import RecipesListItem from "./RecipesListItem/RecipesListItem";

const RecipesList = ({ recipes }) => {
  return (
    <ul className="grid-list">
      {recipes.map(recipe => (
        <RecipesListItem key={recipe._id} {...recipe} />
      ))}
    </ul>
  );
};

export default RecipesList;
