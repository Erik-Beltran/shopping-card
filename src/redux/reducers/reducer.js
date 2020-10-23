import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/actionsTypes";

const initialState = {
    cart:[]
}

const reducer = (state = initialState, action) => {
   switch (action.type) {
    //    case LOAD_PRODUCTS:
    //        return{
    //        }

           case ADD_TO_CART:
               return{
                ...state,
                cart:state.cart.concat(action.product)
               }
               case REMOVE_FROM_CART:
                   return{
                    ...state,
                    cart: state.cart.filter(product=> product.id !== action.product.id)
                   }
   
       default:
           return state;
   }
   
   
   
   
   
//     if(action.type === ADD_TO_CART){
//        return{
//            ...state,
//            cart:state.cart.concat(action.product)
//        }
//    }else if(action.type === REMOVE_FROM_CART){
//        return{
//            ...state,
//            cart: state.cart.filter(product=> product.id !== action.product.id)
//        }

//    } else{
//        return state
//    }

}

export default reducer;