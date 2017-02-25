import React from 'react';
import { EditRecipe } from './EditRecipe';

export const Recipe = ({recipe, detailed, editing, onRecipeClick, onUpdateClick, onDeleteClick, onEditClick}) => {
  return (
    <li>
      <p onClick={() => onRecipeClick(recipe.id)}>{recipe.name}</p>
      {detailed === recipe.id &&
        <div>
          <p>Ingredients</p>
          <ul>
            {recipe.ingredients.map((ing, i) => <li key={'ing' + i}>{ing}</li>)}
          </ul>
          <button onClick={() => onEditClick(recipe.id)}>Edit</button>
          <button onClick={() => onDeleteClick(recipe.id)}>Delete</button>
        </div>
      }
      {editing === recipe.id &&
        <EditRecipe
          id={recipe.id}
          name={recipe.name}
          ingredients={recipe.ingredients}
          onUpdateClick={onUpdateClick}
          onEditClick={onEditClick}
        />}
    </li>
  )
}
