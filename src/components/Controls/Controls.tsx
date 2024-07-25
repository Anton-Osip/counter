import React from "react";
import s from './Controls.module.css'


type ControlsProps = {
    children: React.ReactNode;
}

export const Controls: React.FC<ControlsProps> = (props: ControlsProps) => {
    return (
        <div className = {s.controls}>
            {props.children}
        </div>
    )
}