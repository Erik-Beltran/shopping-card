import React from 'react'
import './shoppingCart.css'
import { removeFromCart } from '../../redux/actions/actions'
import { connect } from 'react-redux';

const ShoppingCart =({cart, removeFromCart})=>  {        
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
                            cart.map(product => (
                                <tr>
                                    <td>{product.nombre}</td>
                                    <td>{`$ ${product.precio}`}</td>
                                    <td>
                                        <button
                                            type="button"
                                            class="btn btn-danger"
                                            onClick={() => removeFromCart(product)}>
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
                                    Total: ${cart.reduce((sum, product) => sum + Number(product.precio), 0)}
                                </strong>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        )
    }

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

const mapDispacthToProps = dispatch => {
    return {
        removeFromCart(product) {
            dispatch(removeFromCart(product))
        }
    }
}
export default connect(mapStateToProps,mapDispacthToProps)(ShoppingCart);