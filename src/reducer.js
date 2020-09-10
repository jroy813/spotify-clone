export const initialState = {
    spotify: false,
    user: null,
    // playlist: [],
    playlist: {
        images: false,
        tracks: [
            {
                items: [
                    
                ]
            }
        ]
    },
    item: null,
    playerStatus: {
        status: true,
        playerState: false,
        playUris: ['spotify:track:6N3oYlfZ2RPdjMYdHCRmFS'],
        songNumber: 0
    }
}

const reducer = ( state, action ) => {
    console.log('ACTION: ', action)
    
    switch(action.type) {
    case 'SET_SPOTIFY' :
        return {
            ...state, 
            spotify: action.spotify
        };
        
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
            
        case 'SET_PLAYLIST' :
            return {
                ...state,
                playlist: action.playlist,
                playerStatus: {
                    ...state.playerStatus,
                    playUris: action.playlist?.tracks?.items.map(track =>( track.track.uri )),
                    status: true, // Doesn't work
                    songNumber: 0
                }
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