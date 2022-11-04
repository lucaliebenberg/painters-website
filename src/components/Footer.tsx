import React from 'react'

export default function Footer() {
  return (
    <div className="footer__container"
      style={{
        display: "flex",
        justifyContent: "center",
        
        height: "300px",
        width: "100%"
      }}>
      <div className="footer__contact">
        <div className="footer__contact_item">
        <a href="#footer"
        style={{
          textDecoration: "none",
          color: "black"
        }}><p className="">(021) 712 - 3390</p></a>
        </div>
        <div className="footer__contact_item">
        <a href="#footer"
        style={{
          textDecoration: "none",
          color: "black"
        }}><p className="">paintit@gmail.com</p></a>
        </div>
      </div>
    </div>
  )
}
