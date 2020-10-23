import { ADD_TO_CART, REMOVE_FROM_CART } from "./actionsTypes"
// axios from 'axios'


// export const loadProducts=()=>{
//    return dispatch=>{
//       return axios.get("http://localhost:3001/products")
//        .then(response=>{
//            dispatch({
//                type: LOAD_PRODUCTS,
//                product: response.data
//            })
//        })
//    }
// }


export const addToCart = product => {
    return {
        type: ADD_TO_CART,
        product
    }
}

export const removeFromCart = product => {
    return{
        type: REMOVE_FROM_CART,
        product
    }
}