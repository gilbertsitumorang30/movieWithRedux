const initialState = {
    data: {}
}

const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_REGISTER':
            return {
                ...state,
                data: action.payload
            }
        default:
            return {
                ...state
            }
    }
}

export default registerReducer