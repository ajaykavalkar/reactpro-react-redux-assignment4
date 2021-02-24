/* ########## regular reducer combined ########## */
import * as actionType from './actions'
import { updatedObject } from './utility'
const initialState = {
    counter: 0,
    result: []
}

const reducer = (state = initialState, action) => {
    // eslint-disable-next-line 
    switch (action.type) {
        case actionType.INCREMENT: {
            // return { ...state, counter: state.counter + 1 } // <-- old approach
            return updatedObject(...state, { counter: state.counter + 1 }) // <-- new approach as return utility function
        }
        case actionType.DECREMENT: {
            // return { ...state, counter: state.counter - 1 }
            return updatedObject(...state, { counter: state.counter - 1 })
        }
        case actionType.ADD: {
            // return { ...state, counter: state.counter + action.value }
            return updatedObject(...state, { counter: state.counter + action.value })
        }
        case actionType.SUBSTRACT: {
            // return {...state, counter: state.counter - action.value }
            return updatedObject(...state, { counter: state.counter - action.value })
        }
        case actionType.STORE_RESULT: {
            // return { ...state, result: state.result.concat({ id: new Date(), value: state.counter }) }
            return updatedObject(...state, { result: state.result.concat({ id: new Date(), value: state.counter }) })
        }
        case actionType.DELETE_RESULT: {
            const updatedArray = state.result.filter((res) => res.id !== action.id)
            // return { ...state, result: updatedArray }
            return updatedObject(...state, { result, updatedArray })
        }
    }
    return state
}

export default reducer;