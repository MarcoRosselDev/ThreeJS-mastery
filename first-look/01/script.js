console.log("Hola mundo!");

import * as THREE from "three";
const canvas = document.querySelector(".webgl");

console.log(THREE);

const scene = new THREE.Scene();
// renderer, camera, scene, objects
const renderer = new THREE.WebGLRenderer({ canvas: canvas });
const size = {
  width: 800,
  height: 600,
};

const camera = new THREE.PerspectiveCamera(
  75,
  size.width / size.height,
  0.1,
  100
);
camera.position.z = 5;

const box = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "lightblue" });
const cube = new THREE.Mesh(box, material);
scene.add(cube);

renderer.setSize(size.width, size.height);
renderer.render(scene, camera);
