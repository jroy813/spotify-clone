import React from 'react'
import '../css/Sidebar.css'
import SpotifyLogo from '../images/spotify-logo.png'
import SidebarOption from './SidebarOption'

function Sidebar() {
    return (
        <div className="sidebar">
            <img src={SpotifyLogo} className="sidebar__logo" alt=""/>
            <SidebarOption title="Home" />
            <SidebarOption title="Search" />
            <SidebarOption title="Your Library" />
        </div>
    )
}

export default Sidebar
