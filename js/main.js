
function Producto (id, tipo, cantidad, precio) {
    this.id = id;
    this.tipo = tipo;
    this.cantidad = cantidad;
    this.precio = precio;
    this.stock = function() { alert ("Quedan " + this.cantidad + " unidades de " + this.tipo + " tiene un precio de " + this.precio)};
}
let producto1 = new Producto ( 1,"riñonera", 50, 1000);
let producto2 = new Producto ( 2,"buff", 10, 500);
let producto3 = new Producto ( 3,"magnesiera", 7, 1200)
/*Arrays */
const listaDeProductos = [producto1, producto2, producto3];
//método push
listaDeProductos.push(new Producto( 4, "cuellitos", 15, 400));
for(const producto of listaDeProductos){
    console.log(producto)
}
//método length para ir viendo cuantos productos hay en mi array
console.log(listaDeProductos.length);
/*Acá voy a codear un método de busqueda ya que tengo pensado en sumarle a cada categoría (cuellito,riñonera,etc.)
 más productos y diferenciarlos por motivos de estampado para sumarle mas contenido. Por ahora solo lo dejo planteado después cuando
 sume los productos le agregare mas funcionalidad*/
 const buscador1 = listaDeProductos.find(elemento => elemento.tipo === "riñonera");
 console.log(buscador1);
 const buscador2 = listaDeProductos.find(elemento => elemento.tipo === "buff");
 console.log(buscador2);
 const buscador3 = listaDeProductos.find(elemento => elemento.tipo === "magnesiera");
 console.log(buscador3);
 const buscador4 = listaDeProductos.find(elemento => elemento.tipo === "cuellitos");
console.log(buscador4);

//menu para realizar acciones 
// función para preguntar stock y precio de los productos
let eleccion = prompt("ingrese el producto que quiere para saber su precio y stock. Seleccione entre riñonera, buff o magnesiera. 1 para salir");
while (eleccion != 1) {
    switch (eleccion) {
        case "riñonera":
            alert(producto1.stock());
            break;
        case "buff":
            alert(producto2.stock());
            break;
        case "magnesiera":
            alert(producto3.stock());
            break;
        default: 
            break;
    }
}


//ordenador por menor precio
const precioMenor = listaDeProductos.sort((a, b) => {
    let precioA = a.precio;
    let precioB = b.precio;
    if (precioA == precioB){
        return 0;
    }
    if (precioA < precioB){
        return -1;
    }
    return 0
}
);
alert(precioMenor);

//Ordenador por mayor stock 
const stockMayor = listaDeProductos.sort((a, b) => {
    let stockA = a.cantidad;
    let stockB = b.cantidad;
    if (stockA == stockB){
        return 0;
    }
    if (stockA > stockB){
        return -1;
    }
    return 0
}
);
alert(stockMayor);