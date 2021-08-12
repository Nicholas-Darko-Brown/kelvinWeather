//Today's forecast is 293K. 293 is a constant.
const kelvin = 0;
//Formula for Kelvin to Celsius is C=K-273 
const celsius = kelvin - 273;
//Formula for Celsius to Fahrenheit is F=C*(9/5)+32
let fahrenheit = celsius * (9/5) + 32;
//Round temperature in Fahrenheit
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)

//Convert to Newton
let newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`);