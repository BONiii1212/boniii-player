import React from "react"
import './index.css'

const Pattern = ({mode, setMode}) => {

    const handleLoopClick = () => {
        setMode(mode==='loop'?'in_order':'loop')
    }

    return (
        <div onClick={handleLoopClick}>
            {mode === 'loop' && <span className="icon-font">&#xea76;</span>}
            {mode === 'in_order' && <span className="icon-font">&#xea75;</span>}
        </div>
    )
}

export default Pattern