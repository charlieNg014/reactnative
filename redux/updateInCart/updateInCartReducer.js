import {UPDATE_INCART} from "./updateInCartTypes";

//define initial states
const initialData = {
    inCartProductList: []
}

//define reducer 
const updateInCartReducer = (state = initialData, action) => {
    switch (action.type) {
        case UPDATE_INCART: 
        return {
            ...state, 
            inCartProductList: action.update
        }
        default: return state 
    }
}

export default updateInCartReducer;