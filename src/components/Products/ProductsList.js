import React, { Component } from 'react'
import datos from '../../helpers/data'
import store from '../../redux/store'
import './productsList.css'
import {addToCart} from '../../redux/actions/actions'

class ProductsList extends Component {
    constructor() {
        super();
        this.state = {
            productos: datos
        }
        this.addToCard = this.addToCard.bind(this)
    }


    render() {
        const { productos } = this.state
        console.log(productos)
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
                                onClick={() => this.addToCard(producto)}>
                                {`$ ${producto.precio}`}
                                <i class="fas fa-cart-arrow-down"></i>

                            </button>
                        </div>
                    ))
                }
            </div>
        )
    }

    addToCard(product) {
        store.dispatch(addToCart(product))
    }
}
export default ProductsList;