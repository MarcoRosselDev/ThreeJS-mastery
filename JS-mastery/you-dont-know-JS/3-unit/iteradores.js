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
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
var buttonNames = new Map();
buttonNames.set(btn1, "open");
buttonNames.set(btn2, "close");

for (let [a, b] of buttonNames) {
  a.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(`clickeaste el boton ${b}`);
  });
}

// iteraciones mas detalladas----------------------------------------------------------------

// solo valres
for (let btnName of buttonNames.values()) {
  console.log(btnName);
}
// Button 1
// Button 2

var arr = [10, 20, 30];
// solo entradas
for (let [idx, val] of arr.entries()) {
  console.log(`[${idx}]: ${val}`);
}
// [0]: 10
// [1]: 20
// [2]: 30

// En su mayor parte, todos los iterables integrados en JS tienen tres formas de iterador disponibles:
// solo claves ( keys()), solo valores ( values()) y entradas ( entries()).
