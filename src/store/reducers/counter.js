import * as actionType from '../actions/actionsTypes'
const initialState = {
    counter: 0
}

const counterReduser = (state = initialState, action) => {
    // eslint-disable-next-line 
    switch (action.type) {
        case actionType.INCREMENT: {
            return {
                ...state,
                counter: state.counter + 1
            }
        }
        case actionType.DECREMENT: {
            return {
                ...state,
                counter: state.counter - 1
            }
        }
        case actionType.ADD: {
            return {
                ...state,
                counter: state.counter + action.value
            }
        }
        case actionType.SUBSTRACT: {
            return {
                ...state,
                counter: state.counter - action.value
            }
        }
    }
    return state
}

export default counterReduser;