import React from 'react';
import { EditRecipe } from '../containers/EditRecipe';

export const Recipe = ({recipe, detailed, editing, onRecipeClick, onUpdateClick, onDeleteClick, onEditClick}) => {
  return (
    <li className='recipe'>
      <p onClick={() => onRecipeClick(recipe.id)} className='recipe-title'>{recipe.name}</p>
      {detailed === recipe.id &&
        <div>
          <p>Ingredients</p>
          <ul className='ingredients'>
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
