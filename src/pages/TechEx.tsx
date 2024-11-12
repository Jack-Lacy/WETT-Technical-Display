import React, {useState} from "react";
import './TechEx.css'
import Display from "../componants/Display";
import Header from "../componants/Header";

export default function TechEx() {
    let [model, setPath] = useState('full');

    const changeModel = (p : string) => {
        setPath(p)
        console.log(model)
    }

    return (
        <>
            <Header></Header>
            <div className="buttons">
                <button onClick={() => changeModel('full')}> Bog </button>
                <button onClick={() => changeModel('j')}> J </button>
                <button onClick={() => changeModel('j-coloured')}> J Coloured </button>
            </div>
            <Display model={model}></Display>
        </>
    )
}