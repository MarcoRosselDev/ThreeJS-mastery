import * as T from "three";

//------------------------------------------------------- geometria
const cubo = new T.BoxGeometry(1, 1, 1);
const material = new T.MeshNormalMaterial();
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
scene.add(mesh);
//----------------------------------------------------------renderer
const canvas = document.querySelector(".webgl");
const renderer = new T.WebGLRenderer({ canvas });
renderer.setSize(size.ancho, size.alto);
renderer.render(scene, camera);

export { size, camera, renderer, scene };
