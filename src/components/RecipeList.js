import React from 'react';

import { Recipe } from "./Recipe.js"

export const RecipeList = ({recipes, detailed, onAddClick, onUpdateClick, onDeleteClick, onRecipeClick}) => {
  return (
    <div>
      <ul>
        {recipes.map((recipe, i) =>
          <Recipe
            recipe={recipe}
            key={recipe.id}
            detailed={detailed}
            onUpdateClick={onUpdateClick}
            onDeleteClick={onDeleteClick}
            onRecipeClick={onRecipeClick} />)}
      </ul>
      {/*<button onClick={onAddClick}>Add</button>*/}
    </div>
  )
}
