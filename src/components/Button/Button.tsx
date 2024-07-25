import React from "react";
import s from './Button.module.css'

type ButtonProps = {
    disabled: boolean
} & React.HTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
    return <button className = {s.button} disabled = {props.disabled}
                   onClick = {props.onClick}>{props.children}</button>
}