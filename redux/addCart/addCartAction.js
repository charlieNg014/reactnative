import {ADD_CART} from "./addCartTypes"
import {CHANGE_INCART_STATE} from "./addCartTypes"

export const changeCartState = (newState) => {
    return {
        type: CHANGE_INCART_STATE,
        update: newState
    }
}

export const addToCart = (newProduct) => {
    return {
        type: ADD_CART,
        update: newProduct
    }
}

