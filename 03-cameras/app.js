import * as T from "three";
// 1
const scene = new T.Scene();
// 2
const box = new T.BoxGeometry(1, 1, 1); // width, height, depth
const material = new T.MeshNormalMaterial();
const mesh = new T.Mesh(box, material);
//const light = new T.AmbientLight("white", 3);
//scene.add(light);
// 3
const sizes = {
  width: 1200,
  height: 620,
};
//const camera = new T.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 20);
const aspectRatio = sizes.width / sizes.height;
const camera = new T.OrthographicCamera(
  aspectRatio * -1,
  aspectRatio,
  1,
  -1,
  1,
  1000
);

camera.position.set(20, 20, 20);
// movimiento de mesh o camera
mesh.position.z = -0.3;
mesh.position.x = 1;
// axes helper -- eje auxiliar
// azul = z
// rojo = x
// verde= y
const axesHelper = new T.AxesHelper(3); // (numero) = el largo que queremos ver
scene.add(axesHelper);
// 4
camera.lookAt(mesh.position);
const canvas = document.querySelector("canvas.webgl");
const renderer = new T.WebGLRenderer({
  canvas: canvas,
});

// Cursor
const cursor = {
  x: 30,
  y: 30,
};
window.addEventListener("mousemove", (e) => {
  cursor.x = e.clientX;
  cursor.y = -e.clientY;
  console.log(cursor.y);
});

scene.add(mesh, camera);

const tick = () => {
  camera.position.x = cursor.x;
  camera.position.y = cursor.y;
  camera.lookAt(mesh.position);

  renderer.render(scene, camera);
  requestAnimationFrame(tick);
};
tick();
