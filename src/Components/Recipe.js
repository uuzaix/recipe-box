import React from 'react';

export const Recipe = ({recipe, detailed, onRecipeClick, onUpdateClick, onDeleteClick}) => (
  <li>
    <p onClick={() => onRecipeClick(recipe.id)}>{recipe.name}</p>
    {detailed === recipe.id &&
      <div>
        <p>Ingredients</p>
        <ul>
          {recipe.ingredients.map((ing, i) => <li key={'ing' + i}>{ing}</li>)}
        </ul>
        <button onClick={() => onUpdateClick(recipe.id, "defaultText", ["el1", "el2"])}>Update</button>
        <button onClick={() => onDeleteClick(recipe.id)}>Delete</button>
      </div>
    }
  </li>
)