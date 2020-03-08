import {ADD_CART} from "./addCartTypes";

//define initial states
const initialData = {
    productCart: []
}

//define reducer 
const addToCartReducer = (state = initialData, action) => {
    switch (action.type) {
        case ADD_CART: 
        return {
            ...state, 
            productCart: state.productCart.concat(action.update)
        }
        default: return state 
    }
}

export default addToCartReducer;