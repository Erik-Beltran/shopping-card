import React, { Component } from 'react'
import store from '../../redux/store';
import './shoppingCart.css'
import { removeFromCart } from '../../redux/actions/actions'


class ShoppingCart extends Component {
    constructor() {
        super();
        this.state = {
            cart: []
        }

        store.subscribe(() => {
            this.setState({
                cart: store.getState().cart
            })
        })

        this.removeFromCart = this.removeFromCart.bind(this)
    }

    render() {

        console.log(this.state.cart)
        return (
            <div className="shoppingCart">
                <table class="table table-striped">
                    <thead class="thead-dark">
                        <tr>
                            <th colspan="3">Shopping Cart</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.cart.map(product => (
                                <tr>
                                    <td>{product.nombre}</td>
                                    <td>{`$ ${product.precio}`}</td>
                                    <td>
                                        <button
                                            type="button"
                                            class="btn btn-danger"
                                            onClick={() => this.removeFromCart(product)}>
                                            <i class="fas fa-trash-alt"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="3">
                                <strong>
                                    Total: ${this.state.cart.reduce((sum, product) => sum + Number(product.precio), 0)}
                                </strong>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        )
    }

    removeFromCart(product) {
        store.dispatch(removeFromCart(product))
    }
}

export default ShoppingCart;