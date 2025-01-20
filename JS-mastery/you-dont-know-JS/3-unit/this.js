function tarea_de_clases(profesor) {
  return function materia() {
    console.log(`${profesor} dice que estudien la materia de ${this.topic}`);
  };
}

const ticher = tarea_de_clases("Marcus");

const objeto_contexto = {
  topic: "Matematicas",
  ticher: ticher,
};

objeto_contexto.ticher();

const otro_objeto_contexto = {
  topic: "Javasrcipt",
};

ticher.call(otro_objeto_contexto);

/* One common misconception is that a function's this refers to the function itself. 
Another misconception is that this points the instance that a method belongs to.

When a function as definded, it is attached to its enclosing scope via closure.
Scope is the set of rules that controls how references to variables are resolved.

but functions also have another characteristic besides their scope that influences what they can access.
This characteristic is best described as an executin contest, and it´s exposed to the function via its this keyword.

Scope is static and contains a fixed set of variables availables at the moment and location you define a function,
but a function´s execution context is dynamic, entirely dependent on how it is called
(regardless of where it is defined or even called from).

one way to think about the execution context is that it´s a tangible object whose properties are 
made available to a function while it executes.
compare that to scope, which can also be throught of as an object; except, the scope object is hidden
inside the JS engine, it´s always the same for that function, and its properties take the form of identifier variable available insider the function.

*/
