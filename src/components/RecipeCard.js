import React from "react";

function RecipeCard(props) {
  const { recipeName, description } = props.recipe;
  return (
    <div className="recipe-card">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQEVbyOIDSD69IlDNIW9Fa3FeEGaRbxHOBU6NzycUakYK57LklP"
        alt={recipeName}
      />
      <h2>{recipeName}</h2>
      <p>{description}</p>
      {props.user ? (
        <div className="card-button">
          <button className="edit-btn">Edit</button>
          <button
            className="delete-btn"
            onClick={() => props.deleteRecipe(props.index)}
          >
            Delete
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default RecipeCard;
