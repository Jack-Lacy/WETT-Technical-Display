import React, {useState} from "react";
import './Mechanical.css'
import Display from "../componants/Display";
import Header from "../componants/Header";

export default function Mechanical() {
    let [model, setPath] = useState('frame');
    let [maxDistanceComputer, setMaxDistanceComputer] = useState<number>(3);
    let [minDistanceComputer, setMinDistanceComputer] = useState<number>(0.5);
    let [maxDistanceMobile, setMaxDistanceMobile] = useState<number>(3);
    let [minDistanceMobile, setMinDistanceMobile] = useState<number>(0.5);

    const changeModel = (p : string, maxComp : number, minComp : number, maxMob : number, minMob : number) => {
        setPath(p);
        setMaxDistanceComputer(maxComp);
        setMinDistanceComputer(minComp);
        setMaxDistanceMobile(maxMob);
        setMinDistanceMobile(minMob)
        console.log(model);
    }

    return (
        <>
            <Header></Header>
            <div className="buttons">
                <button onClick={() => changeModel('frame', 3, 0.5, 3, 0.5)}>Frame</button>
                <button onClick={() => changeModel('suspension', 0.7, 0.3, 0.7, 0.3)}>Suspension</button>
                <button onClick={() => changeModel('brake', 0.7, 0.3, 0.7, 0.3)}>Brake</button>
                <button onClick={() => changeModel('front-strut', 1, 0.3, 1, 0.3)}>Front Strut</button>
                <button onClick={() => changeModel('steering', 0.7, 0.3, 1.5, 0.5)}>Steering</button>
            </div>
            <Display
                model={model}
                maxDistanceComputer={maxDistanceComputer}
                minDistanceComputer={minDistanceComputer}
                maxDistanceMobile={maxDistanceMobile}
                minDistanceMobile={minDistanceMobile} />
        </>
    )
}