import React, {ChangeEvent} from "react";
import s from './Form.module.css'


type FormProps = {
    inputMinValue: number | ''
    inputMaxValue: number | ''
    inputErrorMin: boolean
    inputErrorMax: boolean

    changeMaxValue: (value: number) => void
    changeMinValue: (value: number) => void
}

export const Form: React.FC<FormProps> = (props: FormProps) => {

    const onChangeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeMinValue(+e.currentTarget.value)
    }
    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeMaxValue(+e.currentTarget.value)

    }
    return (
        <form className = {s.form}>
            <label className = {s.label} htmlFor = "max">Max value</label>
            <input
                id = {'max'}
                type = "number"
                placeholder = {'Max value'}
                className = {props.inputErrorMax ? s.input + ' ' + s.inputError : s.input}
                value = {props.inputMaxValue}
                onChange = {onChangeMaxValue}/>
            <label className = {s.label} htmlFor = "min">Min value</label>
            <input
                id = {'min'}
                type = "number"
                placeholder = {'Min value'}
                className = {props.inputErrorMin ? s.input + ' ' + s.inputError : s.input}
                value = {props.inputMinValue}
                onChange = {onChangeMinValue}/>
        </form>
    )
}



