import React from "react"
import './index.css'

const SongList = ({size, handleHiddenSongList}) => {
    return (
        <div className="song-list" onClick={handleHiddenSongList}>
            <span style={{fontSize: `${0.16 * size}px`}} className='icon-font'>&#xeb7c;</span>
        </div>
    )
}
export default SongList