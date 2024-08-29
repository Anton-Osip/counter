import React, {useCallback, useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/counter/Counter";
import {Settings} from "./components/settings/Settings";


function App() {
    const [minMax, setMinMax] = useState<number[]>([2, 5]);
    const [count, setCount] = useState<number>(minMax[0]);
    const [countError, setCountError] = useState<string[]>(['', '']);
    const [settingsError, setSettingsError] = useState<string>('')

    useEffect(() => {
        setCount(minMax[0])
    }, [minMax])


    const addOne = useCallback<() => void>(() => {
        if (count < minMax[1]) {
            setCount(count + 1)
        }
    }, [count, minMax])

    const resetValue = useCallback<() => void>(() => {
        setCount(minMax[0])
    }, [minMax])


    return (
        <div className = "App">
            <Settings setMinMax = {setMinMax} minMax = {minMax} setCountError = {setCountError}
                      countError = {countError} setSettingsError = {setSettingsError}/>
            <Counter count = {count} minMax = {minMax} addOne = {addOne} resetValue = {resetValue}
                     countError = {countError} settingsError = {settingsError}/>
        </div>
    );
}

export default App;



