import * as T from "three";
import { textura } from "./textures.js";
//------------------------------------------------------- geometria
const cubo = new T.BoxGeometry(1, 1, 1);
const material = new T.MeshBasicMaterial({ map: textura });
const mesh = new T.Mesh(cubo, material);
//-----------------------------------------------------------camara
const size = {
  ancho: window.innerWidth,
  alto: window.innerHeight,
};
const camera = new T.PerspectiveCamera(75, size.ancho / size.alto, 0.1, 20);
camera.position.set(3, 3, 3);
camera.lookAt(mesh.position);
//-------------------------------------------------------------scene
const scene = new T.Scene();
const luz_ambiental = new T.AmbientLight("red", 2);
scene.add(mesh, luz_ambiental, camera);
//----------------------------------------------------------renderer
const canvas = document.querySelector(".webgl");
const renderer = new T.WebGLRenderer({
  canvas,
  antialias: true,
  logarithmicDepthBuffer: true,
});
renderer.setSize(size.ancho, size.alto);
//------------------------------------------------------------- tick fn
const tick = () => {
  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.01;
  mesh.rotation.z += 0.01;
  renderer.render(scene, camera);
  requestAnimationFrame(tick);
};

tick();

export { size, camera, renderer, scene, tick };
