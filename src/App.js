import React, { useEffect, useState } from 'react';
import './css/App.css';
import Login from './Components/Login';
import { getTokenFromUrl } from './spotify'
import SpotifyWebApi from 'spotify-web-api-js'
import { useDataLayerValue } from './DataLayer'

const spotify = new SpotifyWebApi();

function App() {
    const [token, setToken] = useState(null);
    const [{ user }, dispatch] = useDataLayerValue();

    useEffect(() => {
        const hash = getTokenFromUrl();
        window.location.hash = '';
        
        const _token = hash.access_token
        
        if( _token ) {
            setToken(_token)
            
            spotify.setAccessToken(_token)
            
            spotify.getMe().then(user => {
                console.log(user);
                dispatch({
                    type: 'SET_USER',
                   user 
                });
            })
        }
        
        console.log('I have a Token', _token)
    }, []);

  return (
    <div className="app">
        {
            token ? (
                <h1>I am logged in</h1>
            ) : (
                <Login />
            )
        }
    </div>
  );
}

export default App;