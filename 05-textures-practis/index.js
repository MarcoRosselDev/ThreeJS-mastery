import * as T from "three";
//------------------------------------------------------------------------------------testing
/* const image = new Image();
const textura = new T.Texture(image);
textura.colorSpace = T.SRGBColorSpace;
image.addEventListener("load", () => {
  textura.needsUpdate = true;
  //tick();
});
image.onload = () => {
  console.log("imagen cargando ...");
};

image.src = "/static/textures/door/color.jpg"; */

// con textureLoader

//const textureLoader = new T.TextureLoader();
//const textura = textureLoader.load("/static/textures/door/color.jpg");
//textura.colorSpace = T.SRGBColorSpace;

// loadingManager para cargar varias imagenes
const loadingManager = new T.LoadingManager();

loadingManager.onStart = () => {
  console.log("comienzo de carga de imagenes");
};
loadingManager.onLoad = () => {
  console.log("carga de imagenes completada");
};
loadingManager.onProgress = () => {
  console.log("carga de imagenes en progreso");
};
loadingManager.onError = () => {
  console.log("error en la carga de imagenes");
};
const textureLoader = new T.TextureLoader(loadingManager);
const textura = textureLoader.load("/static/textures/door/color.jpg");
textura.colorSpace = T.SRGBColorSpace;

const textura_color = textureLoader.load("/static/textures/door/color.jpg");
const textura_alpha = textureLoader.load("/static/textures/door/alpha.jpg");
const textura_oclucion_ambiental = textureLoader.load(
  "/static/textures/door/ambientOcclusion.jpg"
);
const textura_altura = textureLoader.load("/static/textures/door/height.jpg");
const textura_metal = textureLoader.load("/static/textures/door/metalness.jpg");
const textura_normal = textureLoader.load("/static/textures/door/normal.jpg");
const textura_rugosidad = textureLoader.load(
  "/static/textures/door/roughness.jpg"
);

//--------------------------------------------------------------------------------------testing

//--------------------------------------------------------------------------------------- Scene
const scene = new T.Scene();

//--------------------------------------------------------------------------------------- Canvas
const canvas = document.querySelector("canvas.webgl");
const renderer = new T.WebGLRenderer({
  canvas: canvas,
});

// --------------------------------------------------------------------------------------Geometry
const box = new T.BoxGeometry(1, 1, 1); // width, height, depth
const material = new T.MeshBasicMaterial({ map: textura });
const mesh = new T.Mesh(box, material);

// Size
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

// ----------------------------------------------escuchar el evento resize de la ventana de window
window.addEventListener("resize", () => {
  // Actualizar sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Actualizar la camara
  camera.aspect = sizes.width / sizes.height; // actualizar aspecto de camara
  camera.updateProjectionMatrix(); // lo veremos luego

  // Actualizar el renderer
  renderer.setSize(sizes.width, sizes.height); // actualizar dimenciones de canvas
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  //renderer.render(scene, camera);
});

//-------------------- escuchar el evento doble click de window para la opcion de pantalla completa
window.addEventListener("dblclick", () => {
  if (!document.fullscreenElement) {
    console.log("hir a pantalla completa");
    canvas.requestFullscreen();
  } else {
    document.exitFullscreen();
    console.log("dejar la pantalla completa");
  }
});

//------------------------------------------------------------------------------------------- Camera
const camera = new T.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 20);
camera.position.set(1, 1, 1);
camera.lookAt(mesh.position);

//------------------------------------------------------------------------------------------- Render
scene.add(mesh, camera);
// esta parte es la que se encarga de actualizar las dimenciones del canvas
renderer.setSize(sizes.width, sizes.height); // actualizar dimenciones de canvas

const tick = () => {
  //mesh.position.x += 0.01;
  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.01;
  mesh.rotation.z += 0.01;
  renderer.render(scene, camera);
  requestAnimationFrame(tick);
};

tick();
