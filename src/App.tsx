import React, {useState} from 'react';
import './App.css';
import Counter from "./Counter";
import Setter from "./Setter";

export type SetterCounterType = {
    count: number,
    setCount: (count: number) => void,
    minCount: number,
    setMinCount: (count: number) => void,
    maxCount: number,
    setMaxCount: (count: number) => void,
    error : boolean
    setError : (error:boolean) => void
    changesMod: boolean
    setChangesMod: (changesMod:boolean) => void
}

function App() {
    let [minCount, setMinCount] = useState<number>(0)
    let [maxCount, setMaxCount] = useState<number>(5)
    let [count, setCount] = useState<number>(minCount)
    let [error, setError] = useState<boolean>(false)
    let [changesMod, setChangesMod] = useState<boolean>(false)
    return (
        <div className={"main"}>
            <Setter
                count={count}
                setCount={setCount}
                minCount={minCount}
                maxCount={maxCount}
                setMinCount={setMinCount}
                setMaxCount={setMaxCount}
                error={error}
                setError={setError}
                changesMod={changesMod}
                setChangesMod={setChangesMod}
                />
            <Counter
                count={count}
                setCount={setCount}
                minCount={minCount}
                maxCount={maxCount}
                setMinCount={setMinCount}
                setMaxCount={setMaxCount}
                error={error}
                setError={setError}
                changesMod={changesMod}
                setChangesMod={setChangesMod}
            />
        </div>
    )
}
export default App;
