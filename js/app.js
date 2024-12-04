import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";

const container = document.getElementById("container3D");
if (container) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);

  const torusKnotGeometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
  const torusKnotMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5, metalness: 0.1 });
  const torusKnot = new THREE.Mesh(torusKnotGeometry, torusKnotMaterial);
  torusKnot.position.set(0, 0, 0);

  const vrHeadsetGroup = new THREE.Group();
  const textLoader = new THREE.FontLoader();
  textLoader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', function (font) {
    const textGeometry = new THREE.TextGeometry('Okomo360', {
      font: font,
      size: 2,
      height: 0.5,
      curveSegments: 12,
      bevelEnabled: true,
      bevelThickness: 0.1,
      bevelSize: 0.1,
      bevelOffset: 0,
      bevelSegments: 5
    });
    const textMaterial = new THREE.MeshStandardMaterial({ color: 0xae41d2, roughness: 0.5, metalness: 0.1 });
    const textMesh = new THREE.Mesh(textGeometry, textMaterial);
    textMesh.position.set(-6.5, 2, 4);
    vrHeadsetGroup.add(textMesh);
  });

  const bodyGeometry = new THREE.BoxGeometry(18, 8, 8);
  const bodyMaterial = new THREE.MeshStandardMaterial({ color: 0x333333, roughness: 0.5, metalness: 0.1 });
  const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
  vrHeadsetGroup.add(body);

  const faceplateGeometry = new THREE.BoxGeometry(18, 8, 0.5);
  const faceplateMaterial = new THREE.MeshStandardMaterial({ color: 0x333333, roughness: 0.3, metalness: 0.2 });
  const faceplate = new THREE.Mesh(faceplateGeometry, faceplateMaterial);
  faceplate.position.set(0, 0, 4.25); 
  vrHeadsetGroup.add(faceplate);

  // Left lens with glass texture
  const leftLensGeometry = new THREE.CylinderGeometry(2, 2, 0.5, 32); 
  const leftLensMaterial = new THREE.MeshStandardMaterial({ 
    color: 0xae41d2, 
    roughness: 0.1, 
    metalness: 0.9, 
    transparent: true, 
    opacity: 0.5 
  });
  const leftLens = new THREE.Mesh(leftLensGeometry, leftLensMaterial);
  leftLens.rotation.x = Math.PI / 2;
  leftLens.position.set(-3.5, 0, 4.25); 
  vrHeadsetGroup.add(leftLens);

  // Right lens with glass texture
  const rightLensGeometry = new THREE.CylinderGeometry(2, 2, 0.5, 32); 
  const rightLensMaterial = new THREE.MeshStandardMaterial({ 
    color: 0xae41d2, 
    roughness: 0.1, 
    metalness: 0.9, 
    transparent: true, 
    opacity: 0.5 
  });
  const rightLens = new THREE.Mesh(rightLensGeometry, rightLensMaterial);
  rightLens.rotation.x = Math.PI / 2;
  rightLens.position.set(3.5, 0, 4.25);
  vrHeadsetGroup.add(rightLens);

  // Head strap
  const strapGeometry = new THREE.BoxGeometry(20, 1.5, 1.5); 
  const strapMaterial = new THREE.MeshStandardMaterial({ color: 0x333333, roughness: 0.5, metalness: 0.1 });
  const strap = new THREE.Mesh(strapGeometry, strapMaterial);
  strap.position.set(0, 4, 0); 
  vrHeadsetGroup.add(strap);

  // Top strap
  const topStrapGeometry = new THREE.BoxGeometry(1.5, 8, 1.5);
  const topStrapMaterial = new THREE.MeshStandardMaterial({ color: 0x333333, roughness: 0.5, metalness: 0.1 });
  const topStrap = new THREE.Mesh(topStrapGeometry, topStrapMaterial);
  topStrap.position.set(0, 4, -3); 
  vrHeadsetGroup.add(topStrap);

  vrHeadsetGroup.position.set(0, 0, 0);
  
  scene.add(vrHeadsetGroup);

  const renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  container.appendChild(renderer.domElement);

  camera.position.z = 30;

  const topLight = new THREE.DirectionalLight(0xb3ffab, 1);
  topLight.position.set(0, 0, 30);
  scene.add(topLight);

  const topLight2 = new THREE.DirectionalLight(0xae41d2, 1);
  topLight2.position.set(-30, 0, 0);
  scene.add(topLight2);


  const ambientLight = new THREE.AmbientLight(0xffffff, 2);
  ambientLight.position.set(20, 10, -100);
  scene.add(ambientLight);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableZoom = false;

  function animate() {
    requestAnimationFrame(animate);
    torusKnot.rotation.x += 0.01;
    torusKnot.rotation.y += 0.01;
    vrHeadsetGroup.rotation.y += 0.01;
    renderer.render(scene, camera);
    controls.update();
  }

  window.addEventListener("resize", function () {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  });

  animate();
} else {
  console.error("Container element not found");
}
