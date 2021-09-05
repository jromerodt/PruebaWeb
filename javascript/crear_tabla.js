pocket().then(result=>{creartabla(result.results)
console.log(result.results)})


//console.log(JSON.stringify(pk))

async function pocket(){

 const response=await fetch('https://pokeapi.co/api/v2/pokemon')

 const result=await response.json()
 return result

  /*.then(response => response.json()) 
  .then(data => console.log(data))*/

}


/*

  function creartabla(json){

    var table = document.createElement("table"); //crea la tabla
   
    //crea un titulo para la tabla
    //table.appendChild(document.createElement('caption')).appendChild(document.createTextNode("TABLA DE POKEMOS"))
    var encabezado=document.createElement('thead') //crea el encabezado
    var trh=document.createElement("tr") //agreaga una fila
    //var th1=document.createElement("th")

    //agrega columna con etiquetas
    trh.appendChild(document.createElement("th")).appendChild(document.createTextNode("id"))
    trh.appendChild(document.createElement("th")).appendChild(document.createTextNode("nombre"))
    trh.appendChild(document.createElement("th")).appendChild(document.createTextNode("url"))

    encabezado.appendChild(trh) //agra la fila al encabezado
    table.appendChild(encabezado) //agrega el encabezado a la tabla

    table.classList.add('table'); //formatea con clae boostrap
    table.classList.add('table-bordered');

    for(var i = 0, il = json.length; i < il; ++i) {
    //create row
    var row = document.createElement("tr"), //crea una fila
    td; //declara varibale tipo celda


   



    
    value=json[i]
    //create the id column
    td = document.createElement("td");
    td.appendChild(document.createTextNode(i));
    row.appendChild(td);
    
    //create name column
    td = document.createElement("td");
    td.appendChild(document.createTextNode(value.name));
    row.appendChild(td);
    
    //create last_name column
    td = document.createElement("td");
    td.appendChild(document.createTextNode(value.url));
    row.appendChild(td);
  
    td = document.createElement("td");
    td.appendChild(document.createTextNode(value.igrupoinv));
    row.appendChild(td);
  
    td = document.createElement("td");
    td.appendChild(document.createTextNode(value.nunidadcompra));
    row.appendChild(td);
    
    table.appendChild(row);
    }
    
    //document.body.appendChild(table);
    var tbl=document.getElementById("table_responsive")
    tbl.appendChild(table)
  
  
  }
*/


  
  function creartabla(json){

    var table = document.createElement("table"); //crea la tabla
   
    //crea un titulo para la tabla
    //table.appendChild(document.createElement('caption')).appendChild(document.createTextNode("TABLA DE POKEMOS"))
    var encabezado=document.createElement('thead') //crea el encabezado
    var trh=document.createElement("tr") //agreaga una fila
    //var th1=document.createElement("th")

    //agrega columna con etiquetas
    trh.appendChild(document.createElement("th")).appendChild(document.createTextNode("id"))
    trh.appendChild(document.createElement("th")).appendChild(document.createTextNode("nombre"))
    trh.appendChild(document.createElement("th")).appendChild(document.createTextNode("url"))

    encabezado.appendChild(trh) //agra la fila al encabezado
    table.appendChild(encabezado) //agrega el encabezado a la tabla

    table.classList.add('table'); //formatea con clae boostrap
    table.classList.add('table-bordered');

  json.forEach(element => {


    //create row
    var row = document.createElement("tr"), //crea una fila
    td; //declara varibale tipo celda


   



    
    
    //create the id column
    td = document.createElement("td");
    td.appendChild(document.createTextNode(rigth(element.url)));
    row.appendChild(td);
    
    //create name column
    td = document.createElement("td");
    td.appendChild(document.createTextNode(element.name));
    row.appendChild(td);
    
    //create last_name column
    td = document.createElement("td");
    td.appendChild(document.createTextNode(element.url));
    row.appendChild(td);
  
   /* td = document.createElement("td");
    td.appendChild(document.createTextNode(value.igrupoinv));
    row.appendChild(td);
  
    td = document.createElement("td");
    td.appendChild(document.createTextNode(value.nunidadcompra));
    row.appendChild(td);*/
    
    table.appendChild(row);
    
  });

//agrea la tabla al div
  var tbl=document.getElementById("table_responsive")
    tbl.appendChild(table)
}



function rigth(cadena){
  const l=String(cadena).length
  //debugger
  var s=cadena.substring(l-3)

  return s.replaceAll('/','')

}