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
                objectFit: "cover"
            }}>
            <img src="https://i.ibb.co/T10YbkS/hero-image.jpg" alt="Paint it hero!"
                style={{
                    height: "750px",
                    width: "100%"
                }}></img>
        </div>
    </div>
  )
}
