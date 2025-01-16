// iterador for of
/* incorporado en ES6 por consenso de la comunidad de como iterar datos */

var arr = [10, 20, 30];

for (let val of arr) {
  console.log(`Array value: ${val}`);
}

/* ES6 definió los tipos básicos de estructuras y colecciones de datos en JS como iterables. 
Esto incluye cadenas, matrices, mapas, conjuntos y otros. */

var greeting = "Hello world!";
var chars = [...greeting];

console.log(chars);
// [ "H", "e", "l", "l", "o", " ",
//   "w", "o", "r", "l", "d", "!" ]
