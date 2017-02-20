import React from 'react';

import { RecipeList } from "./Components/RecipeList.js";

export const App = ({recipes}) => (
  <div>
    <RecipeList recipes={recipes} />
  </div>
)