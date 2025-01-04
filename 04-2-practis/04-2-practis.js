import * as T from "three";

// Size canvas --------------------------------------------------------------------------
const size = {
  ancho: window.innerWidth,
  alto: window.innerHeight,
};

// Geometria ----------------------------------------------------------------------------
const cube = new T.BoxGeometry(1, 1, 1);
const material = new T.MeshNormalMaterial();
const mesh = new T.Mesh(cube, material);

// Camara -------------------------------------------------------------------------------
const camara = new T.PerspectiveCamera(75, size.ancho / size.alto, 0.1, 20);
camara.position.set(3, 3, 3);
camara.lookAt(mesh.position);

// Escena -------------------------------------------------------------------------------
const scene = new T.Scene();
scene.add(mesh);

// Renderer -----------------------------------------------------------------------------
const canvas = document.querySelector(".webgl");
const renderer = new T.WebGLRenderer({ canvas });
renderer.setSize(size.ancho, size.alto);
renderer.render(scene, camara);

// Evento resize ------------------------------------------------------------------------
window.addEventListener("resize", () => {
  size.ancho = window.innerWidth;
  size.alto = window.innerHeight;
  camara.aspect = size.ancho / size.alto;
  camara.updateProjectionMatrix();
  renderer.setSize(size.ancho, size.alto);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.render(scene, camara);
});

// Evento pantalla completa -------------------------------------------------------------
window.addEventListener("dblclick", () => {
  if (!document.fullscreenElement) {
    console.log("ingresar a pantalla completa");
    canvas.requestFullscreen();
  } else {
    document.exitFullscreen();
    console.log("salir de pantalla completa");
  }
});
