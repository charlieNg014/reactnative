import {combineReducers} from "redux"
import getProductIDReducer from './getProductID/getIDReducer'
import addToCartReducer from "./addCart/addCartReducer"
import updateCartReducer from "./updatedCart/updatedCartReducer"
import changeAmountReducer from "./updateAmount/changeAmount/changeAmountReducer"
import updateInCartReducer from "./updateInCart/updateInCartReducer"

const rootReducer = combineReducers({
    getProductID: getProductIDReducer,
    addToCart: addToCartReducer,
    updateCart: updateCartReducer,
    changeAmount: changeAmountReducer,
    updateInCart: updateInCartReducer
})

export default rootReducer;