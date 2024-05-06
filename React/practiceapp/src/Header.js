// Functional Component
import React from 'react'
import "./Header.css" // External CSS

import Styles from './HeaderFile.module.css'

function Header({ name }) {
    return (
        // inline CSS
        // <h1 style={{ background: "red", fontSize: "88px" }} >Welcome, {name}</h1>

        // External CSS
        <h1 className={"text"}>Welcome, {name}</h1>

        // Module style sheet 
        // <h1 className={Styles.header_text}>Welcome, {name}</h1>
    )
}

export default Header;



// ComponentName_whatyouaredoing
// header_login_container
