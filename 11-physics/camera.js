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

// use stict
// https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/get-started/ch2.md

// Do you know javasScript? github book
