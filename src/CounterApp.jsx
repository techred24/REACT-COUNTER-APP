import { useState } from 'react';
import PropTypes from 'prop-types';
import React from 'react';
export function CounterApp({value}) {
    const [ counter, setCounter ] = useState(value);
    function handleApp(event, handler) {
        // setCounter(counter+1);
        setCounter((c) => c + 1);
    }
    const handleSubstract = () => setCounter(counter-1);
    const handleReset = () => setCounter(value);
    return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>

            <button onClick={handleApp}> +1 </button>
            <button onClick={handleSubstract}> -1 </button>
            <button aria-label='btn-reset' onClick={handleReset}> Reset </button>
        </>
    );
}
CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}