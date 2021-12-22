
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
let producto4 = new Producto ( 4,"cuellitos", 15, 400)
/*Arrays */
/*Arrays */
const listaDeProductos = [producto1, producto2, producto3, producto4];
// creación del listado de prodcutos en el html 
for(const producto of listaDeProductos){
    let nuevodiv = document.createElement("div");
    nuevodiv.innerHTML = `<h1> ID: ${producto.id}</h1>
                          <h2> Producto: ${producto.tipo}</h2>
                          <h3> $ ${producto.precio}</h3>
                          <h3> $ ${producto.cantidad}</h3>`
    document.body.appendChild(nuevodiv);
}
//método length para ir viendo cuantos productos hay en mi array
//console.log(listaDeProductos.length);
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
const menu = () =>{
    let opcion = parseInt(prompt(`Ingrese la opcion desea:
    1-preguntar stock
    2-Ordenar por menor precio
    3-ordenar por mayor stock
    4-Salir`))

    switch (opcion) {
        case 1:
            elegir()
            break;
        case 2:
            alert(precioM())
            break;
        case 3:
            alert(stockM())
            break;
        default:
            alert("Muchas gracias por visitar nuestra página")
            break;
    }
}
menu()

function elegir(){
    let eleccion = parseInt(prompt("ingrese el producto que quiere para saber su precio y stock. Seleccione entre 1 riñonera, 2 buff o  3 magnesiera 4 cuellitos"))
            switch (eleccion) {
                case 1:
                    alert(producto1.stock());
                    break;
                case 2:
                    alert(producto2.stock());
                    break;
                case 3:
                    alert(producto3.stock());
                    break;
                case 3:
                    alert(producto3.stock());
                    break;
                case 4:
                    alert(producto4.stock());
                    break;
        
                    
            }
        }





//ordenador por menor precio
function precioM() {
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
  )  
  alert(precioMenor)
}

//Ordenador por mayor stock 
function stockM() {
    const  stockMayor = listaDeProductos.sort((a, b) => {
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
    alert(stockMayor)
}

