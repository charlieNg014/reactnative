import {UPDATED_CART} from "./updatedCartTypes";

//define initial states
const initialData = {
    updatedCart: []
}

//define reducer 
const updateCartReducer = (state = initialData, action) => {
    switch (action.type) {
        case UPDATED_CART: 
        return {
            ...state, 
            updatedCart: action.update
        }
        default: return state 
    }
}

export default updateCartReducer;