import React, {forwardRef, useEffect, useImperativeHandle, useRef, useState} from 'react'
import { parseLyric } from './utils /format'

import SongCover from './SongCover'
import SongInfo from './SongInfo'
import LyricsDisplay from './LyricsDisplay'
import ProgressBar from './ProgressBar'
import TimeDisplay from './TimeDisplay'
import OperationBar from './OperationBar'
import SongList from './SongList'

import './index.css'
import './iconFont/index.css'

const BONiiiPlayer = forwardRef(({songList}, ref) => {
    const audioRef = useRef()
    const automaticCutting = useRef(false)
    const [currentTime, setCurrentTime] = useState(0)
    const [totalTime, setTotalTime] = useState(0)
    const [mode, setMode] = useState('loop')
    const [currentSong, setCurrentSong] = useState(0)
    const [songInfo, setSongInfo] = useState(null)
    const [hiddenSongList, setHiddenSongList] = useState(true)
    const [isPlaying, setPlaying] = useState(false)
    const [songSrc, setSongSrc] = useState('')
    
    useImperativeHandle(ref, ()=>{
        return {
            pause: pause(),
            play: play(),

        }
    })

    //对当前播放歌曲的歌词下载
    useEffect(() => {
        setSongInfo(songList[currentSong])
        setSongSrc(songList[currentSong]?.resource)
        if(automaticCutting.current){
            play()
            automaticCutting.current = false
        }
    },[currentSong, songList])
    
    // 播放
    const play = () => { 
        audioRef.current.play() 
        setPlaying(true)
    }
    // 暂停
    const pause = () => { 
        audioRef.current.pause() 
        setPlaying(false)
    }

    // 切换播放暂停
    const handleChangePlay = () => {
        isPlaying? pause(): play()
    }

    const handleChangeCurrentTime = (currentTime) => {
        if(audioRef.current){
            audioRef.current.currentTime = currentTime
            setCurrentTime(currentTime * 1000) 
        }
    }

    const handleChangeVolume = (volume) => {
        // volume的范围为0-1
        audioRef.current.volume = volume / 100
    }

    // 处理每一首歌播放完成后
    const handleMusicEnd = () => {
        if(mode === 'loop'){
            audioRef.current.currentTime = 0
            play()
        }else{
            setCurrentSong((currentSong + 1) % songList.length)
            automaticCutting.current = true
        }
    }

    const handleAudioOnCanplay = () => {
        setTotalTime(audioRef.current.duration * 1000)
    }

    const handleTimeUpdate = () => {
        setCurrentTime(audioRef.current.currentTime * 1000)
    }

    const handleHiddenSongList = () => {
        setHiddenSongList(!hiddenSongList)
    }

    const handleSongListItemClick = (index) => {
        setCurrentSong(index)
        setPlaying(false)
    }

    return (
        <div className='player'>
            <div className='player-left'>
                <SongCover src={ songInfo?.songCover || "data:image/jpeg;base64,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"  } isPlaying={ isPlaying } handleChangePlay={ handleChangePlay }/>
            </div>
            <div className='player-right'>
                <SongInfo songName={ songInfo?.songName || "歌名" } singer={ songInfo?.singer || "歌手" }/>
                <LyricsDisplay lyrics={parseLyric(songInfo?.lyrics)} currentTime={currentTime}/>
                <div className='ops'>
                    <ProgressBar currentTime={currentTime} totalTime={totalTime} handleChangeCurrentTime={handleChangeCurrentTime}/>
                    <TimeDisplay currentTime={currentTime} totalTime={totalTime}/>
                    <OperationBar handleChangeVolume={handleChangeVolume} mode={mode} setMode={setMode} handleHiddenSongList={handleHiddenSongList}/>
                </div>
            </div>
            <SongList songList={songList} hiddenSongList={hiddenSongList} currentSong={currentSong} handleSongListItemClick={handleSongListItemClick}/>
            <audio ref={audioRef} onEnded={handleMusicEnd} onCanPlay={handleAudioOnCanplay} onTimeUpdate={handleTimeUpdate} src={songSrc}></audio>
        </div>
    )
})

export default BONiiiPlayer