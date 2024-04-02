import { useContext } from "react";
import Context from "./Context";

export default function Header() {

    const userData = useContext(Context)

    return (
        <nav>
            <ul className="nav-links">
                <li><a href="Options">Options</a></li>
                <li><div id="logo"><a href="/">TESTS</a></div></li>
                <li><a href="Profile">Profile</a></li>  
            </ul>

            <div className="profileBox">
                <h3 id="username">{userData.username}<br /></h3> 
                <img id="profileImg" alt="profileImg" src={userData.profilePic}></img>
            </div>
            
        </nav>
    )
}