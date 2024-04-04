import React, { useState } from "react";
import Numbers from "./Numbers";
import Talker from "./Props0";
import Products from "./Products";
import Title from "./Title";

const colorNames = ['Thistle', 'Khaki', 'Skyblue', 'Lightgreen', 'Lightsalmon'];

export default function Colors() {

    const [color, setColor] = useState('lightblue'); // destructuring
    let inputValue; // will hold the value for setColor

    const handleSubmit = (e) => {
        e.preventDefault(); // prevent form submission
        isColor(inputValue) ? setColor(inputValue) : alert("Color Not Valid"); // update the color state (if exists) with the input value
    };
 
    const handleInputChange = ( {target} ) => {
        inputValue = target.value; // update the inputValue state when input changes
    };
     
    /* works as the same as above ^
      const handleInputChange = (e) => {
        inputValue = e.target.value;
    };
    */

    const isColor = (strColor) => { // function to check if the color exist
        const s = new Option().style;
        s.color = strColor;
        return s.color !== ''; // if does exist, return true
    }

    const divStyle = {backgroundColor: color, padding: "40px"};

    const colorChange = () => {
        return (
            <>
                <form onSubmit={handleSubmit}>
                    <label>Choose background color: <br /></label>
                    <input
                        type="text"
                        id="color"
                        placeholder="Ex: Pink"
                        value={inputValue} // use inputValue for controlled component, so color will only update onSubmit
                        onChange={handleInputChange} // update inputValue state on input change
                    />
                    <br />
                    <button type="submit">Submit</button>
                </form>

                <p>Selected color: {color}</p>
                {colorNames.map((colorName)=> (
                    <button  className="button1"
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
            <div style={divStyle} className="colors">
                <Title />
                <Numbers />
                {colorChange()}
                <Talker />
                <Products />
            </div>
        </>
    )
      
}