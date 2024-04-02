import React, { useState } from "react";

export default function Numbers(){

const [number, setNumber] = useState(0);

function addFour () {
    return number + 4;
}

function minusFour ()
{
    return number - 4;
}

const NumberCount = () => {
    return (
        <>
            <p>The number is: {number}</p>
            <button onClick={() => setNumber(minusFour)}>Minus Four</button>
            <button onClick={() => setNumber(number - 1)}>Minus</button>
            <button onClick={() => setNumber(0)}>Zero</button>
            <button onClick={() => setNumber(number + 1)}>Plus</button>
            <button onClick={() => setNumber(addFour)}>Add Four</button>
        </>
    )
}

return (
    <>
        <NumberCount />
    </>
)
}