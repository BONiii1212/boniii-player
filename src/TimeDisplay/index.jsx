import React from "react"
import { formatDate } from "../utils /format"
import "./index.css"

const TimeDisplay = ({currentTime, totalTime}) => {
    return (
        <div className="time-line">
            <span>{formatDate(currentTime, "mm:ss")}</span>
            <span>/</span>
            <span>{formatDate(totalTime,"mm:ss")}</span>
        </div>
    )
}

export default TimeDisplay