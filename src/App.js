import React, { PropTypes } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import { RecipeListContainer } from "./containers/RecipeListContainer.js";
import { AddRecipe } from "./containers/AddRecipe.js";

export const App = () => (
  <Grid>
    <Row>
      <Col xs={10} xsOffset={1} md={8} mdOffset={2}>
        <RecipeListContainer />
        <AddRecipe />
      </Col>
    </Row>
  </Grid >
)