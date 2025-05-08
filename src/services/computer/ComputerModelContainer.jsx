import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { Stage } from '@react-three/drei'
import { ComputerModel } from './ComputerModel'
import { OrbitControls,PerspectiveCamera } from '@react-three/drei'
function ComputerModelContainer() {
    return (
        <Canvas>
            <Suspense fallback="loading...">
                <Stage environment="night" intensity={0.5}>
                    <ComputerModel />
                </Stage>
                <OrbitControls enableZoom={false} autoRotate />
                <PerspectiveCamera position={[-1, 0, 1.8]} zoom={0.8} makeDefault />
            </Suspense>
        </Canvas>
    )
}

export default ComputerModelContainer