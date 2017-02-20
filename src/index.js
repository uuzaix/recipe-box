import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';


const defRecipes = [
  { name: "soup", ingredients: ['water', 'onion', 'potato'] },
  { name: "hot chocolate", ingredients: ['milk', 'kakao'] }
]


ReactDOM.render(
  <App recipes={defRecipes} />,
  document.getElementById('root')
)

