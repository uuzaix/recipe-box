import { combineReducers } from 'redux';

const initialRecipes = [
  { id: 1, name: "soup", ingredients: ['water', 'onion', 'potato'] },
  { id: 2, name: "hot chocolate", ingredients: ['milk', 'kakao'] }
];

const initialViews = { detailed: null, editing: null };


const recipes = (state = initialRecipes, action) => {
  switch (action.type) {
    case 'ADD_RECIPE':
      return [...state, { id: action.id, name: action.name, ingredients: action.ingredients }]
    case 'DELETE_RECIPE':
      return state.filter(rec => rec.id !== action.id)
    case 'UPDATE_RECIPE':
      return state.map(rec => rec.id === action.id ? { id: action.id, name: action.name, ingredients: action.ingredients } : rec)
    default:
      return state;
  }
}

const views = (state = initialViews, action) => {
  switch (action.type) {
    case 'CHANGE_DETAILED':
      if (state.detailed === action.id) {
        return Object.assign({}, state, { detailed: null });
      }
      return Object.assign({}, state, { detailed: action.id });
    case 'UPDATE_RECIPE':
      return Object.assign({}, state, { editing: null });
    case 'EDIT':
      return Object.assign({}, state, { editing: action.id });
    default:
      return state;
  }
}

export const recipeBox = combineReducers({ recipes, views })