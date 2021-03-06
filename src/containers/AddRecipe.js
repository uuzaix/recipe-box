import React from 'react';
import { connect } from 'react-redux';
import { Modal, Button, Form, FormGroup, Col, FormControl, ControlLabel } from 'react-bootstrap';

// import { FormAdd } from '../components/FormAdd'
import { addRecipe } from '../actions/actions'
import { formatInput } from '../util/formatInput';

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
    this.props.dispatch(addRecipe(this.state.name, formatInput(this.state.ingredients)));
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
            <Form horizontal>
              <FormGroup controlId='FormHorizontalName'>
                <Col componentClass={ControlLabel} sm={3}>
                  Recipe name
                </Col>
                <Col sm={9}>
                  <FormControl
                    type="text"
                    placeholder="Enter recipe name"
                    value={this.state.name}
                    onChange={this.handleNameChange} />
                </Col>
              </FormGroup>
              <FormGroup controlId='FormHorizontalIngredients'>
                <Col componentClass={ControlLabel} sm={3}>
                  Ingredients
                </Col>
                <Col sm={9}>
                  <FormControl
                    type="text"
                    placeholder="Enter ingredients separeted by comma"
                    value={this.state.ingredients}
                    onChange={this.handleIngChange} />
                </Col>
              </FormGroup>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle='danger' onClick={this.close}>Cancel</Button>
            <Button bsStyle='success' onClick={this.add}>Add recipe</Button>
          </Modal.Footer>
        </Modal >
      </div >
    );
  }
});

export const AddRecipe = connect()(AddModal)