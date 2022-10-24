import "./index.css"
import React, {useEffect, useRef, useState} from 'react'

const ProgressBar = ({currentTime, totalTime, handleChangeCurrentTime}) => {
    const progressRef = useRef()
    const isClick = useRef(false)
    const isDraping = useRef(false)

    const [playedWidth, setPlayedWidth] = useState(0)

    // 点击
    const handleProgressBarMouseDown = (event) =>{
        isClick.current = true
        let target = progressRef.current
        const barWidth = target.clientWidth
        // 点击后修改playedWidth
        setPlayedWidth(event.nativeEvent.offsetX / barWidth * 100)
        window.addEventListener('mousemove',mouseMove)
    }

    const mouseMove = (event) =>{
        if(isClick.current){
            isDraping.current = true
            let target = progressRef.current
            const barWidth = target.clientWidth
            // 鼠标距离左屏幕的距离
            const slideX = event.clientX
            // 滚动组件距左屏幕的位置
            const progressLeft = target.getBoundingClientRect().left;
            const progressRight = progressLeft + target.offsetWidth
            // 在允许移动的范围内
            if(slideX <= progressRight && slideX >= progressLeft){
                setPlayedWidth((slideX - progressLeft) / barWidth * 100)
            }
        }
    }

    useEffect(()=> {
        if(isClick.current === false) return
        const mouseUp = function(){
            if(isClick.current){
                isClick.current = false
                isDraping.current = false
                window.removeEventListener('mousemove', mouseMove)
                handleChangeCurrentTime(playedWidth / 100 * totalTime / 1000)
            }
        }
        window.addEventListener('mouseup', mouseUp)
        return ()=>{
            window.removeEventListener('mouseup', mouseUp)
        }
    },[playedWidth, totalTime, handleChangeCurrentTime])

    useEffect(()=>{
        if(!isClick.current && !isDraping.current){
            setPlayedWidth(currentTime / totalTime * 100)
        }
    },[currentTime, totalTime])
    return (
        <div ref={progressRef} className="progress-bar-wrap" onMouseDown={handleProgressBarMouseDown}>
            <div className="progress-bar">
                {/* 已播放部分进度条 */}
                <div style={{ width: `${playedWidth}%` }} className="progress-played"></div>
                {/* 已下载部分进度条 */}
                <div className="progress-loaded"></div>
            </div>
        </div>
    )
}
export default ProgressBar