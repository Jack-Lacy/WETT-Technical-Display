import React, {useState} from "react";
import './Concrete.css'
import Display from "../componants/Display";
import Header from "../componants/Header";

export default function Concrete() {
    let [model, setPath] = useState('f1');
    let [macDistanceComputer, setMacDistanceComputer] = useState<number>(1);
    let [maxDistanceMobile, setMaxDistanceMobile] = useState<number>(2);

    const changeModel = (p : string, maxComp : number, maxMob : number) => {
        setPath(p);
        setMacDistanceComputer(maxComp);
        setMaxDistanceMobile(maxMob);
        console.log(model);
    }

    return (
        <>
            <Header></Header>
            <div className="buttons">
                <button onClick={() => changeModel('f1', 1, 2)}> F1</button>
                <button onClick={() => changeModel('f2', 1, 2)}> F2</button>
                <button onClick={() => changeModel('f3', 1, 2)}> F3</button>
                <button onClick={() => changeModel('f4', 1, 2)}> F4</button>
                <button onClick={() => changeModel('f5', 1, 2)}> F5</button>
                <button onClick={() => changeModel('f6', 1, 2)}> F6</button>
            </div>
            <Display model={model} maxDistanceMobile={maxDistanceMobile} maxDistanceComputer={macDistanceComputer}></Display>
        </>
    )
}