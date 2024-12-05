/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 public/models/text./models/text/glimpses.glb 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function GlimpsesText(props) {
  const { nodes, materials } = useGLTF('./models/text/glimpses.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Curve002.geometry} material={materials['Material.001']} position={[0, 0, 0]} />
    </group>
  )
}

useGLTF.preload('./models/text/glimpses.glb')