////REDUCE////

const array1 = [1, 2, 3, 4,5,6,7,8,9,10];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
//console.log(array1.reduce(reducer));
// expected output: 10

//const suma=array1.reduce((a,b)=>(a+b))
//console.log(suma)

// 5 + 1 + 2 + 3 + 4
//console.log(array1.reduce(reducer, 10));
// expected output: 15

//document.write(array1.reduce(reducer, 5))


const k=function (age) {
    return age >= 18;
  }

  //document.write(k(45));

  function filtrar (edad){
    return edad>8
  }

  function m(val){
    return val*2
  }

  var p=array1.filter(filtrar)

  //console.log(array1)
//onsole.log(p)
  
//console.log(array1.reduce(m))

const rec=(acumval,nval)=>(acumval+nval*2)

//console.log(array1.reduce(rec,0))

////MAP////

let arr = [3, 4, 5, 6];

let modifiedArr = arr.map(function(element){
    return element *3;
});

console.log(modifiedArr); // [9, 12, 15, 18]


///////////////////////////////////////////

let users = [
  {firstName : "Susan", lastName: "Steward"},
  {firstName : "Daniel", lastName: "Longbottom"},
  {firstName : "Jacob", lastName: "Black"}
];

let userFullnames = users.map(function(element){
    return `${element.firstName} ${element.lastName}`;
})

console.log(userFullnames);
// ["Susan Steward", "Daniel Longbottom", "Jacob Black"]

////FETCH////
const fetch = require('node-fetch');


fetch('https://pokeapi.co/api/v2/pokemon')
  .then(response => response.json()) 
  .then(data => console.log(data))

 

 