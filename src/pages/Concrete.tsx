import React, {useState} from "react";
import './Concrete.css'
import Display from "../componants/Display";
import Header from "../componants/Header";

export default function Concrete() {
    let [model, setPath] = useState('f1');
    let [maxDistanceComputer, setMaxDistanceComputer] = useState<number>(1);
    let [minDistanceComputer, setMinDistanceComputer] = useState<number>(0.5);
    let [maxDistanceMobile, setMaxDistanceMobile] = useState<number>(2);
    let [minDistanceMobile, setMinDistanceMobile] = useState<number>(0.5);
    let [activeFront, setActiveFront] = useState<boolean>(false);
    let [activeBack, setActiveBack] = useState<boolean>(false);

    const changeModel = (p : string, maxComp : number, minComp : number, maxMob : number, minMob : number) => {
        setPath(p);
        setMaxDistanceComputer(maxComp);
        setMinDistanceComputer(minComp);
        setMaxDistanceMobile(maxMob);
        setMinDistanceMobile(minMob)
        console.log(model);
    }

    const toggleFront = () => {
        setActiveFront(!activeFront);
    }

    const toggleBack = () => {
        setActiveBack(!activeBack);
    }

    return (
        <>
            <Header></Header>
            <div className="buttons">
                <button className={activeFront ? 'active' : 'innactive'} onClick={() => toggleFront()}>Front Skiis</button>
                {activeFront ?
                    <>
                        <button onClick={() => changeModel('f1', 1, 0.5, 2, 0.5)}>Angle</button>
                        <button onClick={() => changeModel('f2', 1, 0.5, 2, 0.5)}>Single Keel</button>
                        <button onClick={() => changeModel('f3', 1, 0.5, 2, 0.5)}>Fin (Selected)</button>
                        <button onClick={() => changeModel('f4', 1, 0.5, 2, 0.5)}>Double Knotch</button>
                        <button onClick={() => changeModel('f5', 1, 0.5, 2, 0.5)}>Assymetric Angle</button>
                        <button onClick={() => changeModel('f6', 1, 0.5, 2, 0.5)}>Assymetric Knotch</button>
                    </>
                    : null
                }
                <button className={activeBack ? 'active' : 'innactive'} onClick={() => toggleBack()}>Back Skiis</button>
                {activeBack ?
                    <>
                        <button onClick={() => changeModel('b1', 1, 0.5, 2, 0.5)}>Angle</button>
                        <button onClick={() => changeModel('b2', 1, 0.5, 2, 0.5)}>Single Keel</button>
                        <button onClick={() => changeModel('b3', 1, 0.5, 2, 0.5)}>Double Keel</button>
                        <button onClick={() => changeModel('b4', 1, 0.5, 2, 0.5)}>Double Knotch (Selected)</button>
                        <button onClick={() => changeModel('b5', 1, 0.5, 2, 0.5)}>Ruffle</button>
                    </>
                    : null
                }

            </div>
            <Display
                model={model}
                maxDistanceComputer={maxDistanceComputer}
                minDistanceComputer={minDistanceComputer}
                maxDistanceMobile={maxDistanceMobile}
                minDistanceMobile={minDistanceMobile}/>
        </>
    )
}