import { useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Stars, Sphere, Box, Torus, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

/* Premium floating tech orb */
function TechOrb({ position, color, size = 0.45, speed = 1, delay = 0 }) {
    const ref = useRef()
    useFrame((state) => {
        if (!ref.current) return
        ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed + delay) * 0.35
        ref.current.rotation.y += 0.008
        ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3 + delay) * 0.25
    })
    return (
        <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
            <Sphere ref={ref} args={[size, 48, 48]} position={position}>
                <MeshDistortMaterial
                    color={color}
                    emissive={color}
                    emissiveIntensity={0.25}
                    metalness={0.9}
                    roughness={0.05}
                    distort={0.25}
                    speed={2}
                    transparent
                    opacity={0.85}
                />
            </Sphere>
        </Float>
    )
}

/* Glowing ring */
function Ring({ position, color, delay = 0 }) {
    const ref = useRef()
    useFrame((state) => {
        if (!ref.current) return
        ref.current.rotation.x = state.clock.elapsedTime * 0.4 + delay
        ref.current.rotation.z = state.clock.elapsedTime * 0.25 + delay
        ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.6 + delay) * 0.3
    })
    return (
        <Torus ref={ref} args={[0.65, 0.04, 32, 80]} position={position}>
            <meshStandardMaterial
                color={color}
                emissive={color}
                emissiveIntensity={0.8}
                metalness={1}
                roughness={0}
                transparent
                opacity={0.7}
            />
        </Torus>
    )
}

/* Central hero sphere */
function HeroSphere() {
    const ref = useRef()
    useFrame((state) => {
        if (!ref.current) return
        ref.current.rotation.y = state.clock.elapsedTime * 0.15
        ref.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.3) * 0.06
    })
    return (
        <group ref={ref}>
            <Sphere args={[1.55, 96, 96]}>
                <MeshDistortMaterial
                    color="#0f2040"
                    emissive="#1a4080"
                    emissiveIntensity={0.12}
                    metalness={0.95}
                    roughness={0.08}
                    distort={0.15}
                    speed={1}
                    transparent
                    opacity={0.75}
                />
            </Sphere>
            {/* inner glow ring */}
            <Torus args={[1.6, 0.015, 32, 128]} rotation={[Math.PI / 2, 0, 0]}>
                <meshStandardMaterial color="#3b82f6" emissive="#3b82f6" emissiveIntensity={1.2} transparent opacity={0.6} />
            </Torus>
            <Torus args={[1.6, 0.012, 32, 128]} rotation={[Math.PI / 7, Math.PI / 5, 0]}>
                <meshStandardMaterial color="#8b5cf6" emissive="#8b5cf6" emissiveIntensity={1} transparent opacity={0.5} />
            </Torus>
        </group>
    )
}

/* Tech label squares (small sharp boxes representing tech icons) */
function TechChip({ position, color, delay = 0 }) {
    const ref = useRef()
    useFrame((state) => {
        if (!ref.current) return
        ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.7 + delay) * 0.3
        ref.current.rotation.y = state.clock.elapsedTime * 0.6 + delay
    })
    return (
        <Box ref={ref} args={[0.4, 0.4, 0.1]} position={position}>
            <meshStandardMaterial
                color={color}
                emissive={color}
                emissiveIntensity={0.5}
                metalness={0.8}
                roughness={0.15}
                transparent
                opacity={0.8}
            />
        </Box>
    )
}

function Scene() {
    return (
        <>
            <Stars radius={90} depth={50} count={2500} factor={3.5} saturation={0} fade speed={0.4} />

            <ambientLight intensity={0.4} />
            <pointLight position={[4, 4, 4]} intensity={1.5} color="#3b82f6" />
            <pointLight position={[-4, -3, 3]} intensity={1} color="#8b5cf6" />
            <pointLight position={[0, 2, -4]} intensity={0.7} color="#06b6d4" />

            <HeroSphere />

            {/* Floating tech orbs around the sphere */}
            <TechOrb position={[-3.2, 1.4, -0.5]} color="#1a6baa" size={0.38} speed={0.9} delay={0} />
            <TechOrb position={[3.2, 1.4, -0.5]} color="#1a4899" size={0.34} speed={1.1} delay={1.2} />
            <TechOrb position={[-3.0, -1.3, 0.3]} color="#b5a000" size={0.32} speed={0.8} delay={2.1} />
            <TechOrb position={[3.0, -1.3, 0.3]} color="#0b9aba" size={0.35} speed={1.0} delay={0.7} />
            <TechOrb position={[0, 2.8, -1.5]} color="#185518" size={0.3} speed={0.7} delay={1.5} />
            <TechOrb position={[0, -2.8, -1.5]} color="#1a3a8a" size={0.3} speed={1.2} delay={0.4} />

            {/* Tech chips */}
            <TechChip position={[-2.0, 0.2, 1.5]} color="#3b82f6" delay={0.3} />
            <TechChip position={[2.0, -0.5, 1.5]} color="#8b5cf6" delay={1.1} />

            {/* Rings */}
            <Ring position={[-2.5, 2.2, -1.5]} color="#8b5cf6" delay={0} />
            <Ring position={[2.5, -2.2, -1]} color="#06b6d4" delay={1.5} />
            <Ring position={[0, 0, -4]} color="#3b82f6" delay={0.8} />
        </>
    )
}

export default function HeroScene() {
    return (
        <Canvas
            camera={{ position: [0, 0, 7], fov: 55 }}
            dpr={[1, 1.5]}
            gl={{ antialias: true, alpha: true }}
            style={{ width: '100%', height: '100%' }}
        >
            <Suspense fallback={null}>
                <Scene />
            </Suspense>
        </Canvas>
    )
}
