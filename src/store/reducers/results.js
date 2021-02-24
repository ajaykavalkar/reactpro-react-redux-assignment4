import * as actionType from '../actions/actionsTypes'
const initialState = {
    result: []
}

const resultReducer = (state = initialState, action) => {
    // eslint-disable-next-line 
    switch (action.type) {
        case actionType.STORE_RESULT: {
            return { ...state, result: state.result.concat({ id: new Date(), value: action.result * 10 }) }
        }
        case actionType.DELETE_RESULT: {
            const updatedArray = state.result.filter((res, index) => res.id !== action.id)
            return { ...state, result: updatedArray }
        }
    }
    return state
}

export default resultReducer;