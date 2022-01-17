import React from 'react';
import {Count} from "./components/Count";
import {CounterButtons} from "./components/CounterButtons";
import {SetterCounterType} from "./App";

const Counter = (props: SetterCounterType) => {
    return <div className={"count"}>
        <Count
            error={props.error}
            count={props.count}
            maxCount={props.maxCount}
            minCount={props.minCount}
            changesMod={props.changesMod}/>
        <CounterButtons
            error={props.error}
            count={props.count}
            setCount={props.setCount}
            maxCount={props.maxCount}
            minCount={props.minCount}
            changesMod={props.changesMod}/>
    </div>

}

export default Counter;