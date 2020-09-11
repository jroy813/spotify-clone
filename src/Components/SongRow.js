import React, {useEffect} from 'react'
import '../css/SongRow.css'
import { useDataLayerValue } from '../DataLayer'

function SongRow( {index, track, spotify} ) {
    
    const [{playerStatus}, dispatch] = useDataLayerValue();
    
    return (
        <div className="songRow" onClick={() => dispatch({type: 'PLAY_SONG', songNumber: index})}>
            <img className="songRow__album" src={track.album.images[0].url} alt=""/>
            <div className="songRow__info">
                <h1 className={playerStatus.playerState.track.uri === track.uri && playerStatus.playerState.isPlaying ? 'active' : ''}>{track?.name}</h1>
                <p>
                {track.artists.map((artist) => artist.name).join(", ")} -{" "}
                {track.album.name}
                </p>
            </div>
        </div>
    )
}

export default SongRow
