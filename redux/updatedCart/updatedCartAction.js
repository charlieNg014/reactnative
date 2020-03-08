import {UPDATED_CART} from "./updatedCartTypes"

export const updateCart = (newCartArray) => {
    return {
        type: UPDATED_CART,
        update: newCartArray
    }
}