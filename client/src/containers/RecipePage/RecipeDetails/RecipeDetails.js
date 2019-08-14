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
        <h1 className="recipe-page__section-title">{name}</h1>
        <div className="recipe-page__picture-box picture-box">
          <Img
            className="picture-box__img"
            src={imgUrl}
            alt={`Picture of ${name}`}
          />
        </div>
        <p className="recipe-page__stat">Difficulty: {difficulty}/5</p>
        <p className="recipe-page__stat">Time complexity: {time} min</p>
        <p className="recipe-page__stat">For {servings} people</p>
      </header>
      <section className="recipe-page__section-wrapper">
        <section className="recipe-page__section">
          <h2 className="recipe-page__section-title">Ingredients:</h2>
          <ul>
            {ingredients.map(({ name, amount, unit, _id }) => (
              <li key={_id}>
                {amount} {unit} of {name}
              </li>
            ))}
          </ul>
        </section>
        <section className="recipe-page__section">
          <h2 className="recipe-page__section-title">Steps:</h2>
          <ol>
            {steps.map(step => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>
      </section>
    </article>
  );
};

export default RecipeDetails;
