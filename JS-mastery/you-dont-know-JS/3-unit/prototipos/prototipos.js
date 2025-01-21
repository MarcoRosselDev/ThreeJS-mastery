/* Al parecer muy pocas cosas no son objetos en JS */

const obj = {
  nombre: "marco",
  edad: 31,
  saludar: function () {
    console.log("Hola buenos dias");
  },
};

const b = new Object(obj);
//console.log(b);

Object.prototype.despedir = function () {
  // crea una funcion que heredan todos los objetos creados
  console.log("Hasta luego");
};

const c = Object.create(null); // no tiene prototipos ---------------------------------
c.name = "marco";
c.age = 30;

console.log(c);
