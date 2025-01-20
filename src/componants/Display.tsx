import React, {useEffect, useState} from "react";
import './Display.css'
import {OrbitControls} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
import Model from "./Model";

type DisplayProps = {
    model: string
    maxDistanceMobile: number
    maxDistanceComputer: number
}

export default function Display(props: DisplayProps) {
    const [currentModel, setCurrentModel] = useState(<Model path="/WETT-Technical-Display/resources/final_assembly.glb" />);

    useEffect(() => {
        switch (props.model) {
            case 'full':
                setCurrentModel(<Model path="/WETT-Technical-Display/resources/final_assembly.glb"/>);
                break;
            case 'f1':
                setCurrentModel(<Model path="/WETT-Technical-Display/resources/concrete/f1.glb"/>);
                break;
            case 'f2':
                setCurrentModel(<Model path="/WETT-Technical-Display/resources/concrete/f2.glb"/>);
                break;
            case 'f3':
                setCurrentModel(<Model path="/WETT-Technical-Display/resources/concrete/f3.glb"/>);
                break;
            case 'f4':
                setCurrentModel(<Model path="/WETT-Technical-Display/resources/concrete/f4.glb"/>);
                break;
            case 'f5':
                setCurrentModel(<Model path="/WETT-Technical-Display/resources/concrete/f5.glb"/>);
                break;
            case 'f6':
                setCurrentModel(<Model path="/WETT-Technical-Display/resources/concrete/f6.glb"/>);
                break;
        }
    }, [props.model]);

    return (
        <div className="display">
            <Canvas className="canvas" style={{ height: '90vh' }} key={props.model}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 5]} />
                {currentModel}
                <OrbitControls autoRotate={true} minDistance={0.5} maxDistance={window.innerWidth > 500 ? props.maxDistanceComputer : props.maxDistanceMobile} />
            </Canvas>
        </div>
    );
}
