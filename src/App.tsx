import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";


function App() {

    const title = 'Counter'

    return (
        <div className="App">
            <Counter title={title}/>
        </div>
    );
}

export default App;
