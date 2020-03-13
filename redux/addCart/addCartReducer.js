import {ADD_CART} from "./addCartTypes";
import {CHANGE_INCART_STATE} from "./addCartTypes"

//define initial states
const initialData = {
    // updatedStateCart: [],
    productCart: []
}

//define reducer 
const addToCartReducer = (state = initialData, action) => {
    switch (action.type) {
        case CHANGE_INCART_STATE: 
            return {
                ...state,
                updatedStateCart: action.update
            }
        case ADD_CART: 
            return {
                ...state, 
                productCart: state.productCart.concat(action.update)
            }
        default: return state
    }
}
export default addToCartReducer;