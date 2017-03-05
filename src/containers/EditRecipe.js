import React from 'react';
import { connect } from 'react-redux';
import { Modal, Button, Form, FormGroup, Col, FormControl, ControlLabel } from 'react-bootstrap';

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
            <Button bsStyle='danger' onClick={() => this.props.onEditClick(null)}>Cancel</Button>
            <Button bsStyle='success' onClick={() => this.props.onUpdateClick(this.props.id, this.state.name, formatInput(this.state.ingredients))}>Save recipe</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
});

export const EditRecipe = connect()(EditModal)