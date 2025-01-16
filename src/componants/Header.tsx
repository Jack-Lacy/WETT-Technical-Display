import React from "react";
import './Header.css'
import {useNavigate} from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();

    const switchToDAQ = () => {
        navigate('/DAQ');
    }

    const switchToTechEx = () => {
        navigate('/');
    }

    return (
        <div className="header">
            <img className="logo" src="/WETT-Technical-Display/resources/WETTlogo.png" alt={"logo"}/>
            <h1 className="title">WETT</h1>
            <div className = "navButtons">
                <button className="pageSwitch" onClick={() => switchToTechEx()}>Tech-Ex Display</button>
                <button className="pageSwitch" onClick={() => switchToDAQ()}>Data Aquisition</button>
            </div>
        </div>
    )
}