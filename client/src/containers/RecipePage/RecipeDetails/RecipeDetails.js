import React from "react";

import Img from "../../../components/Img/Img";

const RecipeDetails = ({
  name,
  ingredients,
  steps,
  difficulty,
  time,
  servings,
  imgUrl,
}) => {
  return (
    <article className="recipe-page__wrapper">
      <header className="recipe-page__header">
        <h1>{name}</h1>
        <div className="recipe-page__picture-box">
          <Img
            className="recipe-page__img"
            src={imgUrl}
            alt={`Picture of ${name}`}
          />
        </div>
      </header>
      <section className="recipe-page__section">
        <p>Difficulty: {difficulty}/5</p>
        <p>Time complexity: {time} min</p>
        <p>For {servings} people</p>
      </section>
      <section className="recipe-page__section">
        <h2 className="recipe-page__section-title">Ingredients</h2>
        <ul>
          {ingredients.map(({ name, amount, unit, _id }) => (
            <li key={_id}>
              {name} {amount} {unit}
            </li>
          ))}
        </ul>
      </section>
      <section className="recipe-page__section">
        <h2 className="recipe-page__section-title">Steps</h2>
        <ol>
          {steps.map(step => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>
    </article>
  );
};

export default RecipeDetails;
