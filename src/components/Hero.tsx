import React from 'react'

export default function Hero() {
  return (
    <div className="hero__container"
        style={{
            display: "flex",
            flexDirection: "column",
        }}>
        <div className="hero"
            style={{
                height: "800px",
                width: "100%"
            }}>
            <img src="https://i.ibb.co/T10YbkS/hero-image.jpg" alt="Paint it hero!"></img>
        </div>
    </div>
  )
}
