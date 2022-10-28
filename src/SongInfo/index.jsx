import React from "react"
import "./index.css"

const SongInfo = ({size, songName, singer}) => {
    return (
        <div className="song-info">
            <span style={{fontSize: `${0.16 * size}px`}}>{songName}</span>
            <span style={{fontSize: `${0.12 * size}px`}}> - {singer}</span>
        </div>
    )
}
export default SongInfo