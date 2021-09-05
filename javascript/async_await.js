////FETCH////
const fetch = require('node-fetch'); //PARA USAR CON NODE.JS




pocket().then(result=>{creartabla(result.results)})


//console.log(JSON.stringify(pk))
///CON ASYNC AWAIT//
async function pocket(){

 const response=await fetch('https://pokeapi.co/api/v2/pokemon')

 const result=await response.json()
 return result

  /*.then(response => response.json()) 
  .then(data => console.log(data))*/

}


 

 /////SIN ASYNC AWAIT////
 fetch('https://pokeapi.co/api/v2/pokemon')

.then(response => response.json()) 
  .then(data => console.log(data))

