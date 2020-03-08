import {GET_ID} from "./getIDTypes"

export const getProductID = (newID) => {
    return {
        type: GET_ID,
        update: newID
    }
}