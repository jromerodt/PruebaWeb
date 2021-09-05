const lib = require('./funcion_parametro.js');


let p1=5;
let p2=10


//funcion asignada como objeto a una variable
var fc=lib.multiplicar;

//ejecutando la funcion como parametro
console.log(lib.funcParam(fc,p1,p2));

