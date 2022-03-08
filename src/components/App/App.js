import React, { Component } from 'react';
import './App.css';
import {getOrders} from '../../apiCalls';
import {postOrders} from '../../apiCalls'
import Orders from '../../components/Orders/Orders';
import OrderForm from '../../components/OrderForm/OrderForm';

class App extends Component {
  constructor(props) {
    super();
    this.state = { 
      orders: []
    }
  }

  componentDidMount() {
    getOrders()
      .then(data => this.setState({orders: data.orders}))
      .catch(err => console.error('Error fetching:', err));
  }

  submitOrders = (newOrder) => {
    this.setState({orders: [...this.state.orders, newOrder]})
    postOrders(newOrder)
  }

  render() {
    return (
      <main className="App">
        <header>
          <h1>Burrito Builder</h1>
          <OrderForm submitOrders={this.submitOrders}/>
        </header>

        <Orders orders={this.state.orders}/>
      </main>
    );
  }
}


export default App;
