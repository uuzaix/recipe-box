import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export const AddRecipe = React.createClass({
  getInitialState() {
    return { showModal: false };
  },

  close() {
    this.setState({ showModal: false });
  },

  open() {
    this.setState({ showModal: true });
  },

  render() {
    return (
      <div>
        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={this.open}
        >
          Add Recipe
        </Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Add a Recipe</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Recipe</h4>
            <h4>Ingredients</h4>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Cancel</Button>
            <Button onClick={this.close}>Add recipe</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
});