
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const fetch = require('node-fetch');
//var xhr = new XMLHttpRequest();

function getPosts(success, error) {
    var req = new XMLHttpRequest();
        req.open('GET', 'https://jsonplaceholder.typicode.com/posts');
    
        req.onload = function() {
          if (req.status == 200) {
            success(JSON.parse(req.response));
          }
          else {
            error();
          }
        };
    
        req.send();
    }
 /*   
    getPosts(
        function(r) {
            console.log(r)
        },
        function(r) {
            console.log('Ocurrió un error')
        },
    )*/


    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(resp => resp.json()) 
        .then(data => {
            //console.log(JSON.stringify(data))
        })



        let promesa=

          new Promise((resolve,reject)=>{

            setTimeout(function(){

              let second =  new Date().getSeconds();

                if(second%2==0){
                  resolve( {tiempo:second, msg:'Exitoso'})

                }else{
                  reject({tiempo:second, msg:'Fracaso'})
                }

              
            },250)


          });

        


        promesa
        .then(data=>{
          console.log(`Prueba de mi promersa:${data.msg}, segundos:${data.tiempo}`)
          //return data.json()
          return 'Para seguir en la promesa'
        })
        .then(dt=>{console.log(dt) 
          return 'Seguimos de nuevo'
        })
        .then(x=>console.log(x))
        .catch(reject=>console.log(`Esta promesa no funciono:${reject.msg}, segundos:${reject.tiempo}`))




        let awPromesa=async function(){

          try{

          let pr=await promesa;
          console.log(`Promesa con await ${pr.msg} segundos ${pr.tiempo}`);
          console.log ("Linea despues de la promsa");



          }catch{
            console.log("Hubo una falla en la promesa")
          }
          
        }

        //awPromesa();

        