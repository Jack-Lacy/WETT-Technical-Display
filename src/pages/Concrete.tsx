import React, {useState} from "react";
import './Concrete.css'
import Display from "../componants/Display";
import Header from "../componants/Header";

export default function Concrete() {
    let [model, setPath] = useState('f1');

    const changeModel = (p : string) => {
        setPath(p)
        console.log(model)
    }

    return (
        <>
            <Header></Header>
            <div className="buttons">
                <button onClick={() => changeModel('f1')}> F1</button>
                <button onClick={() => changeModel('f2')}> F2</button>
                <button onClick={() => changeModel('f3')}> F3</button>
                <button onClick={() => changeModel('f4')}> F4</button>
                <button onClick={() => changeModel('f5')}> F5</button>
                <button onClick={() => changeModel('f6')}> F6</button>
            </div>
            <Display model={model}></Display>
        </>
    )
}