import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { AiModel } from "./aiModel";

const AiModelContainer = () => {
    return (
        <Canvas>
            <Suspense fallback="loading...">
                <Stage environment="night" intensity={10}>
                    <AiModel/>
                </Stage>
                <OrbitControls enableZoom={false} autoRotate />
                <PerspectiveCamera position={[0, 0, 2]} zoom={0.9} makeDefault />
            </Suspense>
        </Canvas>
    );
};

export default AiModelContainer;