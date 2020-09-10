import React, { useEffect } from 'react';
import './css/App.css';
import Login from './Components/Login';
import Player from './Components/Player';
import { getTokenFromUrl } from './spotify'
import SpotifyWebApi from 'spotify-web-api-js'
import { useDataLayerValue } from './DataLayer'

const spotify = new SpotifyWebApi();

function App() {
    const [{ token }, dispatch] = useDataLayerValue();

    useEffect(() => {
        const hash = getTokenFromUrl();
        window.location.hash = '';
        
        const _token = hash.access_token
        
        if( _token ) {
            dispatch({
               type: 'SET_TOKEN',
               token: _token 
            });
            
            spotify.setAccessToken(_token)
            
            spotify.getMe().then(user => {
                console.log(user);
                dispatch({
                    type: 'SET_USER',
                   user 
                });
            });
            
            spotify.getUserPlaylists().then(playlists => {
                dispatch({
                    type: 'SET_PLAYLISTS',
                    playlists: playlists
                })
            })
            
            spotify.getPlaylist('37i9dQZEVXcIekbA9Vrokc').then(playlist => {
                dispatch({
                    type: 'SET_DISCOVER_WEEKLY',
                    discover_weekly: playlist
                })
            })
        }
    }, [dispatch]);
    
  return (
    <div className="app">
        {
            token ? (
                <Player spotify={spotify} />
            ) : (
                <Login />
            )
        }
    </div>
  );
}

export default App;