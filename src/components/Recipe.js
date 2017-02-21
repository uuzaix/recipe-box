import React from 'react';

export const Recipe = ({recipe, onUpdateClick, onDeleteClick}) => (
  <li>
    <p>{recipe.name}</p>
    <p>Ingredients</p>
    <ul>
      {recipe.ingredients.map((ing, i) => <li key={'ing' + i}>{ing}</li>)}
    </ul>
    <button onClick={() => onUpdateClick(recipe.id, "defaultText", ["el1", "el2"])}>Update</button>
    <button onClick={() => onDeleteClick(recipe.id)}>Delete</button>
  </li>
)