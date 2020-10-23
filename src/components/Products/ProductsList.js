import React from 'react'
import datos from '../../helpers/data'
import './productsList.css'
import {addToCart} from '../../redux/actions/actions'
import { connect } from 'react-redux'

const ProductsList =({addToCart})=> {
    const productos= datos
        return (
            <div className="productsList">
                {
                    productos.map(producto => (
                        <div className="card" key={producto.id}>
                            <img src={producto.img} alt="" />
                            <h4>{producto.nombre}</h4>
                            <button
                                type="button"
                                class="btn btn-primary"
                                onClick={() => addToCart(producto)}>
                                {`$ ${producto.precio}`}
                                <i class="fas fa-cart-arrow-down"></i>

                            </button>
                        </div>
                    ))
                }
            </div>
        )
    }


const mapDispacthToProps = dispatch => {
    return {
        addToCart(product) {
            dispatch(addToCart(product))
        }
    }
}
export default  connect(null, mapDispacthToProps) (ProductsList);