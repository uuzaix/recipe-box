import React, { PropTypes } from 'react';

import { RecipeListContainer } from "./containers/RecipeListContainer.js";
import { AddRecipe } from "./containers/AddRecipe.js";

export const App = () => (
  <div>
    <RecipeListContainer />
    <AddRecipe />
  </div>
)