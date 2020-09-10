import React, {useEffect} from 'react'
import '../css/SongRow.css'
import { useDataLayerValue } from '../DataLayer'

function SongRow( {index, track, spotify} ) {
    
    const [{playerStatus}, dispatch] = useDataLayerValue();
    
    useEffect(() => {
        dispatch({type: 'ADD_SONG', playUris: track.uri })
    }, [dispatch])
    
    return (
        <div className="songRow" onClick={() => dispatch({type: 'PLAY_SONG', songNumber: index  + 1})}>
            <img className="songRow__album" src={track.album.images[0].url} alt=""/>
            <div className="songRow__info">
                <h1 className={playerStatus.songNumber == index+ 1 ? 'active' : ''}>{track?.name}</h1>
                <p>
                {track.artists.map((artist) => artist.name).join(", ")} -{" "}
                {track.album.name}
                </p>
            </div>
        </div>
    )
}

export default SongRow
