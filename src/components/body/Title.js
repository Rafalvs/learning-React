import React, { useState, useEffect } from 'react';
 
export default function PageTitle() {
  const [name, setName] = useState('');
  let newTitle;
 
  useEffect(() => {
    document.title = `${name}`;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setName(newTitle);
  }

    const handleChange = ({ target }) => {
    newTitle = target.value;
  }
 
  return (
    <div className='title'>
      <p>Use the input field below to rename this page!</p>
      <input onChange={handleChange} value={newTitle} type='text' />
      <br />
      <button type='submit' onClick={handleSubmit}>Rename</button>
    </div>
  );
}
