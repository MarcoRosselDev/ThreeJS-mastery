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
const matcapTexture = textureLoader.load("/static/textures/matcaps/7.png");
const gradientTexture = textureLoader.load("/static/textures/gradients/3.jpg");

// geometria ---------------------------------------------------------------------- geometria
// MeshBasicMaterial ------------------------------------------------------ MeshBasicMaterial
//const material = new THREE.MeshBasicMaterial();
//material.color = new THREE.Color(0x099098);
//material.flatShading = true; // remarca las subdiviciones de triangulos
//material.wireframe = false;
//material.transparent = true;
//material.opacity = 0.3;
// MeshMatcapMaterial ----------------------------------------------------- MeshMatcapMaterial
//const material = new THREE.MeshMatcapMaterial();
//material.matcap = matcapTexture;
// MeshDepthMaterial ------------------------------------------------------- MeshDepthMaterial
//const material = new THREE.MeshDepthMaterial(); // oscurese la parte lejod de camara
// MeshLambertMaterial --------------------------------------------------- MeshLambertMaterial
const material = new THREE.MeshLambertMaterial();

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
const ambientalLight = new THREE.AmbientLight("white", 0.1);
const pointingLight = new THREE.PointLight("white", 3);
pointingLight.position.set(3, 3, 3);
scene.add(mesh_cubo, mesh_esfera, pointingLight, ambientalLight);

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
// mover camara -------------------------------------------------------------------- mover camara
const izquierda = document.querySelector(".izquierda");
const derecha = document.querySelector(".derecha");
const transicion_izquierda = () => {
  if (camera.position.x >= -5) {
    camera.position.x -= 0.15;
    camera.position.z -= 0.1;
    camera.lookAt(mesh_cubo.position);
    requestAnimationFrame(transicion_izquierda);
  }
};
const transicion_derecha = () => {
  if (camera.position.x <= 2) {
    camera.position.x += 0.15;
    camera.lookAt(mesh_cubo.position);
    requestAnimationFrame(transicion_derecha);
  }
};
izquierda.addEventListener("click", () => {
  transicion_izquierda();
});
derecha.addEventListener("click", () => {
  transicion_derecha();
});
