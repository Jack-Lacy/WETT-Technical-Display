import React, {useState} from "react";
import './Toboggan.css'
import Display from "../componants/Display";
import Header from "../componants/Header";

export default function Toboggan() {
    return (
        <>
            <Header></Header>
            <Display model={"full"} maxDistanceComputer={2} maxDistanceMobile={10}></Display>
        </>
    )
}