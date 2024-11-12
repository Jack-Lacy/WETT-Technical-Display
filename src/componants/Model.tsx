import React, {useEffect} from "react";
import {useGLTF} from "@react-three/drei";

type ModelProps = {
    path: string
}

export default function Model(props: ModelProps) {
    let { scene } = useGLTF(props.path);
    return <primitive object={scene} />;
}