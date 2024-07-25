import React from "react";
import s from './Counter.module.css'
import {Display} from "../Display/Display";
import {Progressbar} from "../Progressbar/Progressbar";
import {Controls} from "../Controls/Controls";
import {Button} from "../Button/Button";

type CounterProps = {
    counter: number
    minValue: number
    maxValue: number
    error: string
    message: string

    incrementCounter: () => void
    resetCounter: () => void
}

export const Counter: React.FC<CounterProps> = (props: CounterProps) => {

    const incrementCounterHandler = () => {
        props.incrementCounter()
    }
    const resetCounterHandler = () => {
        props.resetCounter()
    }

    return (
        <div className = {s.counter}>
            <Display>
                {!props.error && !props.message && <p className = {s.currentValue}>{props.counter}</p>}
                {props.error && <p className = {s.currentValue + ' ' + s.currentValueError}>{props.error}</p>}
                {props.message && !props.error && <p className = {s.currentValue + ' ' + s.message}>{props.message}</p>}
            </Display>
            <Progressbar fill = {100 * (props.counter - props.minValue) / (props.maxValue - props.minValue)}/>
            <Controls>
                <Button disabled = {!!props.error || props.maxValue === props.counter || !!props.message}
                        onClick = {incrementCounterHandler}>Inc</Button>
                <Button disabled = {!!props.error || props.counter === props.minValue}
                        onClick = {resetCounterHandler}>Reset</Button>
            </Controls>
        </div>
    )
}