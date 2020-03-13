import {SET_INITIAL_AMOUNT} from './changeAmountTypes'
import {INCREASE_AMOUNT} from './changeAmountTypes'
import {DECREASE_AMOUNT} from './changeAmountTypes'

//define action 
export const setInitialAmount = (requiredAmount) => {
    return {
        type: SET_INITIAL_AMOUNT,
        update: requiredAmount
    }
}
export const increaseAmount = (number = 1) => {
    return {
        type: INCREASE_AMOUNT,
        payload: number
    }
}

export const decreaseAmount = (number = 1) => {
    return {
        type: DECREASE_AMOUNT,
        payload: number
    }
}

