import React from "react"
import SongList from './cpns/songlist'
import Voice from './cpns/voice'
import Pattern from './cpns/pattern'
import './index.css'

const OperationBar = ({size, isMute, handleChangeVolume, mode, setMode, handleHiddenSongList}) => {

    return (
        <div style={{minWidth: `${0.7 * size}px`, padding: `0px ${0.05 * size}px`}} className="operation-bar">
            <Voice size={size} isMute={isMute} handleChangeVolume={handleChangeVolume}/>
            <Pattern size={size} mode={mode} setMode={setMode}/>
            <SongList size={size} handleHiddenSongList={handleHiddenSongList}/>
        </div>
    )
}

export default OperationBar