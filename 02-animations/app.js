import * as T from "three";
import gsap from "gsap";
const letfBtn = document.querySelector(".leftBtn");
const rightBtn = document.querySelector(".rightBtn");
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

letfBtn.addEventListener("click", () => {
  gsap.to(mesh.position, { duration: 3, delay: 1, x: -1.5 });
});
rightBtn.addEventListener("click", () => {
  gsap.to(mesh.position, { duration: 3, delay: 1, x: 1.5 });
});

scene.add(mesh, camera);
// requestAnimationFrame llama a una funcion en el siguiente frame
// por lo que si llamamos a la misma funcion dentro de la funcion esta se ejecutara cada segundo
const tick = () => {
  //console.log("tick");
  mesh.rotation.y += 0.01;
  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
};
tick();
