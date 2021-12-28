//Funcion constructora
function auto(type, model, year){
    this.type = type;
    this.model = model;
    this.year = year;
} 

var auto1 = new auto("Toyota", "Corolla", 2021);

//Recorriendo arrays
var articulos = [
    {name: "Bateria", cost: 1900},
    {name: "Display", cost: 18000},
    {name: "Topcase", cost: 12000},
    {name: "Logic Board", cost: 21000},
    {name: "iPhone 11 Pro Max", cost: 28000},
    {name: "iPad 8va Gen", cost: 9500},
    {name: "Apple Pencil", cost: 3200},
]; 

//Filter
var articulosFilter = articulos.filter(function(articulo){
    return articulo.cost <=10000;
});

//Map
var articulosMap = articulos.map(function(articulo){
    return articulo.name;
});

//Find
var articulosFind = articulos.find(function(articulo){
    return articulo.name === "Logic Board";
});

//ForEach
articulos.forEach(function(articulo){
    console.log(articulo.name);
});

/*
find() : Devuelve el primer elemento del array que cumpla con la condición dada
foreach() : Ejecuta lo que le definamos una vez por cada elemento de nuestro array
some() : Comprueba si al menos un elemento del array cumple con la condición que le damos
filter() : Devuelve todos los elementos del array que cumplan con la condición dada 
*/