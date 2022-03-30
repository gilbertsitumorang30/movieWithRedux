const initialState = {
    listMovie: []
}

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_LIST_MOVIE':
            return {
                ...state,
                listMovie: action.payload
            }
        default:
            return {
                ...state
            }
    }
}

export default movieReducer