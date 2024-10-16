import * as THREE from "three";
const canvas = document.querySelector("canvas.webgl");

//scene
const scene = new THREE.Scene();
//camera
const size = {
  width: 600,
  height: 400,
};
const camera = new THREE.PerspectiveCamera(
  75,
  size.width / size.height,
  0.1,
  30
);
camera.position.z = 5;
//objects
const box = new THREE.BoxGeometry(1, 1, 1);
const mater = new THREE.MeshBasicMaterial({ color: "lightblue" });
const cubo = new THREE.Mesh(box, mater);
scene.add(cubo);
//renderer
const renderer = new THREE.WebGLRenderer({ canvas: canvas });
renderer.setSize(size.width, size.height);
renderer.render(scene, camera);
