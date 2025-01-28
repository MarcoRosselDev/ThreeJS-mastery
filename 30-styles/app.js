// Syntax error from the start

/* var greeting = "Hello";
console.log(greeting);
greeting = ."Hi";
// SyntaxError: unexpected token . */

/*  El navegador lanza un error antes de la ejecucion del programa
por que greeting esta bien formulado
y el console.log tambien.

La unica explicacion para este comportamiento es que
el programa primero se compila y analiza.
*/

// Early error ----- error temprano:

console.log("Howdy");

saySomething("Hello", "Hi");
// Uncaught SyntaxError: Duplicate parameter name not
// allowed in this context

function saySomething(greeting, greeting) {
  "use strict";
  console.log(greeting);
}

/* es use strict no permite que la funcion utilice nombres de parametro siguales,
entre muchas otras cosas.
pero como save JS que el use strict esta activado dentro de la funcion?
solo se explica por la comliacion y analicis pervio a su ejecucion.
 */
