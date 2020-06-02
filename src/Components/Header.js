import React from 'react'
import '../Css/Header.css'
import { Link } from 'react-router-dom'
import '../Css/Header.css'
import AddSong from './AddSong'
import { logout } from '../Service/AuthHelper'

export default function Header() {

    let artistItems = null
    if (window.sessionStorage.getItem("role") === "ADMIN" || window.sessionStorage.getItem("role") === "ARTIST") {
        artistItems = (<div className="navItem">
            <AddSong></AddSong>
        </div>)
    }
    return (
        <header className="headerHolder">
            <nav className="navigation">
                <div className="navItem">
                    <Link to="/">Home</Link>
                </div>
                {artistItems}
            </nav>
            <div className="navItem logout" onClick={() => logout()}>
                <a>Logout</a>
            </div>
        </header>
    )
}
