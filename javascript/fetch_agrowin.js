 //AGROWIN////////////////////////////////////////////////////////////


 var credenciales=	{
  "ip" : "10.120.12.104",
  "port" : "9000",
  "user" : "salomon.castillo@airpak-latam.com",
  "pass" : "f60e0810503ab4aa52c83676cde1009c",
  "nApp" : "1001",
  "GetAuth" : "/datasnap/rest/TBasicoGeneral/\"GetAuth\"/",
  "GetSql" : "/datasnap/rest/TBasicoGeneral/\"GetSql\"/",
  "GetListaOperaciones":"/datasnap/rest/TCatOperaciones/\"GetListaOperaciones\"/",
  "DoExe" : "/datasnap/rest/TCatOperaciones/\"DoExecuteOprAction\"/",
  "GetInv" : "/datasnap/rest/TInventarios/\"GetListaMovInventario\"/",
  "ChangeEmp" : "/datasnap/rest/TBasicoGeneral/\"SetDatosTrabajo\"/",
  "dataListOperaciones":{ "datospagina": {"cantidadregistros": "200","pagina": "1"},
    "camposderetorno": ["inumoper","tdetalle","fcreacion","ncorto","iestado","ntdsop","ntercero","fsoport","snumsop","banulada","mingresos","megresos","mtotaloperacion"],
    "ordenarpor": {"fsoport": "desc"},"itdoper":["COM1"],"fmes":"7","fanio":"2019"
  },
  "sqlPresupuesto" : "SELECT c.IEMP as iemp, c.FSOPORT as fsoport, c.TDETALLE as tdetalle, c.INUMSOP as inumsop, c.IETAPA as ietapa,c.ISEDE as isede, c.ICC as icc, c.ICUENTA as icuenta, c.ICTAPPTO as ictappto,c.MDEBITO as mdebito,  c.MCREDITO as mcredito, c.MSALDO as msaldo, SVALORADIC4 as ciclo,ti.CALC_NTERCERONAPELLIDO as tercero, ci.NCUENTANIIF as bniif FROM CNTMOVUN c LEFT JOIN ACTIVIDADES a ON (c.IACTIVIDAD=a.IACTIVIDAD) LEFT JOIN OPRMAEST o  ON (c.IEmp=o.IEmp) AND (c.INUMOPER=o.INUMOPER) LEFT JOIN CNTPUC ci  ON (c.ICTAPPTO=ci.ICUENTA) AND (c.ICUENTA=ci.ICUENTA) LEFT JOIN ABANITS ti  ON (c.INITVENDEDOR=ti.INIT) AND (c.INIT=ti.INIT) WHERE c.FSOPORT BETWEEN feIni AND feFin AND (c.BLocal='T') AND (c.ICUENTA IN ('110304', '110401') OR (c.ICUENTA LIKE '6%%') )",
  "sqlFacturas":"SELECT iemp AS IdEmpresa,fsoport AS fecha,inumoper AS Id,inumsop AS NumFactura,tdetalle AS detalle,msaldo AS total FROM CNTMOVUN c  WHERE c.FSOPORT BETWEEN feIni AND feFin AND c.inumsop LIKE 'FC-%%' AND tdetalle NOT LIKE '%%traslado%%'",
  "sqlInv":"SELECT * FROM KARMOVUN LEFT JOIN OPRMAEST O_INUMOPER  ON (KARMOVUN.INUMOPER=O_INUMOPER.INUMOPER) LEFT JOIN INVMREC R_IPRODUCTOORIGEN  ON (KARMOVUN.IPRODUCTOORIGEN=R_IPRODUCTOORIGEN.IRECURSO) LEFT JOIN INVMREC R_IPRODUCTO  ON (KARMOVUN.IPRODUCTO=R_IPRODUCTO.IRECURSO) LEFT JOIN EMPMAESTCC N_ICC  ON (KARMOVUN.IEmp=N_ICC.IEmp) AND (KARMOVUN.ICC=N_ICC.ICC) WHERE (KARMOVUN.FSoport BETWEEN '2019-08-01'  AND '2019-08-31') AND ( KARMOVUN.ITDMOV = 3009)",
  "sqlCK":"SELECT IEMP, FSOPORT, ICUENTA, CNTMOVUN.INIT, CNTMOVUN.INUMSOP, FPAGO, CNTMOVUN.TDETALLE, MDEBITO, MCREDITO, MSALDO  IFLUJO, ICHEQUE FROM  CNTMOVUN WHERE ((CntMovUn.ICuenta LIKE '110102%')) AND (CNTMOVUN.Fmes=4 and CNTMOVUN.Fanio=2020 ) AND (CNTMOVUN.BLocal='T')",
  "empresas":{
    "san samuel" :{ "id": "1" , "nombre": "Agricola San Samuel S.A" },
    "el mango" : { "id":"2", "nombre": "Agricola El Mango S.A" },
    "pcm" : { "id": "3", "nombre": "Piero Coen Montealegre" },
    "incosa" : { "id": "4", "nombre": "INCOSA" },
    "azucarera" : { "id": "7", "nombre" : "Agricola Azucarera S.A" }
  }
  }








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
autenticar().then(key=>articulos( key))

//TRAER ARTICULOS



async function autenticar(){

    //Se arma los 4 parámetros de entrada de la funcion
    var JSONSend ={"_parameters" : [ JSON.stringify(dataJSON), controlkey, iapp ,"0" ] };

    let  URLFuncion = '/datasnap/rest/TBasicoGeneral/"GetAuth"/'; 
    //Se construye la URL completa la cual es la concatenación de la ubicación y la función
    let URL = URLUbicacion + URLFuncion;

    let key

const response=await
    fetch(URL,
        {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: 'POST',
          body: JSON.stringify(JSONSend)
      }
        
      
        );

      const data=await response.json();
      key=data.result[0].respuesta.datos.keyagente;

      return key

        /*.then(response => response.json()) 
        .then(data => {
            console.log(JSON.stringify(data))
            key=data.result[0].respuesta.datos.keyagente;

            articulos(key)


      })*/
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
            //console.log(JSON.stringify(data))
            
                console.log(`Se encontraron ${data.result[0].respuesta.datos.length} artículos`)
            
               creartabla(data)
      })
        /*.catch(rejected => {
          console.log(rejected)})*/

}

