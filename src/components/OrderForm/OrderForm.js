import React, { Component } from 'react';

class OrderForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      ingredients: []
    };
  }


  handleNameChange = (e) => {
    e.preventDefault()
    this.setState({[e.target.name]: e.target.value})
  }

  handleIngredientChange = (e) => {
    e.preventDefault()
    if(!this.state.ingredients.includes(e.target.name)) {
      this.setState({ingredients: [...this.state.ingredients, e.target.name]})
    }
  }

  handleSubmit = e => {
    e.preventDefault();

    if(this.state.name.length && this.state.ingredients.length) {
      const newOrder = {
        name: this.state.name,
        ingredients: this.state.ingredients
      }
      this.props.submitOrders(newOrder);
      this.clearInputs();
    } else {
      return 'Please fill out your name and add atleast one ingredient'
    }
  }

  clearInputs = () => {
    this.setState({name: '', ingredients: []});
  }

  render() {
    const possibleIngredients = ['beans', 'steak', 'carnitas', 'sofritas', 'lettuce', 'queso fresco', 'pico de gallo', 'hot sauce', 'guacamole', 'jalapenos', 'cilantro', 'sour cream'];
    const ingredientButtons = possibleIngredients.map(ingredient => {
      return (
        <button key={ingredient} name={ingredient} onClick={e => this.handleIngredientChange(e)}>
          {ingredient}
        </button>
      )
    });

    return (
      <form>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={this.state.name}
          onChange={e => this.handleNameChange(e)}
        />

        { ingredientButtons }

        <p>Order: { this.state.ingredients.join(', ') || 'Nothing selected' }</p>

        <button onClick={e => this.handleSubmit(e)}>
          Submit Order
        </button>
      </form>
    )
  }
}

export default OrderForm;
