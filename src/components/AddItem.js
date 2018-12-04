import React from 'react';

class AddItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 0,
            productId: 40
        };

    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onItemAdded(this.state);
    }

    render() {
        let products = this.props.products;
        let productsList = products.map((product) => {
            return <option key={product.id} value={product.id}>{product.name}</option>
        });
        
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <label>
                            <h6>Quantity</h6>
                            <input type="text" value={this.state.quantity} onChange={this.handleChange} name="quantity"/>
                        </label>
                    </div>
                    <div className="row">
                        <label>
                            <h6>Product</h6>
                            <select value={this.state.productId} onChange={this.handleChange} name="productId">
                                {productsList}
                            </select>
                        </label>
                    </div>
                    <div className="row">
                        <button className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddItem;