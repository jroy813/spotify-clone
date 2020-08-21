export const initialState = {
    user: null,
    playlits: [],
    playlist: false,
    item: null
}

const reducer = ( state, action ) => {
    console.log('ACTION: ', action)
    
    switch(action.type) {
        case 'SET_USER' :
            return {
                ...state, 
                user: action.user
            };
        default: 
            return state;
    }
}

export default reducer;