import React, { useEffect, useState } from "react";
import { NO_LYRICS } from "../constant";
import "./index.css"

const LyricsDisplay = ({size, lyrics, currentTime}) => {
    // 当前歌词
    const [currentLyric, setCurrentLyric] = useState("")
    const [currentPosition, setCurrentPosition] = useState(-(0.34 * size))
    
    useEffect(()=>{
        if(lyrics.length > 0){
            // 从后往前，找到第一个当前时间大于歌词时间的
            for(let i = lyrics.length-1; i >= 0; i--){
                const item = lyrics[i]
                if(currentTime > item.time){
                    if(currentLyric !== item.content) setCurrentLyric(item.content)
                    break
                }
            }
            // 计算偏移量
            let j = 0
            while(j < lyrics.length && currentTime > lyrics[j].time) j++
            if(currentPosition !== ((j - 2) * (0.17 * size))) setCurrentPosition((j - 2) * (0.17 * size))
        }
        
    },[currentTime, lyrics, currentLyric, currentPosition])

    return (
        <div className='lyrics-display' style={{height: `${0.55 * size}px`}}>
            <div style={{ transform: `translateY(${-currentPosition}px)`, transition: "all .3s linear" }}>
                {
                    lyrics.length > 0? (lyrics.map((item, index) => {
                        return (
                            <div style={{height: `${0.17 * size}px`, fontSize: `${0.12 * size}px`}} className="lyrics-display-item" key={index}>
                                <span className={currentLyric === item.content ? "lyric-active" : ""}>{item.content}</span>
                            </div>
                        )
                    })):
                    (<div style={{fontSize: `${0.12 * size}px`}} className="lyrics-display-item">
                        <span>{NO_LYRICS}</span>
                    </div>)
                }
            </div>
      </div>
    )
}
export default LyricsDisplay