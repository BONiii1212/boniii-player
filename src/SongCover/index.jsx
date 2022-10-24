import React from "react"
import './index.css'

const SongCover = ({src, alt = "图片加载失败", isPlaying, handleChangePlay}) => {
    return (
        <div className='image-cover'>
            {isPlaying?
                <span onClick={handleChangePlay} className="icon-font play">&#xea81;</span>:
                <span onClick={handleChangePlay} className="icon-font pause">&#xea82;</span>
            }
            <img src={src} alt={alt}/>
        </div>
    )
}

export default SongCover