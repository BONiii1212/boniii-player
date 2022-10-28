import React from "react"
import { formatDate } from "../utils /format"
import "./index.css"

const TimeDisplay = ({size, currentTime, totalTime}) => {
    return (
        <div style={{fontSize: `${0.12 * size}px`, paddingLeft: `${0.02 * size}px`}} className="time-line">
            <span>{formatDate(currentTime, "mm:ss")}</span>
            <span>/</span>
            <span>{formatDate(totalTime,"mm:ss")}</span>
        </div>
    )
}

export default TimeDisplay