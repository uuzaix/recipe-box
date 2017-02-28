import React from 'react';

import { Recipe } from "./Recipe.js"

export const RecipeList = ({recipes, detailed, editing, onAddClick, onUpdateClick, onEditClick, onDeleteClick, onRecipeClick}) => {
  return (
    <div className='recipe-list'>
      <ul>
        {recipes.map((recipe, i) =>
          <Recipe
            recipe={recipe}
            key={recipe.id}
            detailed={detailed}
            editing={editing}
            onUpdateClick={onUpdateClick}
            onEditClick={onEditClick}
            onDeleteClick={onDeleteClick}
            onRecipeClick={onRecipeClick} />)}
      </ul>
    </div>
  )
}
