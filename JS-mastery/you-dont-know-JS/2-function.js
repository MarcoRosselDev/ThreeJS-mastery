// expresion de funcion
/* A diferencia de la forma de declaración de función, una expresión de función no se asocia con 
su identificador hasta que se realiza esa declaración durante el tiempo de ejecución. */
var a = function (params) {
  return amazingStuff;
};

// declaracion de funcion
function b(params) {
  return amazingStuff;
}

/* JS trata a las funciones como un valor, este puede ser paasado a otros lenguajes.
No todos los lenguajes tratan a las funciones como valores */

// las funciones pueden retornar valores y almacenarlas en variables

var whatToSay = {
  greeting() {
    console.log("Hello!");
  },
  question() {
    console.log("What's your name?");
  },
  answer() {
    console.log("My name is Kyle.");
  },
};

//const c = whatToSay.greeting();
console.log(whatToSay.answer());
// Hello!
