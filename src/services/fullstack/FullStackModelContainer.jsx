import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { FullStackModel } from "./fullStackModel";

const FullStackModelContainer = () => {
    return (
        <Canvas>
            <Suspense fallback="loading...">
                <Stage environment="night" intensity={0.5}>
                    <FullStackModel />
                </Stage>
                <OrbitControls enableZoom={false} autoRotate />
                <PerspectiveCamera position={[-1, -1, 1.8]} zoom={0.8} makeDefault />
            </Suspense>
        </Canvas>
    );
};

export default FullStackModelContainer;