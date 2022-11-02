import React from 'react'

export default function Navbar() {
  return (
    <nav className="navbar__container" 
        style={{
            display: "flex",
            flexDirection: "row",
            justifyContent:"space-between",
            backgroundColor: "grey"
        }}>
        <div className="navbar__left"
            style={{
                padding: "8px",
                marginLeft: "16px"
            }}>
           <h2>Paint It</h2>
        </div>
        <div className="navbar__right"
            style={{
                display: "flex",
                flexDirection: "row",
                margin: "16px",
                padding: "16px"
            }}>
            <a href='#1'
                style={{
                    textDecoration: "none",
                    color: "black"
                }}><li style={{ listStyle: "none", marginRight: "4rem"}}>About</li></a>
            <a href="#2"
                style={{
                    textDecoration: "none",
                    color: "black"
                }}><li style={{ listStyle: "none", marginRight: "4rem"}}>Gallery</li></a>
            <a href="#3"
                style={{
                    textDecoration: "none",
                    color: "black"
                }}><li style={{ listStyle: "none", marginRight: "4rem"}}>Contact</li></a>
        </div>
    </nav>
  )
}
