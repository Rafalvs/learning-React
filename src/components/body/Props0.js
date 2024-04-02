import React from 'react';

export default function Talker() {

    function Button(props) {
        return (
          <button id="dont" onClick={props.onClick}>
            Don't Click!
          </button>
        );
    }

    function handleClick() {

        let alerta = '';

        for (let i = 0; i < 100; i++)
        {
        alerta += 'pipipipópópó ';
        }

        alert(alerta);
	}

  return <Button onClick={handleClick}/>;
}