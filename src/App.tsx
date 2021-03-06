import React, {useState} from 'react';
import './App.css';
import './testingEffects/Hover.css'
import './testingEffects/Loader.css'
import './testingEffects/toogleCheckbox.css'
import Counter from "./Counter";
import Setter from "./Setter";
import {Container, Grid, Paper} from "@material-ui/core";
import CurrentDate from "./components/CurrentDate";

export type SetterCounterType = {
    count: number,
    setCount: (count: number) => void,
    minCount: number,
    setMinCount: (count: number) => void,
    maxCount: number,
    setMaxCount: (count: number) => void,
    error: boolean
    setError: (error: boolean) => void
    changesMod: boolean
    setChangesMod: (changesMod: boolean) => void
}

function App() {
    let [minCount, setMinCount] = useState<number>(JSON.parse(localStorage.getItem('minValue') || "0"))
    let [maxCount, setMaxCount] = useState<number>(JSON.parse(localStorage.getItem('maxValue') || "0"))
    let [count, setCount] = useState<number>(JSON.parse(localStorage.getItem('counterValue') || "0"))
    let [error, setError] = useState<boolean>(false)
    let [changesMod, setChangesMod] = useState<boolean>(false)
    return (
        <div className={"main"}>

            <Container fixed>
                <Grid container
                      spacing={4}
                      direction="row"
                      justifyContent="center"
                      alignItems="center">
                    <Grid item>
                        <Paper elevation={3}>
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
                            /> </Paper> </Grid>
                    <Grid item>
                        <Paper elevation={3}>
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
                            /></Paper></Grid>

                </Grid>
            </Container>

            <div className={"time"}>
                <input type={"checkbox"}/>
                <div className={"loader"}>
                    <h1>Loading...</h1>
                </div>
                <div className={"hoverContainer"}>
                    <h2>Hover this</h2>
                </div>
                <CurrentDate/>
            </div>

        </div>
    )
}

export default App;
