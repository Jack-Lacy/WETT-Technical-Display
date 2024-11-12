import React from "react";
import './Header.css'

export default function Header() {
    return (
        <div className="header">
            <img className = "logo" src="/resources/WETTlogo.png" alt={"logo"}/>
            <h1 className = "title">WETT</h1>
            <button className = "pageSwitch">Data Aquisition</button>
        </div>
    )
}