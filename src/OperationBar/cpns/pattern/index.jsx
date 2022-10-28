import React from "react"
import { LOOP, ORDER } from "../../../constant"
import './index.css'

const Pattern = ({size, mode, setMode}) => {

    const handleLoopClick = () => {
        setMode(mode === LOOP? ORDER: LOOP)
    }

    return (
        <div className="play-patten" onClick={handleLoopClick}>
            {mode === LOOP && <span style={{fontSize: `${0.16 * size}px`}} className="icon-font">&#xea76;</span>}
            {mode === ORDER && <span style={{fontSize: `${0.16 * size}px`}} className="icon-font">&#xea75;</span>}
        </div>
    )
}

export default Pattern