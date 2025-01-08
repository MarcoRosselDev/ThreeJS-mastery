import * as THREE from "three";

const textureLoader = new THREE.TextureLoader();
const doorColorTexture = textureLoader.load("/static/textures/door/color.jpg");
doorColorTexture.colorSpace = THREE.SRGBColorSpace;
const doorAlphaTexture = textureLoader.load("/static/textures/door/alpha.jpg");
const doorAmbientOcclusionTexture = textureLoader.load(
  "/static/textures/door/ambientOcclusion.jpg"
);
const doorHeightTexture = textureLoader.load(
  "/static/textures/door/height.jpg"
);
const doorNormalTexture = textureLoader.load(
  "/static/textures/door/normal.jpg"
);
const doorMetalnessTexture = textureLoader.load(
  "/static/textures/door/metalness.jpg"
);
const doorRoughnessTexture = textureLoader.load(
  "/static/textures/door/roughness.jpg"
);
const matcapTexture = textureLoader.load("/static/textures/matcaps/1.png");
const gradientTexture = textureLoader.load("/static/textures/gradients/3.jpg");

// geometria------------------------------------------------------------------------geometria
const material = new THREE.MeshBasicMaterial();
//material.color = new THREE.Color(0x099098);
material.map = doorColorTexture;
material.wireframe = false;
material.transparent = true;
material.opacity = 0.3;

const cubo = new THREE.BoxGeometry(1, 1, 1);
const esfera = new THREE.SphereGeometry(1, 10, 10);
const mesh_cubo = new THREE.Mesh(cubo, material);
const mesh_esfera = new THREE.Mesh(esfera, material);
mesh_esfera.position.set(-3, 0, 0);
// test----------------------------------------------------------------------------------test
const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  material.wireframe = !material.wireframe;
});
// test----------------------------------------------------------------------------------test
// camara------------------------------------------------------------------------------camara
const size = {
  ancho: window.innerWidth,
  alto: window.innerHeight,
};
const camera = new THREE.PerspectiveCamera(75, size.ancho / size.alto, 0.1, 10);
camera.position.set(0, 0, 6);
camera.lookAt(mesh_cubo.position);

// scene---------------------------------------------------------------------------------scene
const scene = new THREE.Scene();
const ambientalLigth = new THREE.AmbientLight("white", 2);
scene.add(mesh_cubo, mesh_esfera, ambientalLigth);

// renderer --------------------------------------------------------------------------renderer
const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
renderer.setSize(size.ancho, size.alto);
//renderer.alpha = !renderer.alpha;
// resize event ------------------------------------------------------------------ resize event
window.addEventListener("resize", () => {
  console.log("se actualizo la dimencion de la pantalla");
  size.alto = window.innerHeight;
  size.ancho = window.innerWidth;
  camera.aspect = size.ancho / size.alto;
  camera.updateProjectionMatrix();
  renderer.setSize(size.ancho, size.alto);
  renderer.render(scene, camera);
});

// fn girar mesh ------------------------------------------------------------------fn girar mesh
const tick = () => {
  mesh_cubo.rotation.x += 0.001;
  mesh_cubo.rotation.y += 0.001;
  mesh_esfera.rotation.y += 0.001;
  mesh_esfera.rotation.y += 0.001;
  renderer.render(scene, camera);
  requestAnimationFrame(tick);
};
tick();
