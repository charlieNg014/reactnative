import {ADD_CART} from "./addCartTypes"

export const addToCart = (newProduct) => {
    return {
        type: ADD_CART,
        update: newProduct
    }
}