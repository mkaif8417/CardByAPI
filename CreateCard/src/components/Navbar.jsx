import React from "react";


const Navbar=()=>{
    return(
       <nav>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
        <input type="text" className="input" placeholder="Search here" />
        <button className="btn"> Search</button>
        </ul>
       </nav>
    )
}

export default Navbar