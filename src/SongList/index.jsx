import React from "react"
import './index.css'

const SongList = ({songList, hiddenSongList, currentSong, handleSongListItemClick}) => {
    return (
        <div className={hiddenSongList? "song-list-main hidden": "song-list-main"}>
            {songList && songList.map((songInfo, index) => {
                return (
                    <div className={currentSong === index ? "song-list-item active-item" : "song-list-item"} onClick={() => handleSongListItemClick(index)} key={songInfo.id}>
                        <div className="before-bar">
                            <span className='before-block'></span>
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