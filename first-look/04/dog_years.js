// los primeros dos años cuentan como 10.5 años humanos
// luego cada año cuenta como 4 años humanos

// mi edad acual
let myAge = 31;

let earlyYears = 2;
// multiplicamos los primeros dos años por 10.5
earlyYears *= 10.5;

let laterYears = myAge - 2;

// multiplicamos lo que queda de mi edad por 4
laterYears *= 4;

// suma de los primeros dos años y el resto
let myAgeInDogYeaers = laterYears + earlyYears;

// toLowerCase retorna el string y minusculas
const myName = "Marco".toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYeaers} years old in dog years.
`);
