import React from 'react';

import { Recipe } from "./Recipe.js"

export const RecipeList = ({recipes}) => {
  return (
    <div>
      <ul>
        {recipes.map((recipe, i) => <Recipe recipe={recipe} key={'r' + i} />)}
      </ul>
    </div>
  )
}
