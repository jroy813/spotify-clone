export const initialState = {
    user: null,
    playlits: [],
    playlist: false,
    item: null,
    playerStatus: {
        status: true,
        playerState: false,
        playUris: ['spotify:track:6N3oYlfZ2RPdjMYdHCRmFS'],
        songNumber: 1
    }
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
            
        case 'SET_PLAYLISTS' :
            return {
                ...state,
                playlists: action.playlists
            }
            
        case 'SET_DISCOVER_WEEKLY' :
            return {
                ...state,
                discover_weekly: action.discover_weekly
            }
            
        case 'PLAY_SONG' :
            return {
                ...state,
                playerStatus: {
                    ...state.playerStatus,
                    status: true,
                    songNumber: action.songNumber
                }
            }
            
        case 'ADD_SONG' :
            return {
                ...state,
                playerStatus: {
                    ...state.playerStatus,
                    playUris: [...state.playerStatus.playUris, action.playUris]
                }
            }
            
        case 'SET_PLAYER_STATE' :
            return {
                ...state,
                playerStatus: {
                    ...state.playerStatus,
                    playerState: action.playerState
                }
            }
            
        case 'UPDATE_PLAYER_STATUS' :
            return {
                ...state,
                playerStatus: {
                    ...state.playerStatus,
                    status: action.status
                }
            }
            
        default: 
            return state;
    }
}

export default reducer;