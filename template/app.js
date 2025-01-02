import * as T from "three";
// 1
const scene = new T.Scene();
// 2
const box = new T.BoxGeometry(1, 1, 1); // width, height, depth
const material = new T.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new T.Mesh(box, material);
// 3
const sizes = {
  width: 1200,
  height: 620,
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
