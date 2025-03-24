"use client"

import { useState, useRef } from "react"
import * as THREE from "three"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Grid, Points } from "@react-three/drei"
import { useMobile } from "@/hooks/use-mobile"

function KeyModel({ scale = 1, position = [0, 0, 0] }: { scale?: number, position?: [number, number, number] }) {
  // Create a key using React Three Fiber components
  return (
    <group scale={[scale, scale, scale]} position={position}>
      {/* Head (ring) */}
      <mesh position={[0, 0, 0]}>
        <torusGeometry args={[0.8, 0.2, 16, 32]} />
        <meshBasicMaterial color="#ff00ff" wireframe />
      </mesh>

      {/* Shaft */}
      <mesh position={[0, -1.5, 0]}>
        <boxGeometry args={[0.4, 3, 0.2]} />
        <meshBasicMaterial color="#00ffff" wireframe />
      </mesh>

      {/* Teeth */}
      <mesh position={[-0.2, -2.7, 0]}>
        <boxGeometry args={[0.8, 0.3, 0.2]} />
        <meshBasicMaterial color="#ff00ff" wireframe />
      </mesh>

      <mesh position={[-0.2, -2.2, 0]}>
        <boxGeometry args={[0.8, 0.3, 0.2]} />
        <meshBasicMaterial color="#ff00ff" wireframe />
      </mesh>

      {/* Glow points */}
      {([
        [0, 0, 0],
        [0, -1.5, 0],
        [-0.2, -2.7, 0],
        [-0.2, -2.2, 0],
      ] as [number, number, number][]).map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshBasicMaterial color="#ff00ff" transparent opacity={0.8} />
        </mesh>
      ))}
    </group>
  )
}

function Planet({ radius, color, distance, speed, initialAngle = 0 }: { radius: number, color: string, distance: number, speed: number, initialAngle?: number }) {
  const ref = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime()

    // Self rotation
    if (ref.current) {
      ref.current.rotation.y += speed * 0.01
    }

    // Orbit around center
    const angle = initialAngle + time * speed * 0.05
    if (ref.current) {
      ref.current.position.x = distance * Math.cos(angle)
      ref.current.position.z = distance * Math.sin(angle)
    }
  })

  return (
    <mesh ref={ref} position={[distance, (Math.random() - 0.5) * 5, 0]}>
      <sphereGeometry args={[radius, 32, 32]} />
      <meshBasicMaterial color={color} wireframe />
    </mesh>
  )
}

function Stars({ count = 1000 }) {
  const positions = new Float32Array(count * 3)

  for (let i = 0; i < count; i++) {
    const i3 = i * 3
    positions[i3] = (Math.random() - 0.5) * 100
    positions[i3 + 1] = (Math.random() - 0.5) * 100
    positions[i3 + 2] = (Math.random() - 0.5) * 100
  }

  return (
    <Points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.1} color="#ffffff" sizeAttenuation />
    </Points>
  )
}

function BinaryParticles({ count = 200 }) {
  const ref = useRef<THREE.Points>(null)

  const positions = new Float32Array(count * 3)

  for (let i = 0; i < count; i++) {
    const i3 = i * 3
    positions[i3] = (Math.random() - 0.5) * 20
    positions[i3 + 1] = (Math.random() - 0.5) * 20
    positions[i3 + 2] = (Math.random() - 0.5) * 20
  }

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.001
      ref.current.rotation.x += 0.0005
    }
  })

  return (
    <Points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.2} color="#00ffff" transparent opacity={0.7} sizeAttenuation />
    </Points>
  )
}

function Scene({ isDragging }: { isDragging: boolean }) {
  const keyRef = useRef<THREE.Group>(null)
  const gridRef = useRef<THREE.Group>(null)
  const isMobile = useMobile()

  // Animate the key and grid
  useFrame(() => {
    if (keyRef.current) {
      keyRef.current.rotation.y += isDragging && !isMobile ? 0.01 : 0.005
    }

    if (gridRef.current) {
      gridRef.current.rotation.z += 0.002
    }
  })

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      {/* Grid */}
      <group ref={gridRef} position={[0, -2, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <Grid
          cellSize={1}
          cellThickness={0.5}
          cellColor="#ff00ff"
          sectionSize={5}
          sectionThickness={1}
          sectionColor="#00ffff"
          fadeDistance={30}
          infiniteGrid
        />
      </group>

      {/* Stars */}
      <Stars />

      {/* Binary particles */}
      <BinaryParticles />

      {/* Key */}
      <group ref={keyRef} position={[0, 0, isMobile ? -2 : -3.5]}>
        <KeyModel scale={isMobile ? 0.6 : 0.9} />
      </group>

      {/* Planets */}
      <Planet radius={0.5} color="#ff00ff" distance={15} speed={0.2} initialAngle={Math.random() * Math.PI * 2} />
      <Planet radius={0.3} color="#00ffff" distance={20} speed={0.3} initialAngle={Math.random() * Math.PI * 2} />
      <Planet radius={0.7} color="#9900ff" distance={25} speed={0.15} initialAngle={Math.random() * Math.PI * 2} />
      <Planet radius={0.4} color="#00ccff" distance={18} speed={0.25} initialAngle={Math.random() * Math.PI * 2} />

      {/* Camera controls */}
      <OrbitControls
        enableDamping
        dampingFactor={0.05}
        enableZoom={false}
        autoRotate
        autoRotateSpeed={0.5}
        rotateSpeed={1.5}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 1.5}
      />
    </>
  )
}

export default function ThreeJsCanvas() {
  const [isDragging, setIsDragging] = useState(false)
  const isMobile = useMobile()

  // Prevent touch events from being captured on mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (isMobile) {
      e.stopPropagation()
    } else {
      setIsDragging(true)
    }
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isMobile) {
      e.stopPropagation()
    }
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (isMobile) {
      e.stopPropagation()
    } else {
      setIsDragging(false)
    }
  }

  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{ position: [0, 2, 5], fov: 75 }}
        onPointerDown={!isMobile ? () => setIsDragging(true) : undefined}
        onPointerUp={!isMobile ? () => setIsDragging(false) : undefined}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <Scene isDragging={isDragging} />
      </Canvas>
    </div>
  )
}

