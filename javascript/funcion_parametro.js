


//funcion anonima
x=function (b){
    return 5*b
}

//suma
function sumar(a,b){
    return a+b
}

//resta
function restar(a,b){
    return a-b
}

//multiplicar
function multiplicar(a,b){
    return a*b
}

//dividir
function dividir(a,b){
    return a/b
}


//funcion como parametro de otra
function funcParam(fun,x,y){
    return fun(x,y)
}

//funcion asignada como objeto a una variable
var fc=multiplicar

//ejecutando la funcion como parametro
//console.log(funcParam(fc,10,15))


// Exportamos las funciones (para usarlas en otro archivo js)
module.exports = {
    sumar,
    multiplicar,
    funcParam
}




