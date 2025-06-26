import React from "react";

const images = import.meta.glob('/src/Artportfolio/PenguinDreams/*.{png,jpg,jpeg,svg,PNG}', {eager: true})


export function PenguinDreams(){
    const imageList = Object.values(images).map((image, index) => (
        <img key={index} src={image.default}></img>
    ))
    console.log(imageList)
    return(
        <>
        <h1>Penguin Dreams</h1>
        <div className="gallerydisplay">
            {imageList}
        </div>
        </>
    )
}