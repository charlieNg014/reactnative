import {combineReducers} from "redux"
import getProductIDReducer from './getProductID/getIDReducer'
import addToCartReducer from "./addCart/addCartReducer"
import updateCartReducer from "./updatedCart/updatedCartReducer"
const rootReducer = combineReducers({
    getProductID: getProductIDReducer,
    addToCart: addToCartReducer,
    updateCart: updateCartReducer
})

export default rootReducer;