import * as T from "three";
import { tick } from "./main.js";

const image = new Image();
const textura = new T.Texture(image);
image.addEventListener("load", () => {
  textura.needsUpdate = true;
  //tick();
});
image.onload = () => {
  console.log("imagen cargando ...");
};

image.src = "/static/color.jpg";

export { textura };
