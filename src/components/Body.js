import Router from './Router';
import React from 'react';
import Context from './Context';
import profileImg from '../../src/assets/imgs/orko.jpg'

export default function Body() {

    const userInfo = {
        username: "orko",
        email: "rfl@gmail.com",
        loggedIn: true,
        profilePic: profileImg
    }

return (
    <>  
        <Context.Provider value={userInfo}>
            <Router />
        </Context.Provider>
    </>
    );
}; 