import React, {forwardRef, useEffect, useImperativeHandle, useRef, useState} from 'react'
import { parseLyric } from './utils /format'
import { DEFAULT_SONGCOVER, DEFAULT_SONGNAME, DEFAULT_SINGER, LOOP, ORDER} from './constant'

import SongCover from './SongCover'
import SongInfo from './SongInfo'
import LyricsDisplay from './LyricsDisplay'
import ProgressBar from './ProgressBar'
import TimeDisplay from './TimeDisplay'
import OperationBar from './OperationBar'
import SongList from './SongList'

import './index.css'
import './iconFont/index.css'

const BONiiiPlayer = forwardRef(({songList, pattern = LOOP, isMute = false, size = 100}, ref) => {
    const audioRef = useRef()
    const automaticCutting = useRef(false) //自动切歌，用于自动切歌的时候自动播放
    const [currentTime, setCurrentTime] = useState(0)
    const [totalTime, setTotalTime] = useState(0)
    const [mode, setMode] = useState(pattern)
    const [currentSong, setCurrentSong] = useState(0)
    const [songInfo, setSongInfo] = useState(null)
    const [hiddenSongList, setHiddenSongList] = useState(true)
    const [isPlaying, setPlaying] = useState(false)
    const [songSrc, setSongSrc] = useState('')
    
    useImperativeHandle(ref, ()=>{
        return {
            pause: pause,
            play: play,
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
        if(mode === LOOP){
            audioRef.current.currentTime = 0
            play()
        }else if(mode === ORDER){
            setCurrentSong((currentSong + 1) % songList.length)
            automaticCutting.current = true
        }else{
            audioRef.current.currentTime = 0
            play()
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
        <div className='player' style={{width: `${6 * size}px`, height: `${size}px`}}>
            <div className='player-left' style={{width: `${size}px`}}>
                <SongCover size={size} src={ songInfo?.songCover || DEFAULT_SONGCOVER } isPlaying={ isPlaying } handleChangePlay={ handleChangePlay }/>
            </div>
            <div className='player-right' style={{paddingLeft: `${size/10}px`}}>
                <SongInfo size={size} songName={ songInfo?.songName || DEFAULT_SONGNAME } singer={ songInfo?.singer || DEFAULT_SINGER }/>
                <LyricsDisplay size={size} lyrics={parseLyric(songInfo?.lyrics)} currentTime={currentTime}/>
                <div className='ops'>
                    <ProgressBar size={size} currentTime={currentTime} totalTime={totalTime} handleChangeCurrentTime={handleChangeCurrentTime}/>
                    <TimeDisplay size={size} currentTime={currentTime} totalTime={totalTime}/>
                    <OperationBar size={size} isMute={isMute} handleChangeVolume={handleChangeVolume} mode={mode} setMode={setMode} handleHiddenSongList={handleHiddenSongList}/>
                </div>
            </div>
            <SongList size={size} songList={songList} hiddenSongList={hiddenSongList} currentSong={currentSong} handleSongListItemClick={handleSongListItemClick}/>
            <audio ref={audioRef} onEnded={handleMusicEnd} onCanPlay={handleAudioOnCanplay} onTimeUpdate={handleTimeUpdate} src={songSrc}></audio>
        </div>
    )
})

export default BONiiiPlayer