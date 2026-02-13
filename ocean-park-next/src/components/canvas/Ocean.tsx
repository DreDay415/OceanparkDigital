"use client";

import React, { useRef, } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Stars, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

function OceanMesh() {
    const meshRef = useRef<THREE.Mesh>(null!);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        if (meshRef.current) {
            // Subtle rotation
            meshRef.current.rotation.x = -Math.PI / 2 + Math.sin(time * 0.2) * 0.05;
            meshRef.current.position.y = Math.sin(time * 0.5) * 0.1 - 2.5; // Lower slightly
        }
    });

    return (
        <mesh ref={meshRef} position={[0, -2, -6]} rotation={[-Math.PI / 2, 0, 0]} scale={[2.5, 2.5, 1]}>
            <planeGeometry args={[50, 50, 64, 64]} />
            {/* 
          Making the material brighter and more responsive to light.
          Using a color close to the brand blue (#00acc1) but slightly adjusted for 3D depth. 
      */}
            <MeshDistortMaterial
                color="#00acc1"
                emissive="#543ab7"
                emissiveIntensity={0.2}
                speed={2}
                distort={0.5}
                roughness={0.2}
                metalness={0.9} // Higher metalness for better reflection
                envMapIntensity={1}
            />
        </mesh>
    );
}

function Rig() {
    useFrame((state) => {
        state.camera.position.lerp(new THREE.Vector3(state.mouse.x * 2, state.mouse.y * 1 + 2, 8), 0.05)
        state.camera.lookAt(0, 0, 0)
    })
    return null
}

export function Ocean() {
    return (
        // Updated background gradient to be brighter and match the brand colors more closely
        // Using a radial gradient to simulate depth but keeping the overall tone brighter
        <div className="absolute inset-0 z-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#543ab7] via-[#2e2a5c] to-[#0f172a]">
            <Canvas dpr={[1, 2]}>
                <PerspectiveCamera makeDefault position={[0, 2, 8]} fov={50} />
                {/* Increased ambient light significantly so it's not "too dark" */}
                <ambientLight intensity={1.5} />

                {/* Adjusted directional lights to highlight the waves better */}
                <directionalLight position={[10, 10, 5]} intensity={2} color="#ffffff" />
                <pointLight position={[-10, 5, -10]} intensity={2} color="#00acc1" />
                <pointLight position={[0, -5, 5]} intensity={1} color="#543ab7" />

                {/* Reduced star count slightly to reduce visual noise against brighter bg */}
                <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
                <OceanMesh />
                <Rig />
            </Canvas>
            {/* Overlay gradient to ensure text readability at the bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent pointer-events-none" />
        </div>
    );
}
