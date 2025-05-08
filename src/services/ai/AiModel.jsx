import { useGLTF } from '@react-three/drei';
import { useEffect } from 'react';

export function AiModel(props) {
    const gltf = useGLTF('/aiModel.glb');
    return (
        <primitive object={gltf.scene} {...props} />
    );
}
