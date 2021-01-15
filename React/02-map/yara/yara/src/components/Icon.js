
import './Icon.css';
import React, { useState } from 'react';

function Icon(props) {
    //const price = useState(0)
    //const {[counter, setCounter] [price,setCounter]} = useState(0)

    const [counter, setCounter] = useState(0)
    const handleClick = e => {

        setCounter(counter + 1)
        //setCounter(price+10)
        console.log('click', counter)
        // console.log(price+10)

    }

    return (
        <div className="icon">
            <button onClick={handleClick}>{props.title} x{counter}</button>

        </div>

    );
}
export default Icon
/*
img
button
img
button
*/