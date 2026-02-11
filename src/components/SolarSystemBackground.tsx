'use client'

import { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Stars, Sphere, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

// Sun component with glow effect
function Sun({ position }: { position: [number, number, number] }) {
  const sunRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (sunRef.current) {
      sunRef.current.rotation.y += 0.002
      sunRef.current.rotation.x += 0.001
    }
  })

  return (
    <group position={position}>
      {/* Core sun */}
      <Sphere ref={sunRef} args={[2, 32, 32]}>
        <meshBasicMaterial color="#ff6b35" />
      </Sphere>

      {/* Glow effect 1 */}
      <Sphere args={[2.3, 32, 32]}>
        <MeshDistortMaterial
          color="#ff9f43"
          distort={0.4}
          speed={2}
          transparent
          opacity={0.5}
        />
      </Sphere>

      {/* Glow effect 2 */}
      <Sphere args={[2.7, 32, 32]}>
        <MeshDistortMaterial
          color="#ffcd56"
          distort={0.5}
          speed={2.5}
          transparent
          opacity={0.3}
        />
      </Sphere>

      {/* Outer glow */}
      <Sphere args={[3.2, 32, 32]}>
        <MeshDistortMaterial
          color="#ffa07a"
          distort={0.6}
          speed={3}
          transparent
          opacity={0.2}
        />
      </Sphere>
    </group>
  )
}

// Planet component
function Planet({
  size,
  color,
  distance,
  speed,
  orbitColor,
  hasRing = false
}: {
  size: number
  color: string
  distance: number
  speed: number
  orbitColor: string
  hasRing?: boolean
}) {
  const planetRef = useRef<THREE.Group>(null)
  const angleRef = useRef(Math.random() * Math.PI * 2)

  useFrame(() => {
    if (planetRef.current) {
      angleRef.current += speed
      planetRef.current.position.x = Math.cos(angleRef.current) * distance
      planetRef.current.position.z = Math.sin(angleRef.current) * distance
      planetRef.current.rotation.y += 0.01
    }
  })

  return (
    <group ref={planetRef}>
      {/* Planet */}
      <Sphere args={[size, 32, 32]}>
        <meshStandardMaterial
          color={color}
          roughness={0.6}
          metalness={0.3}
          emissive={color}
          emissiveIntensity={0.4}
        />
      </Sphere>

      {/* Planet glow */}
      <Sphere args={[size * 1.2, 32, 32]}>
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.15}
          roughness={1}
          metalness={0}
        />
      </Sphere>

      {/* Ring (for Saturn-like planets) */}
      {hasRing && (
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[size * 1.8, size * 0.3, 16, 100]} />
          <meshStandardMaterial
            color={orbitColor}
            transparent
            opacity={0.7}
            roughness={0.8}
            emissive={orbitColor}
            emissiveIntensity={0.3}
          />
        </mesh>
      )}
    </group>
  )
}

// Orbit path visualization
function OrbitPath({ radius, color }: { radius: number; color: string }) {
  const points = useMemo(() => {
    const pts = []
    for (let i = 0; i <= 128; i++) {
      const angle = (i / 128) * Math.PI * 2
      pts.push(
        new THREE.Vector3(
          Math.cos(angle) * radius,
          0,
          Math.sin(angle) * radius
        )
      )
    }
    return pts
  }, [radius])

  const lineGeometry = useMemo(() => {
    return new THREE.BufferGeometry().setFromPoints(points)
  }, [points])

  return (
    <line geometry={lineGeometry}>
      <lineBasicMaterial color={color} transparent opacity={0.3} linewidth={2} />
    </line>
  )
}

// Floating particles
function FloatingParticles() {
  const particlesRef = useRef<THREE.Points>(null)
  const count = 800

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 120
    }
    return pos
  }, [])

  const colors = useMemo(() => {
    const cols = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      cols[i * 3] = Math.random() * 0.5 + 0.5     // R
      cols[i * 3 + 1] = Math.random() * 0.5 + 0.5 // G
      cols[i * 3 + 2] = Math.random() * 0.5 + 0.5 // B
    }
    return cols
  }, [])

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.0003
      particlesRef.current.rotation.x += 0.0001
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.15}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

// Main solar system scene
function SolarSystemScene() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      // Subtle rotation based on mouse position
      groupRef.current.rotation.y = state.mouse.x * 0.1
      groupRef.current.rotation.x = state.mouse.y * 0.1
    }
  })

  return (
    <group ref={groupRef}>
      {/* Stars background */}
      <Stars
        radius={100}
        depth={50}
        count={8000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />

      {/* Floating particles */}
      <FloatingParticles />

      {/* Sun */}
      <Sun position={[0, 0, 0]} />

      {/* Orbit paths */}
      <OrbitPath radius={5} color="#4a90a4" />
      <OrbitPath radius={8} color="#7c5cff" />
      <OrbitPath radius={12} color="#ff6b9d" />
      <OrbitPath radius={16} color="#ffd93d" />
      <OrbitPath radius={22} color="#6bcb77" />

      {/* Planets */}
      <Planet
        size={0.35}
        color="#4a90a4"
        distance={5}
        speed={0.008}
        orbitColor="#4a90a4"
      />

      <Planet
        size={0.55}
        color="#7c5cff"
        distance={8}
        speed={0.006}
        orbitColor="#7c5cff"
      />

      <Planet
        size={0.5}
        color="#ff6b9d"
        distance={12}
        speed={0.004}
        orbitColor="#ff6b9d"
      />

      <Planet
        size={0.9}
        color="#ffd93d"
        distance={16}
        speed={0.003}
        orbitColor="#ffd93d"
        hasRing
      />

      <Planet
        size={0.7}
        color="#6bcb77"
        distance={22}
        speed={0.002}
        orbitColor="#6bcb77"
      />
    </group>
  )
}

// Camera controller
function CameraController() {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null)

  useFrame((state) => {
    if (cameraRef.current) {
      // Smooth camera movement based on mouse
      const targetX = state.mouse.x * 2
      const targetY = state.mouse.y * 2 + 5

      cameraRef.current.position.x += (targetX - cameraRef.current.position.x) * 0.05
      cameraRef.current.position.y += (targetY - cameraRef.current.position.y) * 0.05
      cameraRef.current.lookAt(0, 0, 0)
    }
  })

  return (
    <perspectiveCamera
      ref={cameraRef}
      position={[0, 5, 20]}
      fov={60}
      near={0.1}
      far={1000}
    />
  )
}

// Main 3D Background Component
export default function SolarSystemBackground() {
  return (
    <div className="fixed inset-0 -z-10 w-full h-full">
      <Canvas
        camera={{ position: [0, 5, 20], fov: 60 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        dpr={[1, 2]}
      >
        <CameraController />

        <ambientLight intensity={0.4} />
        <pointLight position={[0, 0, 0]} intensity={3} color="#ff6b35" distance={50} />
        <pointLight position={[10, 10, 10]} intensity={0.8} color="#4a90a4" distance={50} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#7c5cff" distance={50} />
        <pointLight position={[0, 0, 10]} intensity={0.3} color="#ffd93d" distance={30} />

        <SolarSystemScene />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.5}
          autoRotate={false}
        />
      </Canvas>
    </div>
  )
}
