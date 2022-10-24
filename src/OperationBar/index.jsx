import React from "react"
import SongList from './cpns/songlist'
import Voice from './cpns/voice'
import Pattern from './cpns/pattern'
import './index.css'

const OperationBar = ({handleChangeVolume, mode, setMode, handleHiddenSongList}) => {

    return (
        <div className="operation-bar">
            <Voice handleChangeVolume={handleChangeVolume}/>
            <Pattern mode={mode} setMode={setMode}/>
            <SongList handleHiddenSongList={handleHiddenSongList}/>
        </div>
    )
}

export default OperationBar