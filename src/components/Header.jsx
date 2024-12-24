import React from "react"
import '../styles.css'
import logo from '/logo.png'

function Header() {
    return (
        <div className="header">
            <img className="logo" src={logo} alt="moviedux" />
            <h2 className="app-subtitle">It's time for popcorn! Find your next movie here.</h2>
        </div>
    )
}

export default Header