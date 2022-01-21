import React, {useEffect, useState} from 'react';
import './App.css';
import Counter from "./Counter";
import Setter from "./Setter";
import {Container, Grid, Paper} from "@material-ui/core";

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
    let [maxCount, setMaxCount] = useState<number>(JSON.parse(localStorage.getItem('maxValue') || "5"))
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
        </div>
    )
}

export default App;
