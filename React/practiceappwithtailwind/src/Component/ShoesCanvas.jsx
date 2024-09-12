import React from 'react'

import { Stage, PresentationControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Model from './Model'

function ShoesCanvas() {
    return (
        <Canvas style={{ width: "100%", zIndex: "100" }}>
            <PresentationControls rotation={[0, -1.5, 0]} speed={1}>
                <Stage>
                    <Model />
                </Stage>
            </PresentationControls>
        </Canvas>
    )
}

export default ShoesCanvas