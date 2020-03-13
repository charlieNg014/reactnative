import {UPDATE_INCART} from "./updateInCartTypes"

export const updateInCart = (newInCart) => {
    return {
        type: UPDATE_INCART,
        update: newInCart
    }
}