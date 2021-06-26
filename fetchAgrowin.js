 //AGROWIN////////////////////////////////////////////////////////////
 ////FETCH////
const fetch = require('node-fetch');



//Escriba a continuación la URL donde se encuentra su Agente de servicios web de ContaPyme.
var URLUbicacion = 'http://10.120.12.104:9000'
//Invocamos la función que retorna controlKey para modo aprendizaje
var controlkey = ""//getControlKey(URLUbicacion);
//1001 es el iapp configurado para agente de servicios web de ContaPyme.
var iapp = "1001";

//dataJSON: parámetros de entrada para la función
var dataJSON = {
    "email": "salomon.castillo@airpak-latam.com",
    "password": "f60e0810503ab4aa52c83676cde1009c",
    "idmaquina": "537.22_136301143299"
};


// SE AUTENTICA EN AGROWING
autenticar()



function autenticar(){

    //Se arma los 4 parámetros de entrada de la funcion
    var JSONSend ={"_parameters" : [ JSON.stringify(dataJSON), controlkey, iapp ,"0" ] };

    let  URLFuncion = '/datasnap/rest/TBasicoGeneral/"GetAuth"/'; 
    //Se construye la URL completa la cual es la concatenación de la ubicación y la función
    let URL = URLUbicacion + URLFuncion;

    let key


    fetch(URL,
        {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: 'POST',
          body: JSON.stringify(JSONSend)
      }
        
      
        )
        .then(response => response.json()) 
        .then(data => {
            console.log(JSON.stringify(data))
            key=data.result[0].respuesta.datos.keyagente;

            articulos(key)


      })
        /*.catch(rejected => {
          console.log(rejected)})*/

}
  

function articulos( key){

    
    controlkey=key
    dataJSON={
        "sql":"SELECT IRECURSO,NRECURSO,NUNIDAD,IGRUPOINV,NUNIDADCOMPRA FROM INVMREC"
    }



     //Se arma los 4 parámetros de entrada de la funcion
     var JSONSend ={"_parameters" : [ JSON.stringify(dataJSON), controlkey, iapp ,"0" ] };

    let  URLFuncion = '/datasnap/rest/TBasicoGeneral/"GetSql"/'; 
    //Se construye la URL completa la cual es la concatenación de la ubicación y la función
    let URL = URLUbicacion + URLFuncion;

  

    fetch(URL,
        {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: 'POST',
          body: JSON.stringify(JSONSend)
      }
        
      
        )
        .then(response => response.json()) 
        .then(data => {
            console.log(JSON.stringify(data))
            
                console.log(`Se encontraron ${data.result[0].respuesta.datos.length} artículos`)
            
      })
        /*.catch(rejected => {
          console.log(rejected)})*/

}