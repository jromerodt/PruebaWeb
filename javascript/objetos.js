var movil = {Marca:"Alcatel", Peso:"5 onzas", pantalla: "5 pulgadas", Color:"Negro"};
console.log(movil);
console.log(movil.Marca)
 console.log( movil["Marca"])


var movil_1 = new Object();
movil_1.Marca="Alcatel";
movil_1.Peso="5 onzas";
movil_1.Pantalla="5 pulgadas";
movil_1.Color="Negro";

console.log(movil_1);


function movil_2(marca, peso, pantalla, color) { 
	this.Marca = marca;
	this.Peso = peso;
	this.Pantalla = pantalla;
	this.Color = color;
}
var compra = new movil_2("Alcatel", "5 onzas", "5 pulgadas", "Negro");

console.log(compra);


var movil_3 = {
	Marca: "Alcatel",
	encendido : function(c) {
		return "Mi movil marca" +" "+ this.Marca +" "+ `esta encendido(${c})`; 

	}};
	
console.log(movil_3.encendido('creo'));
