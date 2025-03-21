import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const dotGeometry = new THREE.SphereGeometry(0.003, 8, 8); // Increased dot size
const dotMaterial = new THREE.MeshBasicMaterial({ color: '#ea7f0a' });

function createArcCurve(start: THREE.Vector3, end: THREE.Vector3) {
  const middle = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5);
  const distance = start.distanceTo(end);
  middle.normalize().multiplyScalar(1 + distance * 0.2);
  return new THREE.QuadraticBezierCurve3(start, middle, end);
}

export function Globe() {
  const globeRef = useRef<THREE.Mesh>(null);
  const arcsGroup = useRef<THREE.Group>(null);
  const dotsGroup = useRef<THREE.Group>(null);
  const planesGroup = useRef<THREE.Group>(null);

  // Generate random points on the globe surface
  const points = useMemo(() => {
    return Array.from({ length: 200 }, () => {
      const lat = Math.random() * Math.PI - Math.PI / 2;
      const lon = Math.random() * Math.PI * 2;
      const radius = 1;
      
      return new THREE.Vector3(
        radius * Math.cos(lat) * Math.cos(lon),
        radius * Math.sin(lat),
        radius * Math.cos(lat) * Math.sin(lon)
      );
    });
  }, []);

  // Generate flight paths
  const flights = useMemo(() => {
    const paths = [];
    for (let i = 0; i < 30; i++) {
      const start = points[Math.floor(Math.random() * points.length)];
      const end = points[Math.floor(Math.random() * points.length)];
      if (start.distanceTo(end) > 0.5) {
        const curve = createArcCurve(start, end);
        paths.push({
          curve,
          progress: Math.random(),
          speed: 0.0005 + Math.random() * 0.0005,
          points: curve.getPoints(50),
        });
      }
    }
    return paths;
  }, [points]);

  // Generate static arcs
  const arcs = useMemo(() => {
    const arcs = [];
    for (let i = 0; i < 100; i++) {
      const start = points[Math.floor(Math.random() * points.length)];
      const end = points[Math.floor(Math.random() * points.length)];
      if (start.distanceTo(end) > 0.3) {
        const curve = createArcCurve(start, end);
        arcs.push(curve.getPoints(50));
      }
    }
    return arcs;
  }, [points]);

  useFrame((state) => {
    if (planesGroup.current) {
      // Update flight positions
      flights.forEach((flight, index) => {
        const plane = planesGroup.current?.children[index];
        if (plane) {
          flight.progress += flight.speed;
          if (flight.progress >= 1) flight.progress = 0;

          const position = flight.curve.getPointAt(flight.progress);
          const nextPosition = flight.curve.getPointAt(
            (flight.progress + 0.01) % 1
          );

          plane.position.copy(position);
          plane.lookAt(nextPosition);
          
          // Adjust the plane's orientation
          plane.rotateX(Math.PI / 2);
        }
      });
    }
  });

  return (
    <>
      <OrbitControls 
        enableZoom={true}
        enablePan={false}
        minDistance={2}
        maxDistance={4}
        rotateSpeed={0.5}
        autoRotate={true}
        autoRotateSpeed={0.5}
      />

      {/* Base globe sphere */}
      <Sphere ref={globeRef} args={[0.8, 128, 128]}>
        <meshPhongMaterial
          color="#000000"
          emissive="#ea7f0a"
          emissiveIntensity={0.1}
          specular="#ea7f0a"
          shininess={20}
          opacity={0.3}
          transparent
          wireframe
        />
      </Sphere>

      {/* Atmosphere glow */}
      <Sphere args={[0.82, 64, 64]}>
        <meshPhongMaterial
          color="#ea7f0a"
          opacity={0.2}
          transparent
          side={THREE.BackSide}
        />
      </Sphere>

      {/* Dots */}
      <group ref={dotsGroup} scale={0.8}>
        {points.map((point, i) => (
          <mesh key={`dot-${i}`} geometry={dotGeometry} material={dotMaterial} position={point} />
        ))}
      </group>

      {/* Flight paths */}
      <group ref={planesGroup} scale={0.8}>
        {flights.map((_, i) => (
          <mesh key={`plane-${i}`}>
            <coneGeometry args={[0.004, 0.015, 4]} />
            <meshBasicMaterial color="#ea7f0a" />
          </mesh>
        ))}
      </group>

      {/* Static Arcs */}
      <group ref={arcsGroup} scale={0.8}>
        {arcs.map((arc, i) => (
          <line key={`arc-${i}`}>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                count={arc.length}
                array={new Float32Array(arc.flatMap(v => [v.x, v.y, v.z]))}
                itemSize={3}
              />
            </bufferGeometry>
            <lineBasicMaterial color="#ea7f0a" opacity={0.2} transparent />
          </line>
        ))}
      </group>

      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      <pointLight position={[-10, -10, -10]} intensity={0.8} />
    </>
  );
}