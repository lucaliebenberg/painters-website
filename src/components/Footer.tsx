import React from 'react'

export default function Footer() {
  return (
    <div className="footer__container">
      <div className="footer__contact"
      style={{
        display: "flex",
        justifyContent: "center",
        height: "200px",
        width: "100%",
        marginTop: "9rem"
      }}>
        <div className="footer__contact_item">
        <a href="#footer"
        style={{
          textDecoration: "none",
          color: "black",
          
        }}><p className="footer__contact_number"
          style={{
            paddingRight: "2rem"
          }}>(021) 712 - 3390</p></a>
        </div>
        <div className="footer__contact_item">
        <a href="#footer"
        style={{
          textDecoration: "none",
          color: "black"
        }}><p className="footer__contact_email">paintit@gmail.com</p></a>
        </div>
      </div>
    </div>
  )
}
