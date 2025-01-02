import * as T from "three";

// we need 4 elements to create our scene and produce something on the scene
// 1 a scene
// 2 some objets
// 3 a camera
// a renderer

// 1
const scene = new T.Scene();
// 2
const box = new T.BoxGeometry(1, 1, 1); // width, height, depth
const material = new T.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new T.Mesh(box, material);
// 3
const sizes = {
  width: 800,
  height: 600,
};
const camera = new T.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 20);
camera.position.z = 3;
// 4
const canvas = document.querySelector("canvas.webgl");
const renderer = new T.WebGLRenderer({
  canvas: canvas,
});

scene.add(mesh, camera);
renderer.render(scene, camera);
