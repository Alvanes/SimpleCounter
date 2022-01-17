import React, {ChangeEvent, useEffect, useState} from 'react';
import {SuperButton} from "./components/SuperButton";
import {SetterCounterType} from "./App";
import "./App.css"

const Setter = (props: SetterCounterType) => {
    let [min, setMin] = useState<number>(0)
    let [max, setMax] = useState<number>(0)

    useEffect(() => {
        if (max <= 0 || max <= min) {
            props.setError(true)
        }
    }, [max])
    useEffect(() => {
        if (min >= max || min < 0) {
            props.setError(true)
        }
    }, [min])

    const setMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.setChangesMod(true)
        setMax(e.currentTarget.valueAsNumber)
        props.setError(false)
    }
    const setMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.setChangesMod(true)
        setMin(e.currentTarget.valueAsNumber)
        props.setError(false)
    }
    const setMaxMinValue = () => {
        props.setMaxCount(max)
        props.setMinCount(min)
        props.setChangesMod(false)
    }
    let errorMessage = props.error ? <div style={{color: "red"}}>Введите корректное значение</div> : ""
    return <div>
        <div>Max <input
            className={props.error ? "inputError" : ""}
            value={max}
            type={"number"}
            onChange={setMaxValue}/></div>
        {errorMessage}
        <div>Min <input
            className={props.error ? "inputError" : ""}
            value={min}
            type={"number"}
            onChange={setMinValue}/></div>
        {errorMessage}
        <SuperButton disabled={props.error} text={"set"} onClick={setMaxMinValue}/>
    </div>
}

export default Setter;