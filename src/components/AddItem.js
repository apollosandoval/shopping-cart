import React from 'react';

class AddItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        console.log(event.target.name);
        console.log(event.target.value);
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        let products = this.props.products;
        let productsList = products.map((product) => {
            return <option key={product.id} value={product.name}>{product.name}</option>
        });
        
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <label>
                            <h6>Quantity</h6>
                            <input type="text" onChange={this.handleChange} name="quantity"/>
                        </label>
                    </div>
                    <div className="row">
                        <label>
                            <h6>Product</h6>
                            <select value={this.state.value} onChange={this.handleChange} name="product">
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