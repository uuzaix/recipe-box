import React from 'react';

import { Recipe } from "./Recipe.js"

export const RecipeList = ({recipes, onAddClick, onUpdateClick, onDeleteClick}) => {
  return (
    <div>
      <ul>
        {recipes.map((recipe, i) => <Recipe recipe={recipe} key={recipe.id} onUpdateClick={onUpdateClick} onDeleteClick={onDeleteClick} />)}
      </ul>
      {/*<button onClick={onAddClick}>Add</button>*/}
    </div>
  )
}
