import React, {useState} from "react";
import './Superstructure.css'
import Display from "../componants/Display";
import Header from "../componants/Header";

export default function Superstructure() {
    let [model, setPath] = useState('f1');

    const changeModel = (p : string) => {
        setPath(p)
        console.log(model)
    }

    return (
        <>
            <Header></Header>
            <div className="buttons">
                <button onClick={() => changeModel('f1')}> F1 </button>
                <button onClick={() => changeModel('f2')}> F2 </button>
                <button onClick={() => changeModel('f2')}> F3 </button>
            </div>
            <Display model={model}></Display>
        </>
    )
}