const actors = ["Morgan Freeman", "Jennifer Aniston"];

actors[0] = "Tom Cruise"; // OK :(
//actors = []; // Error!
console.log(actors);

/* No es recomendable utilizar const en objectos por que estos se modifican igual
ahun que lo declares con const, esto solo se presta para confuciones.
Se limita const para valores primitivos */
