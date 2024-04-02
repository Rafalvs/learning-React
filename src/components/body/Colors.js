import React, { useState } from "react";
import Numbers from "./Numbers";
import Talker from "./Props0";
import Products from "./Products";

export default function Colors() {

    const [color, setColor] = useState('lightblue');
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent form submission
        setColor(inputValue); // Update the color state with the input value
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value); // Update the inputValue state when input changes
    };

    const colorChange = () => {
        return (
            <>
                <form onSubmit={handleSubmit}>
                    <label>Choose background color: <br /></label>
                    <input
                        type="text"
                        id="color"
                        placeholder="Ex: Black"
                        value={inputValue} // Use inputValue for controlled component
                        onChange={handleInputChange} // Update inputValue state on input change
                    /> <br />
                    <button type="submit">Submit</button>
                </form>

                <button onClick={()=> setColor('thistle')} className="thistleBttn">Thistle</button>
                <button onClick={()=> setColor("khaki")} className="khakiBttn">Khaki</button>
                <button onClick={()=> setColor("skyblue")} className="sblueBttn">Sky-Blue</button>
                <button onClick={()=> setColor("lightgreen")} className="lgreenBttn">Light-Green</button>
                <button onClick={()=> setColor("lightsalmon")} className="lsalmonBttn">Light-Salmon</button>
                <br />
            </>
        )
    }

    return (
        <>
            <div style={{ backgroundColor: color, padding: "40px"}}>
                <Numbers />
                {colorChange()}
                <Talker />
                <Products />
            </div>
        </>
    )
      
}