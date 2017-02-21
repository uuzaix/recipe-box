import { v4 } from 'node-uuid'

import {
  ADD_RECIPE,
  UPDATE_RECIPE,
  DELETE_RECIPE
} from './action_types'

export const addRecipe = (name, ingredients) => {
  return {
    type: ADD_RECIPE,
    id: v4(),
    name,
    ingredients
  }
}

export const updateRecipe = (id, name, ingredients) => {
  return {
    type: UPDATE_RECIPE,
    id,
    name,
    ingredients
  }
}

export const deleteRecipe = (id) => {
  return {
    type: DELETE_RECIPE,
    id
  }
}
