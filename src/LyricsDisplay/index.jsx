import React, { useEffect, useState } from "react";
import "./index.css"

const LyricsDisplay = ({lyrics, currentTime}) => {
    // 当前歌词
    const [currentLyric, setCurrentLyric] = useState("")
    const [currentPosition, setCurrentPosition] = useState(-34)
    
    useEffect(()=>{
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
        if(currentPosition !== (j * 17 - 34)) setCurrentPosition(j * 17 - 34)
    },[currentTime, lyrics, currentLyric, currentPosition])

    return (
        <div className='lyrics-display'>
            <div style={{ transform: `translateY(${-currentPosition}px)`, transition: "all .3s linear" }}>
                {
                    lyrics.map((item, index) => {
                        return (
                            <div className="lyrics-display-item" key={index}>
                                <span className={currentLyric === item.content ? "lyric-active" : ""}>{item.content}</span>
                            </div>
                        )
                    })
                }
            </div>
      </div>
    )
}
export default LyricsDisplay