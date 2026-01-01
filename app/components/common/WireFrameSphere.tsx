import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const WireframeSphere: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sphereRef = useRef<THREE.Mesh | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const isHoveredRef = useRef<boolean>(false);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a1f1f);
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create wireframe sphere
    const geometry = new THREE.IcosahedronGeometry(2, 1);
    const material = new THREE.MeshBasicMaterial({
      color: 0x00ffcc,
      wireframe: true,
      transparent: true,
      opacity: 0.8
    });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);
    sphereRef.current = sphere;

    // Create particles at vertices
    const vertices = geometry.attributes.position;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions: number[] = [];
    
    for (let i = 0; i < vertices.count; i++) {
      particlePositions.push(
        vertices.getX(i),
        vertices.getY(i),
        vertices.getZ(i)
      );
    }
    
    particleGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(particlePositions, 3)
    );
    
    const particleMaterial = new THREE.PointsMaterial({
      color: 0x00ffcc,
      size: 0.1,
      transparent: true,
      opacity: 0.8
    });
    
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);
    particlesRef.current = particles;

    // Add ambient glow
    const glowGeometry = new THREE.IcosahedronGeometry(2.1, 1);
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0x00ffcc,
      transparent: true,
      opacity: 0.1,
      side: THREE.BackSide
    });
    const glow = new THREE.Mesh(glowGeometry, glowMaterial);
    scene.add(glow);

    // Animation loop
    let targetScale = 1;
    let currentScale = 1;
    let rotationSpeed = 0.005;

    const animate = (): void => {
      requestAnimationFrame(animate);

      // Smooth scale transition
      currentScale += (targetScale - currentScale) * 0.1;
      
      if (isHoveredRef.current) {
        targetScale = 1.2;
        rotationSpeed = 0.01;
      } else {
        targetScale = 1;
        rotationSpeed = 0.005;
      }

      sphere.rotation.x += rotationSpeed;
      sphere.rotation.y += rotationSpeed;
      sphere.scale.set(currentScale, currentScale, currentScale);

      particles.rotation.x = sphere.rotation.x;
      particles.rotation.y = sphere.rotation.y;
      particles.scale.set(currentScale, currentScale, currentScale);

      glow.rotation.x = sphere.rotation.x;
      glow.rotation.y = sphere.rotation.y;
      glow.scale.set(currentScale, currentScale, currentScale);

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = (): void => {
      if (!containerRef.current) return;
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      glowGeometry.dispose();
      glowMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  const handleMouseEnter = (): void => {
    isHoveredRef.current = true;
    if (sphereRef.current) {
      (sphereRef.current.material as THREE.MeshBasicMaterial).color.setHex(0x00ff88);
    }
    if (particlesRef.current) {
      (particlesRef.current.material as THREE.PointsMaterial).color.setHex(0x00ff88);
    }
  };

  const handleMouseLeave = (): void => {
    isHoveredRef.current = false;
    if (sphereRef.current) {
      (sphereRef.current.material as THREE.MeshBasicMaterial).color.setHex(0x00ffcc);
    }
    if (particlesRef.current) {
      (particlesRef.current.material as THREE.PointsMaterial).color.setHex(0x00ffcc);
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        width: '75vw',
        height: '75vh',
        cursor: 'pointer',
        position: 'relative',
        margin: "auto",
        marginTop: "50vh",
        transform: "translateY(-50%)"
      }}
    >
      <div style={{
        position: 'absolute',
        top: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        color: '#00ffcc',
        fontFamily: 'monospace',
        fontSize: '14px',
        zIndex: 10,
        textAlign: 'center'
      }}>
        Hover over the sphere to interact
      </div>
    </div>
  );
};

export default WireframeSphere;