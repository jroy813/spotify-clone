import React from 'react'
import '../css/SidebarOption.css'
import { useDataLayerValue } from '../DataLayer'

function SidebarOption({ title, Icon, playlistScope }) {
    const [ {spotify, playlist, playerStatus}, dispatch ] = useDataLayerValue();

    return (
    <div className="sidebarOption" onClick={ 
        Icon ? '' : 
        () =>spotify.getPlaylist(playlistScope.id).then(playlist => {
            dispatch({
                type: 'SET_PLAYLIST',
                playlist: playlist
            })
        })
    }>
        {Icon && <Icon className='sidebarOption__icon' />}
        {Icon ? <h4>{title}</h4> : <p className={playlist.name == title &&playerStatus?.playerState?.isPlaying ? 'active' : ''}>{title}</p>}
    </div>
    )
}

export default SidebarOption
