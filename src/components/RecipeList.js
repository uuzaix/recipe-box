import React from 'react';
import { Well, ListGroup } from 'react-bootstrap';

import { Recipe } from "./Recipe.js"

export const RecipeList = ({ recipes, detailed, editing, onAddClick, onUpdateClick, onEditClick, onDeleteClick, onRecipeClick }) => {
  return (

    <Well>
      <ListGroup>
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
      </ListGroup>
    </Well>
  )
}
