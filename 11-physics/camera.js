import * as T from "three";
console.log(T);

const camera = new T.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  20
);

const scene = new T.Scene();
const canvas = document.querySelector(".webgl");
const renderer = new T.WebGLRenderer({ canvas });

renderer.render(scene, camera);
