import { size, camera, renderer, scene } from "./main.js";

window.addEventListener("resize", () => {
  size.alto = window.innerHeight;
  size.ancho = window.innerWidth;
  camera.aspect = size.ancho / size.alto;
  //camera.updateProjectionMatrix();
  camera.updateProjectionMatrix();
  renderer.setSize(size.ancho, size.alto);
  renderer.render(scene, camera);
});
