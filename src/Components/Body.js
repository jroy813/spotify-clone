import React from 'react'
import '../css/Body.css'
import Header from './Header'
import SongRow from './SongRow'
import {useDataLayerValue} from '../DataLayer'
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'
import FavoriteIcon from '@material-ui/icons/Favorite'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'

function Body({ spotify }) {
    const [{playlist, playerStatus}, dispatch] = useDataLayerValue();
    
    return (
        <div className="body">
            <Header spotify={spotify } />
            
            <div className="body__info">
                <img src={playlist?.images[0]?.url} alt=""/>
                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>{playlist?.name}</h2>
                    <p>{playlist?.description}</p>
                </div>
            </div>
            
            <div className="body__songs">
                <div className="body__icons">
                    {
                        playerStatus.playerState.isPlaying ?
                        <PauseCircleFilledIcon className="body__shuffle" onClick={ () => dispatch({type: 'UPDATE_PLAYER_STATUS', status: false}) } />
                        :
                        <PlayCircleFilledIcon className="body__shuffle" onClick={ () => dispatch({type: 'UPDATE_PLAYER_STATUS', status: true}) } />
                    }
                    {/* <FavoriteIcon fontSize="large" />
                    <MoreHorizIcon /> */}
                </div>
                {playlist?.tracks?.items?.map((item, index) => (
                    <SongRow key={index} index={index} track={item.track} spotify={spotify} />
                ))}
            </div>
        </div>
    )
}

export default Body
