import React, { useState } from "react";
import Numbers from "./Numbers";
import Talker from "./Props0";
import Products from "./Products";

const colorNames = ['Thistle', 'Khaki', 'Skyblue', 'Lightgreen', 'Lightsalmon'];

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

    const divStyle = {backgroundColor: color, padding: "40px"};

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

                <p>Selected color: {color}</p>
                {colorNames.map((colorName)=> (
                    <button 
                        style={{backgroundColor: colorName, color: "black"}}
                        onClick={() => setColor(colorName)} 
                        key={colorName}>
                        {colorName}                        
      	            </button>
                 ))}
            </>
        )
    }

    return (
        <>
            <div style={divStyle}>
                <Numbers />
                {colorChange()}
                <Talker />
                <Products />
            </div>
        </>
    )
      
}