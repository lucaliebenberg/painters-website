import React from 'react'

export default function Gallery() {
  return (
    <div className="gallery__container"
        style={{
            paddingTop: "6rem"
        }}>
        <div className="gallery__heading">
            <h1 className="gallery__heading_text">Some of Our Past Work</h1>
        </div>
        <div className="gallery" 
        style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            paddingTop: "2rem",
            justifyContent: "center",
        }}>
            <div className="gallery__item"
                style={{
                    paddingTop: "1rem",
                    paddingLeft: "1rem"
                }}>
                <img src="https://picsum.photos/300/200" alt="" ></img>
            </div>
            <div className="gallery__item"
                style={{
                    paddingTop: "1rem",
                    paddingLeft: "1rem"
                }}>
                <img src="https://picsum.photos/300/200" alt="" ></img>
            </div>
            <div className="gallery__item"
                style={{
                    paddingTop: "1rem",
                    paddingLeft: "1rem"
                }}>
                <img src="https://picsum.photos/300/200" alt="" ></img>
            </div>
            <div className="gallery__item"
                style={{
                    paddingTop: "1rem",
                    paddingLeft: "1rem"
                }}>
                <img src="https://picsum.photos/300/200" alt="" ></img>
            </div>
            <div className="gallery__item"
                style={{
                    paddingTop: "1rem",
                    paddingLeft: "1rem"
                }}>
                <img src="https://picsum.photos/300/200" alt="" ></img>
            </div>
            <div className="gallery__item"
                style={{
                    paddingTop: "1rem",
                    paddingLeft: "1rem"
                }}>
                <img src="https://picsum.photos/300/200" alt="" ></img>
            </div>
            <div className="gallery__item"
                style={{
                    paddingTop: "1rem",
                    paddingLeft: "1rem"
                }}>
                <img src="https://picsum.photos/300/200" alt="" ></img>
            </div>
            <div className="gallery__item"
                style={{
                    paddingTop: "1rem",
                    paddingLeft: "1rem"
                }}>
                <img src="https://picsum.photos/300/200" alt="" ></img>
            </div>
        </div>
    </div>
  )
}
