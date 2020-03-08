import {GET_ID} from "./getIDTypes";

//define initial states
const initialData = {
    productID: []
}

//define reducer 
const getProductIDReducer = (state = initialData, action) => {
    switch (action.type) {
        case GET_ID: 
        return {
            ...state, 
            productID: action.update
        }
        default: return state
    }
}

export default getProductIDReducer;