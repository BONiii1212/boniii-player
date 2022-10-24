import React, { useState, useRef } from 'react'
import './index.css'

const Voice = ({handleChangeVolume}) => {
    const preVolumeSize = useRef(0)
    const volumeBar = useRef()
    const [silent, setSilent] = useState(false)
    const [volumeSize, setVolumeSize] = useState(100)

    // 修改静音和从静音中恢复
    const changeSilent = () => {
        if(silent){
            setVolumeSize(preVolumeSize.current)
        }else{
            preVolumeSize.current = volumeSize
            setVolumeSize(0)
        }
        handleChangeVolume(silent? preVolumeSize.current: 0)
        setSilent(!silent)
    }
    // 控制音量大小
    const handleVolumeBarClick = (event) => {
        const target = volumeBar.current
        const barHeight = target.clientHeight
        const slideY = event.clientY
        const barTop = target.getBoundingClientRect().top
        let volume = (barTop + barHeight - slideY ) / barHeight * 100
        if(volume > 100){
            volume = 100
        }else if(volume < 0){
            volume = 0
        }
        setVolumeSize(volume)
        setSilent(volume === 0? true: false)
        handleChangeVolume(volume)
    }

    return (
        <div className='voice'>
            <div className='voice-bar'>
                {silent? <span className='icon-font' onClick={changeSilent}>&#xe650;</span>:<span className='icon-font' onClick={changeSilent}>&#xeca5;</span>}
            </div>
            <div className='volume-bar' ref={volumeBar} onClick={handleVolumeBarClick}>
                <div className='volume'>
                    <div className='real-volume' style={{height: volumeSize + '%'}}></div>
                </div>
            </div>
        </div>
    )
}
export default Voice