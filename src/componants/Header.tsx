import React from "react";
import './Header.css'
import {useNavigate} from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();

    const switchToSup = () => {
        navigate('/SuperStructure');
    }

    const switchToCon = () => {
        navigate('/Concrete');
    }

    const switchToBog = () => {
        navigate('/');
    }

    return (
        <div className="header">
            <div className="title-container">
                <img className="logo" src="/resources/WETTlogo.png" alt={"logo"}/>
                <h1 className="title">WETT</h1>
            </div>
            <div className="navButtons">
                <button className="pageSwitch" onClick={() => switchToBog()}>Toboggan</button>
                <button className="pageSwitch" onClick={() => switchToCon()}>Concrete</button>
                <button className="pageSwitch" onClick={() => switchToSup()}>Super Structure</button>
            </div>
        </div>
    )
}