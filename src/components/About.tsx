import React from 'react'

export default function About() {
  return (
    <div className="about__container"
        style={{
            display: "flex",
            flexDirection:"row",
            justifyContent:"space-between",
            alignItems: "center",
            paddingTop: "4rem"
        }}>
        <div className="about__left" 
            style={{
                flexDirection:"row",
                padding: "4rem"
            }}>
            <img src="https://i.ibb.co/52zHLbb/about-us.jpg" alt="painter 1"
                style={{
                    height: "320px",
                    width: "auto"
                }}></img>
                  <img src="https://i.ibb.co/NmMcFnV/about-us-2.jpg" alt="painter 2"
                style={{
                    height: "320px",
                    width: "auto",
                    paddingLeft: "1rem"
                }}></img>
        </div>

        <div className="right"
            style={{
                display:"flex",
                flexDirection: "column",
                paddingRight: "3rem",
                textAlign:"left",
                maxWidth: "34rem"
            }}>
            <h1>Welcome to Paint it!</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati veritatis sunt asperiores nobis rem officiis possimus culpa rerum delectus quas fuga, quidem dolor, aliquid ut illum. In praesentium tempore possimus?</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati veritatis sunt asperiores nobis rem officiis possimus culpa rerum delectus quas fuga, quidem dolor, aliquid ut illum. In praesentium tempore possimus?</p>
            <p>Obcaecati veritatis sunt asperiores nobis rem officiis possimus culpa rerum delectus quas fuga, quidem dolor, aliquid ut illum. In praesentium tempore possimus</p>
        </div>
    </div>
  )
}
