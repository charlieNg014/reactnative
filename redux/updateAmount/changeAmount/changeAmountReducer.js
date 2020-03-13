import {SET_INITIAL_AMOUNT} from './changeAmountTypes'
import {INCREASE_AMOUNT} from './changeAmountTypes'
import {DECREASE_AMOUNT} from './changeAmountTypes'

//define state
const initialState = {
    initialAmount: 1
}

const changeAmountReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_INITIAL_AMOUNT:
            return {
                ...state,
                initialAmount: action.update
            }

        case INCREASE_AMOUNT: 
            return {
                ...state,
                initialAmount: state.initialAmount + action.payload
            }

        case DECREASE_AMOUNT: 
            return {
                ...state,
                initialAmount: state.initialAmount - action.payload
            }

        default: return state
    }
}

export default changeAmountReducer;
