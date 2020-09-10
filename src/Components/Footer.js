import React from 'react'
import '../css/Footer.css'
// import { Grid, Slider } from "@material-ui/core";
// import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
// import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
// import SkipNextIcon from "@material-ui/icons/SkipNext";
// import ShuffleIcon from "@material-ui/icons/Shuffle";
// import RepeatIcon from "@material-ui/icons/Repeat";
// import VolumeDownIcon from "@material-ui/icons/VolumeDown";
// import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";

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
                play={playerStatus.status}
                callback={(state) => dispatch({type: 'SET_PLAYER_STATE', playerState: state})}
                />
        </div>
    )
}

export default Footer