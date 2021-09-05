var existenciaBodega=[{"idArticulo":1,"cantidad":8,"idBodega":4},{"idArticulo":2,"cantidad":9,"idBodega":3}];
var bodega=[{"idBodega":3,"tipo":1,"nombre":"Bodga 3"},{"idBodega":4,"tipo":2,"nombre":"Bodga 4"}];

console.log(existenciaBodega);
console.log(bodega);

//SE AGREGA EL OBJETO BODEGA CORRESPONDIENTE A CADA OBJETO EXISTENCIBODEGA
existenciaBodega.forEach(x=>{
    let ft=bodega.filter(b=>b.idBodega==x.idBodega);
    x.bodega=ft
})

console.log(JSON.stringify(existenciaBodega))

