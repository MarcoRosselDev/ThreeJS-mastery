for (let i = 0; i < 100; i++) {
  console.log(Math.random() * 3);
}

const particlesMaterial = new THREE.PointMaterial();
particlesMaterial.alphaMap = true;
particlesMaterial.alphaTest = 0.001; // no el mejor
particlesMaterial.depthTest = false; // desactivar transparencia y se sobrepixelea
particlesMaterial.depthWrite = false; // desactiva la sobre pixeleada

particlesMaterial.blending = THREE.AdditiveBlending; // adicion de luz en las intersecciones de colores
// cuidado tiene alto coste en el rendimiento
