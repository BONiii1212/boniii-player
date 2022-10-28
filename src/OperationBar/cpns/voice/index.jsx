import React, { useState, useRef, useEffect } from 'react'
import './index.css'

const Voice = ({size, isMute, handleChangeVolume}) => {
    const preVolumeSize = useRef(isMute?100 :0)
    const volumeBar = useRef()
    const [silent, setSilent] = useState(isMute)
    const [volumeSize, setVolumeSize] = useState(isMute?0 :100)

    useEffect(()=>{
        if(isMute){
            handleChangeVolume(0)
        }
    }, [])
    
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
            <div className='voice-bar' style={{fontSize: `${0.16 * size}px`}}>
                {silent? <span className='icon-font' onClick={changeSilent}>&#xe650;</span>:<span className='icon-font' onClick={changeSilent}>&#xeca5;</span>}
            </div>
            <div style={{width: `${0.3 * size}px`}} className='volume-bar' ref={volumeBar} onClick={handleVolumeBarClick}>
                <div style={{width: `${0.08 * size}px`, borderRadius: `${0.05 * size}px`}} className='volume'>
                    <div className='real-volume' style={{height: volumeSize + '%', width: `${0.08 * size}px`, borderRadius: `${0.05 * size}px`}}></div>
                </div>
            </div>
        </div>
    )
}
export default Voice