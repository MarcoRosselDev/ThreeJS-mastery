import * as THREE from "three";

const canvas = document.querySelector(".webgl");
// geometria------------------------------------------------------------------------geometria
const mesh_cubo = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshNormalMaterial({})
);

// camara------------------------------------------------------------------------------camara
const size = {
  ancho: window.innerWidth,
  alto: window.innerHeight,
};
const camera = new THREE.PerspectiveCamera(75, size.ancho / size.alto, 0.1, 10);
camera.position.set(3, 3, 3);
camera.lookAt(mesh_cubo.position);

// scene---------------------------------------------------------------------------------scene
const scene = new THREE.Scene();
scene.add(mesh_cubo);

// renderer --------------------------------------------------------------------------renderer
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(size.ancho, size.alto);
renderer.render(scene, camera);
