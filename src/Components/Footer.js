import React from 'react'
import '../css/Footer.css'
import SpotifyWebPlayer from 'react-spotify-web-playback';
import { useDataLayerValue } from '../DataLayer'

const Footer = () => {
    const [{ token, playerStatus }, dispatch] = useDataLayerValue();
    
    return (
        <div className="footer">
            <SpotifyWebPlayer
                token={token}
                uris={playerStatus.playUris}
                offset={playerStatus.songNumber}
                autoPlay={true}
                name="Spotify Web Player"
                persistDeviceSelection={true}
                play={playerStatus.status}
                callback={(state) => dispatch({type: 'SET_PLAYER_STATE', playerState: state})}
                />
        </div>
    )
}

export default Footer