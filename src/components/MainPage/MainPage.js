import React from 'react'
import ProductsList from '../Products/ProductsList'
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import './mainPage.css'

const MainPage = () => {
    return (
        <div className="mainPage">
            <ProductsList/>
            <ShoppingCart/>
        </div>
    )
}

export default MainPage;