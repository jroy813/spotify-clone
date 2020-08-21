export const initialState = {
    user: null,
    playlits: [],
    playlist: false,
    item: null,
    token: 'BQAwUOE_olcb3tfry4XLZc9tj1Y5cxpSlJGwqKmqgMme2r7GCchyZRa8VjVqnQ7aE1bKsIZF0OGP_Zo02v9J06TKXW6stwRaFx7f1nZZGq8RQD3paCFboEFBs3j6cMxP_EQ2qMwXTal-RK4f33e4ctNrlVTov44J'
}

const reducer = ( state, action ) => {
    console.log('ACTION: ', action)
    
    switch(action.type) {
        case 'SET_USER' :
            return {
                ...state, 
                user: action.user
            };
        
        case 'SET_TOKEN' :
            return {
                ...state,
                token: action.token
            }
            
        default: 
            return state;
    }
}

export default reducer;