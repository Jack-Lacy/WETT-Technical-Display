import React, {useEffect, useState} from "react";
import './Display.css'
import {OrbitControls} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
import Model from "./Model";

type DisplayProps = {
    model: string
    maxDistanceMobile: number
    minDistanceMobile: number
    maxDistanceComputer: number
    minDistanceComputer: number
}

export default function Display(props: DisplayProps) {
    const [currentModel, setCurrentModel] = useState(<Model path="/WETT-Technical-Display/resources/final_assembly.glb" />);

    useEffect(() => {
        switch (props.model) {
            case 'full':
                setCurrentModel(<Model path="/resources/final_assembly.glb"/>);
                break;
            case 'f1':
                setCurrentModel(<Model path="/resources/concrete/f1.glb"/>);
                break;
            case 'f2':
                setCurrentModel(<Model path="/resources/concrete/f2.glb"/>);
                break;
            case 'f3':
                setCurrentModel(<Model path="/resources/concrete/f3.glb"/>);
                break;
            case 'f4':
                setCurrentModel(<Model path="/resources/concrete/f4.glb"/>);
                break;
            case 'f5':
                setCurrentModel(<Model path="/resources/concrete/f5.glb"/>);
                break;
            case 'f6':
                setCurrentModel(<Model path="/resources/concrete/f6.glb"/>);
                break;
            case 'b1':
                setCurrentModel(<Model path="/resources/concrete/b1.glb"/>);
                break;
            case 'b2':
                setCurrentModel(<Model path="/resources/concrete/b2.glb"/>);
                break;
            case 'b3':
                setCurrentModel(<Model path="/resources/concrete/b3.glb"/>);
                break;
            case 'b4':
                setCurrentModel(<Model path="/resources/concrete/b4.glb"/>);
                break;
            case 'b5':
                setCurrentModel(<Model path="/resources/concrete/b5.glb"/>);
                break;
            case 'frame':
                setCurrentModel(<Model path="/resources/super/frame_+_additions.glb"/>);
                break;
            case 'suspension':
                setCurrentModel(<Model path="/resources/super/independent_assembly.glb"/>);
                break;
        }
    }, [props.model]);

    return (
        <div className="display">
            <Canvas className="canvas" style={{ height: '85vh' }} key={props.model}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 5]} />
                {currentModel}
                <OrbitControls
                    autoRotate={true}
                    minDistance={window.innerWidth > 560 ? props.minDistanceComputer : props.minDistanceMobile}
                    maxDistance={window.innerWidth > 560 ? props.maxDistanceComputer : props.maxDistanceMobile} />
            </Canvas>
        </div>
    );
}
