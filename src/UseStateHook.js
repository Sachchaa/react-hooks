import React, { useState } from 'react'

const UseStateHook = () => {
    const [count, setCount] = useState(0)

    const incrementCount = () => {
        setCount(prevCount => prevCount + 1)
    }

    const decrementCount = () => {
        setCount(prevCount => prevCount - 1)
    }

    return (
        <>
            <button onClick={decrementCount}>-</button>
            <span>{count}</span>
            <button onClick={incrementCount}>+</button>
        </>
    );
}

export default UseStateHook
