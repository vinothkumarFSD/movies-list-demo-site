import React, { useState } from "react";

import styles from './counter.module.css';

const Counter = () => {
    const [count, setCount] = useState(0);

    const [color, setColor] = useState('white');

    const handleInc = () => {
        setCount(count + 1);
    }

    const handleDec = () => {
        setCount(count - 1);
    }

    const Clear = () => {
        setCount(0);
    }

    const colorChange = (e) => {
        setColor(e.target.value);
    }

    return (
        <div className={styles.container}>
            <div style={{
                textAlign: 'center',
                display: "block"
            }}>
                <h2>Count</h2>
                <h1>{count}</h1>
                <button onClick={handleInc} >+</button>{"  "}<button onClick={handleDec}>-</button>
                <button onClick={Clear} >Clear</button>
            </div>
            <div style={{
                backgroundColor: color,
                border: '1px solid',
                height: '300px',
                width: '300px',
                margin: 25,
                display: "inline-block"
            }}></div><br />
            <label htmlFor="color">Change color</label>
            <input type="color" id="color" name="color" onChange={colorChange} />
        </div>
    )
}
export default Counter;