import React from 'react';

export const Recipe = ({recipe}) => (
  <li>
    <p>{recipe.name}</p>
    <p>Ingredients</p>
    <ul>
      {recipe.ingredients.map((ing, i) => <li key={'ing' + i}>{ing}</li>)}
    </ul>
  </li>
)