import React from "react";
import s from './Progressbar.module.css'

type ProgressbarProps = {
    fill: number
}

export const Progressbar: React.FC<ProgressbarProps> = (props: ProgressbarProps) => {
    return (
        <div className = {s.progressbar}>
            <div className = {s.progressbar__fill} style = {{width: props.fill + '%'}}></div>
        </div>
    )
}