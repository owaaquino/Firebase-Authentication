import React from "react";
import Card from "../RecipeCard";

function Recipes(props) {
  return (
    <div className="recipe-container">
      <ul
        style={{
          display: `flex`,
          justifyContent: `flex-start`,
          flexWrap: `wrap`
        }}
      >
        {Object.keys(props.recipes).map(recipe => (
          <Card
            user={props.user}
            recipe={props.recipes[recipe]}
            key={recipe}
            index={recipe}
            deleteRecipe={props.deleteRecipe}
            // updateJob={props.updateJob}
          />
        ))}
      </ul>
    </div>
  );
}

export default Recipes;
