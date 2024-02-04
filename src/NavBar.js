import React from 'react'
import "./x.css"

const NavBar = ({clr}) => {
    const myStyle = { color: "green" }
    return (
        <div style={{backgroundColor:'gray'}}>
            <button style={myStyle}>aaaaaaaaaa</button>
            <button style={{color:clr}}>aaaaaaaaaa</button>
            <ul>
                <li><a className="active" href="#home">Home</a></li>
                <li><a href="#news">News</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#about">About</a></li>
            </ul>
        </div>
    )
}

export default NavBar