import React from 'react';
import { connect } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';

// import { FormAdd } from '../components/FormAdd'
import { addRecipe } from '../actions/actions'

const AddModal = React.createClass({

  getInitialState() {
    return { name: "", ingredients: "", showModal: false };
  },

  open() {
    this.setState({ showModal: true });
  },

  close() {
    this.setState({ name: "", ingredients: "", showModal: false });
  },

  add() {
    this.props.dispatch(addRecipe(this.state.name, this.state.ingredients.split(",")));
    this.setState({ name: "", ingredients: "", showModal: false });
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
            <form>
              <label>
                Recipe name:
                <input type="text"
                  placeholder="Enter recipe name"
                  value={this.state.name}
                  onChange={this.handleNameChange} />
              </label><br></br>
              <label>
                Ingredients:
                <input type="text"
                  placeholder="Enter ingredients separeted by comma"
                  value={this.state.ingredients}
                  onChange={this.handleIngChange} />
              </label>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Cancel</Button>
            <Button onClick={this.add}>Add recipe</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
});

export const AddRecipe = connect()(AddModal)