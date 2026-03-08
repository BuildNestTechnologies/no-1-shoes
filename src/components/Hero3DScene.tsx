import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Torus, Box, Ring } from "@react-three/drei";
import * as THREE from "three";

// Floating ring that orbits around the sneaker area
function OrbitRing({ radius = 2.5, speed = 0.3, color = "#ff6b00", thickness = 0.02 }: { radius?: number; speed?: number; color?: string; thickness?: number }) {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * speed) * 0.5 + 0.8;
    ref.current.rotation.z = state.clock.elapsedTime * speed * 0.5;
  });
  return (
    <Ring ref={ref} args={[radius - thickness, radius, 64]}>
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} transparent opacity={0.6} side={THREE.DoubleSide} />
    </Ring>
  );
}

// Glowing particle spheres
function FloatingParticles({ count = 40 }: { count?: number }) {
  const particles = useMemo(() => {
    return Array.from({ length: count }, () => ({
      pos: [
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 4,
      ] as [number, number, number],
      scale: Math.random() * 0.06 + 0.02,
      speed: Math.random() * 0.5 + 0.2,
      offset: Math.random() * Math.PI * 2,
    }));
  }, [count]);

  return (
    <>
      {particles.map((p, i) => (
        <FloatingDot key={i} position={p.pos} scale={p.scale} speed={p.speed} offset={p.offset} />
      ))}
    </>
  );
}

function FloatingDot({ position, scale, speed, offset }: { position: [number, number, number]; scale: number; speed: number; offset: number }) {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    ref.current.position.y = position[1] + Math.sin(t * speed + offset) * 0.5;
    ref.current.position.x = position[0] + Math.cos(t * speed * 0.7 + offset) * 0.3;
  });
  return (
    <Sphere ref={ref} args={[scale, 8, 8]} position={position}>
      <meshStandardMaterial color="#ff6b00" emissive="#ff8c00" emissiveIntensity={2} />
    </Sphere>
  );
}

// The hero blob
function HeroBlob() {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    ref.current.rotation.x = state.clock.elapsedTime * 0.15;
    ref.current.rotation.y = state.clock.elapsedTime * 0.2;
  });
  return (
    <Sphere ref={ref} args={[1.5, 64, 64]} position={[0, 0, -1]}>
      <MeshDistortMaterial
        color="#ff6b00"
        emissive="#ff4500"
        emissiveIntensity={0.3}
        roughness={0.2}
        metalness={0.8}
        distort={0.4}
        speed={2}
        transparent
        opacity={0.15}
      />
    </Sphere>
  );
}

// Rotating geometric accents
function GeometricAccents() {
  const box1 = useRef<THREE.Mesh>(null!);
  const box2 = useRef<THREE.Mesh>(null!);
  const torus = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    box1.current.rotation.x = t * 0.3;
    box1.current.rotation.y = t * 0.2;
    box1.current.position.y = Math.sin(t * 0.5) * 0.3 + 1.8;

    box2.current.rotation.z = t * 0.4;
    box2.current.rotation.x = t * 0.15;
    box2.current.position.y = Math.cos(t * 0.4) * 0.3 - 1.5;

    torus.current.rotation.x = t * 0.2;
    torus.current.rotation.y = t * 0.3;
  });

  return (
    <>
      <Box ref={box1} args={[0.3, 0.3, 0.3]} position={[-3, 1.8, -1]}>
        <meshStandardMaterial color="#ff6b00" emissive="#ff6b00" emissiveIntensity={0.4} wireframe />
      </Box>
      <Box ref={box2} args={[0.2, 0.2, 0.2]} position={[3.2, -1.5, 0]}>
        <meshStandardMaterial color="#ff8c00" emissive="#ff8c00" emissiveIntensity={0.5} wireframe />
      </Box>
      <Torus ref={torus} args={[0.4, 0.05, 16, 32]} position={[2.8, 2, -2]}>
        <meshStandardMaterial color="#ff6b00" emissive="#ff6b00" emissiveIntensity={0.6} />
      </Torus>
    </>
  );
}

const Hero3DScene = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={1} color="#ff6b00" />
        <pointLight position={[-5, -3, 3]} intensity={0.5} color="#ff8c00" />
        <spotLight position={[0, 5, 5]} intensity={0.8} color="#ffffff" angle={0.3} penumbra={1} />

        <HeroBlob />
        <OrbitRing radius={2.8} speed={0.25} />
        <OrbitRing radius={3.2} speed={-0.15} color="#ff8c00" />
        <FloatingParticles count={30} />
        <GeometricAccents />
      </Canvas>
    </div>
  );
};

export default Hero3DScene;
