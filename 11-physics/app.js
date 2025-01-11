import * as THREE from "three";

const size = {
  alto: window.innerHeight,
  ancho: window.innerWidth,
};
const cubo = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshNormalMaterial();
const mesh = new THREE.Mesh(cubo, material);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, size.ancho / size.alto, 0.1, 40);
camera.position.z = 5;

scene.add(mesh);

const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(size.ancho, size.alto);
renderer.render(scene, camera);
