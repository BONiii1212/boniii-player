import React from "react"
import './index.css'

const SongList = ({handleHiddenSongList}) => {
    return (
        <div className="song-list" onClick={handleHiddenSongList}>
            <span className='icon-font'>&#xeb7c;</span>
        </div>
    )
}
export default SongList