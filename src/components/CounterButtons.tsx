import React, {Component} from 'react';
import "./Buttons.module.css";
import {SuperButton} from "./SuperButton";
import {Button, ButtonGroup} from "@material-ui/core";

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
            localStorage.setItem("counterValue",JSON.stringify(props.count))
    }
    const onClickRemove = () => {
        props.setCount(props.minCount)
    }
    return <div>
        <ButtonGroup
            variant="contained"
            disableElevation
            size="large"
            style={{paddingBottom:"5px", paddingTop:"5px"}}
        >
        <Button
            disabled={props.count === props.maxCount || props.error || props.changesMod}
            onClick={onClickAdd}
            color="primary"
        >INC</Button>
        <Button
            disabled={props.count === props.minCount || props.error || props.changesMod}
            onClick={onClickRemove}
            color="primary"
        >RESET</Button>
        </ButtonGroup>
    </div>
}

