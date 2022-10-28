import React from "react"
import { IMAGE_ERROR } from "../constant"

import './index.css'

const SongCover = ({size, src, alt = IMAGE_ERROR, isPlaying, handleChangePlay}) => {
    return (
        <div className='image-cover'>
            {isPlaying?
                <span style={{fontSize: `${0.22 * size}px`}} onClick={handleChangePlay} className="icon-font play">&#xea81;</span>:
                <span style={{fontSize: `${0.22 * size}px`}} onClick={handleChangePlay} className="icon-font pause">&#xea82;</span>
            }
            <img src={src} alt={alt}/>
        </div>
    )
}

export default SongCover