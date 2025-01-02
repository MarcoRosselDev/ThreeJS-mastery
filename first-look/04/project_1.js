// unidad de medida en kelvins
const kelvin = 293;

// unidad de medida en celcius que son 273 menos que kelvin
const celsius = kelvin - 273;

// fahrenheit value
const fahrenheit = Math.floor(celsius * (9 / 5) + 32);

console.log(`The themperature is ${fahrenheit} degrees Fahrenheit.`);
