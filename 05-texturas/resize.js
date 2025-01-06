import { size, camera, renderer } from "./main.js";

window.addEventListener("resize", () => {
  size.alto = window.innerHeight;
  size.ancho = window.innerWidth;
  //camera.updateProjectionMatrix();
  renderer.setSize(size.ancho, size.alto);

  camera.aspect = size.ancho / size.alto;
  camera.updateProjectionMatrix();
  //renderer.render(scene, camera);
});
