import React from 'react'
import "./video.css"

function Video() {
  return (
    <div className ='video'>
        Eu sou um componente video
        <video 
            className='video__player'
            src='https://www.tiktok.com/@china_mew/video/7200398672016788782?is_from_webapp=1'
        >
        </video>
    </div>
  )
}

export default Video