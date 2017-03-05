import React from 'react';
import { Button, ListGroup, ListGroupItem, Panel } from 'react-bootstrap';

import { EditRecipe } from '../containers/EditRecipe';

export const Recipe = ({ recipe, detailed, editing, onRecipeClick, onUpdateClick, onDeleteClick, onEditClick }) => {
  return (
    <ListGroupItem>
      <Panel onClick={() => onRecipeClick(recipe.id)} header={recipe.name} bsStyle="info">
        {detailed === recipe.id &&
          <div>
            <p>Ingredients</p>
            <ListGroup>
              {recipe.ingredients.map((ing, i) => <ListGroupItem key={'ing' + i}>{ing}</ListGroupItem>)}
            </ListGroup>
            <Button bsStyle='success' onClick={() => onEditClick(recipe.id)}>Edit</Button>
            <Button bsStyle='danger' onClick={() => onDeleteClick(recipe.id)}>Delete</Button>
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
      </Panel>
    </ListGroupItem>
  )
}
