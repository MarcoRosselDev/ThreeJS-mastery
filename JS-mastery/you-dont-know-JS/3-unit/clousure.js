/* function obtener(mensaje) {
  return function saludar(nombre) {
    return `Hola buenos dias ${nombre}, tenemos un mensaje para ti: ${mensaje}`;
  };
}

const msj = obtener("te gusta el pico");
console.log(msj); // [Function: saludar]

const rtrn = msj("Usuario x");

console.log(rtrn); // Hola buenos dias Usuario x, tenemos un mensaje para ti: te gusta el pico
console.clear(); */
// prueba de cierre de funciones en variables

function conteo(steps = 1) {
  var count = 0;
  return function add() {
    return (count += steps);
  };
}

var test1 = conteo(1);
var test2 = conteo(3);

console.log(test1());
console.log(test1());
console.log(test2());
console.log(test2());

/* test1();
console.log(test1());
test2();
console.log(test2());
console.group(test1(), console.log(test1), test1(), console.log(test1));
console.group(test2(), console.log(test2), test2(), console.log(test2));


/* function counter(step = 1) {
  var count = 0;
  return function increaseCount() {
    count = count + step;
    return count;
  };
}

var incBy1 = counter(1);
var incBy3 = counter(3);

//incBy1(); // 1
console.log(incBy1());
console.log(incBy1());

//incBy1(); // 2

//incBy3(); // 3
//incBy3(); // 6
//incBy3(); // 9
console.log(incBy3());
console.log(incBy3());
console.log(incBy3());
 */
