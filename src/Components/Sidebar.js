import React from 'react'
import '../css/Sidebar.css'
import SpotifyLogo from '../images/spotify-logo.png'
import SidebarOption from './SidebarOption'
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import LibraryMusician from '@material-ui/icons/LibraryMusic'

function Sidebar() {
    return (
        <div className="sidebar">
            <img src={SpotifyLogo} className="sidebar__logo" alt=""/>
            <SidebarOption Icon={HomeIcon} title="Home" />
            <SidebarOption Icon={SearchIcon} title="Search" />
            <SidebarOption Icon={LibraryMusician} title="Your Library" />
            
            <br />
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr />
            
            <SidebarOption title="Hip Hop" />
        </div>
    )
}

export default Sidebar
