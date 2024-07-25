import React from "react";
import s from './Display.module.css'

type DisplayProps = {
    children: React.ReactNode
}

export const Display: React.FC<DisplayProps> = (props: DisplayProps) => {
    return (
        <div className = {s.display}>
            {props.children}
        </div>
    )
}