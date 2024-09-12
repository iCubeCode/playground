import React from 'react'

import { useGLTF } from '@react-three/drei'

function Model(props) {

    const { scene } = useGLTF('/shoes.glb')

    return (
        <primitive object={scene} {...props} />
    )
}

export default Model