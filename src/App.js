import React, { Component } from 'react';
import './App.css';
import CartHeader from './components/CartHeader';
import CartFooter from './components/CartFooter';
import CartItems from './components/CartItems';
import AddItem from './components/AddItem';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
        { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
        { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
        { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
        { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
        { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
        { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
        { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
        { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 }
      ],
      items: [
        { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
        { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
        { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 }
      ]
    }

    this.addItem = this.addItem.bind(this);
  }

  addItem(item){
    let newItem = {
      id: this.state.items.length+1,
      product: (this.state.products.filter(element => element.id === parseInt(item.productId)))[0],
      quantity: item.quantity,
    }
    this.setState({
      items: [...this.state.items, newItem]
    })
  }

  render() {
    let total = this.state.items.reduce( (acc, item) => {return acc+item.product.priceInCents*item.quantity}, 0);

    return (
      <div>
        <CartHeader />
        <CartItems items={this.state.items} total={total}/>
        <AddItem products={this.state.products} onItemAdded = { this.addItem }/>
        <CartFooter copyright={'2016'}/>
      </div>
    );
  }
}

export default App;
