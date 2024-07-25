import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {Settings} from "./components/Settings/Settings";
// unCorrect value   enter values and press 'set'
type StoreType = {
    counter: number
    minValue: number,
    maxValue: number,
    error: string
    message: string
    inputMinValue: number | ''
    inputMaxValue: number | ''
    inputErrorMin: boolean
    inputErrorMax: boolean
}

function App() {

    const initialStore: StoreType = {
        counter: 0,
        minValue: 0,
        maxValue: 5,
        inputMaxValue: 5,
        inputMinValue: 0,
        error: '',
        message: '',
        inputErrorMin: false,
        inputErrorMax: false,
    }
    const [store, setStore] = useState<StoreType>(initialStore)

    useEffect(() => {
        if (store.counter < store.minValue) {
            setStore({...store, counter: store.minValue})
        }
    }, [store.minValue])

    useEffect(() => {
        if (store.maxValue !== store.inputMaxValue || store.minValue !== store.inputMinValue) {
            setStore({...store, message: 'enter values and press \'set\''})
        } else {
            setStore({...store, message: ''})
        }
    }, [store.inputMaxValue, store.inputMinValue])


    useEffect(() => {
        const localStorageStore = localStorage.getItem('store')
        if (localStorageStore) {
            setStore({...JSON.parse(localStorageStore)})
        }
    }, []);
    useEffect(() => {
        localStorage.setItem('store', JSON.stringify(store))
    }, [store]);

    const incrementCounter = () => {
        if (store.counter <= store.maxValue) {
            setStore({...store, counter: store.counter + 1})
        }
    }
    const resetCounter = () => {
        setStore({...store, counter: store.minValue})
    }

    const changeMinValue = (value: number) => {
        setStore({...store, inputMinValue: value})
    }
    const changeMaxValue = (value: number) => {
        setStore({...store, inputMaxValue: value})
    }
    const changeMinMaxValue = () => {
        if (store.inputMaxValue && store.inputMinValue >= 0 && typeof store.inputMinValue === 'number') {
            setStore({
                ...store,
                maxValue: store.inputMaxValue,
                minValue: store.inputMinValue,
                message: '',
                inputErrorMin: false,
                inputErrorMax: false,
                error: '',
                counter: store.inputMinValue
            })
        }
        if (store.inputMinValue < 0) {
            setStore({...store, inputErrorMin: true, error: 'unCorrect value '})
        }
        if (store.inputMaxValue <= store.inputMinValue) {
            setStore({...store, inputErrorMax: true, error: 'unCorrect value '})
        }
    }

    return (
        <div className = "App">
            <div className = "container">
                <Settings inputMinValue = {store.inputMinValue}
                          inputMaxValue = {store.inputMaxValue}
                          message = {store.message}
                          inputErrorMin = {store.inputErrorMin}
                          inputErrorMax = {store.inputErrorMax}
                          changeMaxValue = {changeMaxValue}
                          changeMinValue = {changeMinValue}
                          changeMinMaxValue = {changeMinMaxValue}
                />
                <Counter counter = {store.counter}
                         minValue = {store.minValue}
                         maxValue = {store.maxValue}
                         error = {store.error}
                         message = {store.message}
                         incrementCounter = {incrementCounter}
                         resetCounter = {resetCounter}/>
            </div>
        </div>
    );
}

export default App;