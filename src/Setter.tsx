import React, {ChangeEvent, useEffect, useState} from 'react';
import {SuperButton} from "./components/SuperButton";
import {SetterCounterType} from "./App";
import "./App.css"
import {Button, ButtonGroup, TextField, Typography} from "@material-ui/core";

const Setter = (props: SetterCounterType) => {
    useEffect(() => {
        if (props.maxCount <= 0 || props.maxCount <= props.minCount) {
            props.setError(true)
        }
    }, [props.maxCount])
    useEffect(() => {
        if (props.minCount >= props.maxCount || props.minCount < 0) {
            props.setError(true)
        }
    }, [props.minCount])

    const setMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.setChangesMod(true)
        props.setMaxCount(e.currentTarget.valueAsNumber)
        props.setError(false)
    }
    const setMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.setChangesMod(true)
        props.setMinCount(e.currentTarget.valueAsNumber)
        props.setError(false)
    }
    const setMaxMinValue = () => {
        props.setCount(props.minCount)
        localStorage.setItem("minValue", JSON.stringify(props.minCount))
        localStorage.setItem("maxValue", JSON.stringify(props.maxCount))
        props.setChangesMod(false)
    }
    let errorMessage = props.error ? <div style={{color: "red",textAlign:"center"}}>Input isn't correct</div> : ""
    return <div>
        <Typography
            variant={"h6"}
            align={"left"}
            style={{fontWeight: "bold"}}
        >
        <div><TextField
            label={"MAX"}
            error={props.error}
            value={props.maxCount}
            type={"number"}
            onChange={setMaxValue}/></div>
        </Typography>
        {errorMessage}
        <Typography
            variant={"h6"}
            align={"left"}
            style={{fontWeight: "bold"}}
        >
        <div><TextField
            label={"MIN"}
            error={props.error}
            value={props.minCount}
            type={"number"}
            onChange={setMinValue}/></div>
        </Typography>
        {errorMessage}
        <ButtonGroup
            variant={"contained"}
            disableElevation
            size={"small"}
            fullWidth
            style={{paddingBottom:"5px", paddingTop:"5px"}}
        >
        <Button
            disabled={props.error}
            onClick={setMaxMinValue}
            variant="contained"
            color="primary"
            // size="small"
        >set</Button></ButtonGroup>
    </div>
}

export default Setter;