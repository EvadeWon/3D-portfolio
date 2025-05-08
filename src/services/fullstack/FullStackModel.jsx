import { useGLTF } from '@react-three/drei';

export function FullStackModel(props) {
    const gltf = useGLTF('/fullStack.glb');
    return (
        <primitive object={gltf.scene} {...props} />
    );
}
