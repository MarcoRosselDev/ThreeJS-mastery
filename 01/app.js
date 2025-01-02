import * as T from "three";
const scene = new T.Scene();
const box = new T.BoxGeometry(1, 1, 1); // width, height, depth
const material = new T.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new T.Mesh(box, material);
const sizes = {
  width: 1200,
  height: 620,
};
const camera = new T.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 20);
camera.position.z = 3;
camera.position.x = 1;
camera.position.y = 1;
// movimiento de mesh o camera
mesh.position.z = -1;
mesh.position.x = 1;
// axes helper -- eje auxiliar
// azul = z
// rojo = x
// verde= y
const axesHelper = new T.AxesHelper(3); // (numero) = el largo que queremos ver
scene.add(axesHelper);

// escalar objetos
/* mesh.scale.x = 2;
mesh.scale.y = 0.25;
mesh.scale.z = 0.5; */

// rotacion objetos
mesh.rotation.x = Math.PI * 0.25;
mesh.rotation.y = Math.PI * 0.25;

const canvas = document.querySelector("canvas.webgl");
const renderer = new T.WebGLRenderer({
  canvas: canvas,
});

// look at this
// camera.lookAt(new T.Vector3(0,-1, 0));
camera.lookAt(mesh.position);

scene.add(mesh, camera);
renderer.render(scene, camera);
