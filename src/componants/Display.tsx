import React, {useEffect, useState} from "react";
import './Display.css'
import {OrbitControls} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
import Model from "./Model";

type DisplayProps = {
    model: string
}

export default function Display(props: DisplayProps) {
    const [currentModel, setCurrentModel] = useState(<Model path="/WETT-Technical-Display/resources/final_assembly.glb" />);

    useEffect(() => {
        if (props.model === 'full') {
            setCurrentModel(<Model path="/WETT-Technical-Display/resources/final_assembly.glb" />);
        } else if (props.model === 'j') {
            setCurrentModel(<Model path="/WETT-Technical-Display/resources/jack.glb" />);
        } else if (props.model === 'j-coloured') {
            setCurrentModel(<Model path="/WETT-Technical-Display/resources/JACKC.GLB" />);
        }
    }, [props.model]);

    return (
        <div className="display">
            <Canvas className="canvas" style={{ height: '90vh' }} key={props.model}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 5]} />
                {currentModel}
                <OrbitControls minDistance={1} maxDistance={window.innerWidth > 500 ? 3 : 10} />
            </Canvas>
        </div>
    );
}
