import React, {Component} from 'react';
import s from './Count.module.css';

type CountPropsType = {
    count: number
    minCount: number
    maxCount: number
    error: boolean
    changesMod: boolean
}

export const Count = (props: CountPropsType) => {
    return <div className={`${props.count === props.maxCount ? s.red : s.text} ${s.text}`}>
        {props.error ?
            <div style={{color: "red"}}>not correct </div> :
            props.changesMod ?
                <div style={{color: "red"}}>press set </div> :
                props.count}
    </div>
}