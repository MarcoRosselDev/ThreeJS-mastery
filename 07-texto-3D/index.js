import * as THREE from "three";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";

const fontLoader = new FontLoader();

const size = {
  ancho: window.innerWidth,
  alto: window.innerHeight,
};
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, size.ancho / size.alto, 0.1, 30);
camera.position.set(6, 6, 6);

const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(size.ancho, size.alto);

const cube = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshNormalMaterial();
const mesh = new THREE.Mesh(cube, material);
camera.lookAt(mesh.position);
scene.add(mesh, camera);

fontLoader.load("/static/fonts/helvetiker_regular.typeface.json", (font) => {
  const textGeometry = new TextGeometry("Hello Three.js", {
    font: font,
    size: 0.5,
    depth: 0.2,
    curveSegments: 12,
    bevelEnabled: true,
    bevelThickness: 0.03,
    bevelSize: 0.02,
    bevelOffset: 0,
    bevelSegments: 5,
  });
  const textMaterial = new THREE.MeshBasicMaterial({ wireframe: true });
  const text = new THREE.Mesh(textGeometry, textMaterial);
  scene.add(text);
});
renderer.render(scene, camera);

//camera.lookAt(text.position);
