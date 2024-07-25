import React from "react";
import s from './Settings.module.css'
import {Controls} from "../Controls/Controls";
import {Button} from "../Button/Button";
import {Form} from "../Form/Form";

type SettingsProps = {
    inputMinValue: number | ''
    inputMaxValue: number | ''
    message: string
    inputErrorMin: boolean
    inputErrorMax: boolean

    changeMaxValue: (value: number) => void
    changeMinValue: (value: number) => void
    changeMinMaxValue: () => void
}

export const Settings: React.FC<SettingsProps> = (props: SettingsProps) => {
    return (
        <div className = {s.counter}>
            <Form
                inputMinValue = {props.inputMinValue}
                inputMaxValue = {props.inputMaxValue}
                inputErrorMax = {props.inputErrorMax}
                inputErrorMin = {props.inputErrorMin}
                changeMaxValue = {props.changeMaxValue} changeMinValue = {props.changeMinValue}
            />
            <Controls>
                <Button disabled = {!props.message}
                        onClick = {props.changeMinMaxValue}>Set</Button>
            </Controls>
        </div>
    )
}