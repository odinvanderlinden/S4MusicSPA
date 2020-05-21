import React from 'react'
import '../Css/Header.css'
import { Link } from 'react-router-dom'
import '../Css/Header.css'

export default function Header() {
    return (
        <header className="headerHolder">
            <nav className="navigation">
                <div className="navItem">
                    <Link to="/">Home</Link>
                </div>
            </nav>
        </header>
    )
}
