import React from 'react';
import { connect } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';

import { formatInput } from '../util/formatInput';


const EditModal = React.createClass({

  getInitialState() {
    return { name: this.props.name, ingredients: this.props.ingredients.join(", ") };
  },

  handleNameChange(event) {
    this.setState({ name: event.target.value })
  },

  handleIngChange(event) {
    this.setState({ ingredients: event.target.value })
  },

  render() {
    return (
      <div>
        <Modal show={true} onHide={() => this.props.onEditClick(null)}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Recipe</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <label>
                Recipe name:
                <input type="text"
                  value={this.state.name}
                  onChange={this.handleNameChange} />
              </label><br></br>
              <label>
                Ingredients:
                <input type="text"
                  value={this.state.ingredients}
                  onChange={this.handleIngChange} />
              </label>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => this.props.onEditClick(null)}>Cancel</Button>
            <Button onClick={() => this.props.onUpdateClick(this.props.id, this.state.name, formatInput(this.state.ingredients))}>Save recipe</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
});

export const EditRecipe = connect()(EditModal)