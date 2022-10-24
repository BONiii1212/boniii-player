import React from "react"
import "./index.css"

const SongInfo = ({songName, singer}) => {
    return (
        <div className="song-info">
            <span>{songName}</span>
            <span> - {singer}</span>
        </div>
    )
}
export default SongInfo