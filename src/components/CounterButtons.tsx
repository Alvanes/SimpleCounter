import React, {Component} from 'react';
import "./Buttons.module.css";
import {SuperButton} from "./SuperButton";

export type CounterButtonsPropsType = {
    count: number,
    setCount: (count: number) => void
    maxCount : number
    minCount : number
    error: boolean
    changesMod : boolean
}

export const CounterButtons = (props: CounterButtonsPropsType) => {
    const onClickAdd = () => {
        if (props.count <= props.maxCount)
            props.setCount(props.count + 1)
    }
    const onClickRemove = () => {
        props.setCount(props.minCount)
    }
    return <div>
        <SuperButton
            text={"INC"}
            disabled={props.count === props.maxCount || props.error || props.changesMod}
            onClick={onClickAdd}
        />
        <SuperButton
            text={"RESET"}
            disabled={props.count === props.minCount || props.error}
            onClick={onClickRemove}
        />
    </div>
}

