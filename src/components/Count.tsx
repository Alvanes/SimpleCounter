import React, {Component, useEffect} from 'react';
import s from './Count.module.css';
import {Typography} from "@material-ui/core";

type CountPropsType = {
    count: number
    minCount: number
    maxCount: number
    error: boolean
    changesMod: boolean
    setCount: (count: number) => void
}

export const Count = (props: CountPropsType) => {
    useEffect(() => {
        localStorage.setItem("counterValue", JSON.stringify(props.count))
    }, [props.count])
    // useEffect(()=>{
    //     let localCount = localStorage.getItem("counterValue")
    //     if (localCount) props.setCount(JSON.parse(localCount))
    // },[])
    return <div className={`${props.count === props.maxCount ? s.red : s.text} ${s.text}`}>
        <Typography
            variant={"h5"}
            align={"center"}
            style={{fontWeight: "bold"}}
        >
        {props.error ?
            <div style={{color: "red"}}>not correct </div> :
            props.changesMod ?
                <div style={{color: "red"}}>press set </div> :
                props.count}
            </Typography>
    </div>
}