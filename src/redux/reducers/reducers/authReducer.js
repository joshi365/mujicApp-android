import isEmpty from "../../../utils/isEmpty"
import { types } from "../types"

const initialState = {
    isAuthenticated : false,
    user:{}
}

function authReducer (state = initialState, action) {
    switch(action.type){
        case types.SET_CURRENT_USER:
            return {
                ...state,
                user:action.payload,
                isAuthenticated:!isEmpty(action.payload)
            }
            default: return state
    }
}

export default authReducer