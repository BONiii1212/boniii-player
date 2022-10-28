import React from "react"
import './index.css'

const SongList = ({size, songList, hiddenSongList, currentSong, handleSongListItemClick}) => {
    return (
        <div style={{height: `${hiddenSongList? 0: 3.1 * size}px`}} className="song-list-main">
            {songList && songList.map((songInfo, index) => {
                return (
                    <div style={{fontSize: `${0.13 * size}px`, padding: `${0.06 * size}px ${0.1 * size}px ${0.06 * size}px ${0.02 * size}px`}} className={currentSong === index ? "song-list-item active-item" : "song-list-item"} onClick={() => handleSongListItemClick(index)} key={songInfo.id}>
                        <div className="before-bar">
                            <span style={{marginRight: `${0.06 * size}px`, width: `${0.03 * size}px`}} className='before-block'></span>
                            <span>{songInfo.songName}</span>
                        </div>
                        <div>{songInfo.singer}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default SongList