import * as T from "three";

// Scene
const scene = new T.Scene();

// Canvas
const canvas = document.querySelector("canvas.webgl");
const renderer = new T.WebGLRenderer({
  canvas: canvas,
});

// Geometry
const box = new T.BoxGeometry(1, 1, 1); // width, height, depth
const material = new T.MeshNormalMaterial();
const mesh = new T.Mesh(box, material);

// Size
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

// escuchar el evento resize de la ventana de window
window.addEventListener("resize", () => {
  // Actualizar sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Actualizar la camara
  camera.aspect = sizes.width / sizes.height; // actualizar aspecto de camara
  camera.updateProjectionMatrix(); // lo veremos luego

  // Actualizar el renderer
  renderer.setSize(sizes.width, sizes.height); // actualizar dimenciones de canvas
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  //renderer.render(scene, camera);
});

// escuchar el evento doble click de window para la opcion de pantalla completa
window.addEventListener("dblclick", () => {
  if (!document.fullscreenElement) {
    console.log("hir a pantalla completa");
    canvas.requestFullscreen();
  } else {
    document.exitFullscreen();
    console.log("dejar la pantalla completa");
  }
});

// Camera
const camera = new T.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 20);
camera.position.set(3, 3, 3);
camera.lookAt(mesh.position);

// Render
scene.add(mesh, camera);
// esta parte es la que se encarga de actualizar las dimenciones del canvas
renderer.setSize(sizes.width, sizes.height); // actualizar dimenciones de canvas

const tick = () => {
  //mesh.position.x += 0.01;
  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.01;
  mesh.rotation.z += 0.01;
  renderer.render(scene, camera);
  requestAnimationFrame(tick);
};

tick();
