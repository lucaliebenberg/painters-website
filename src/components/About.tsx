import React from 'react'

export default function About() {
  return (
    <div className="about__container"
        style={{
            display: "flex",
            flexDirection:"row",
            justifyContent:"space-between"
        }}>
        <div className="about__left">
            <img src="" alt="about us"
                style={{
                    height: "320px",
                    width: "160px"
                }}></img>
        </div>

        <div className="right"
            style={{
                flexDirection: "column"
            }}>
            <h2>Welcome to Paint it!</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati veritatis sunt asperiores nobis rem officiis possimus culpa rerum delectus quas fuga, quidem dolor, aliquid ut illum. In praesentium tempore possimus?</p>
        </div>
    </div>
  )
}
