import { connect } from 'react-redux';

import { RecipeList } from "../components/RecipeList.js";
import { addRecipe, updateRecipe, deleteRecipe, changeDetailed } from '../actions/actions'

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes,
    detailed: state.detailedView
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onAddClick: (name, ingredients) => dispatch(addRecipe(name, ingredients)),
    onUpdateClick: (id, name, ingredients) => dispatch(updateRecipe(id, name, ingredients)),
    onDeleteClick: (id) => dispatch(deleteRecipe(id)),
    onRecipeClick: (id) => dispatch(changeDetailed(id))
  }
}

export const RecipeListContainer = connect(mapStateToProps, mapDispatchToProps)(RecipeList)