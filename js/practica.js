

/*renderProduct();
$('section__section__a__button').click(()=>{
	$("#cart-containerJs").show()
})

container.addEventListener('click', addToCart);
containerJs.addEventListener('click', (e)=>{removeFromCart(e)});



/*function Producto(id, tipo, cantidad, precio) {
	this.id = id;
	this.tipo = tipo;
	this.cantidad = cantidad;
	this.precio = precio;
	this.stock = function() {
		alert("Quedan " + this.cantidad + " unidades de " + this.tipo + " tiene un precio de $" + this.precio)
	};
	this.precioMostrar = function() {
		alert("Su compra tiene un costo de $ " + this.precio)
	}
	this.cambioStock = function(cantidad, precio, volumen, descuento, porcentaje) {
		if (volumen <= cantidad) {
			cantidad -= volumen;
			precioFinal += calculoPrecio(precio, volumen, descuento, porcentaje)
		} else {
			mostrar('No tenemos disponible esa cantidad')
		}
	}
}
let producto1 = new Producto(1, "riñonera", 50, 1000);
let producto2 = new Producto(2, "buff", 10, 500);
let producto3 = new Producto(3, "magnesiera", 7, 1200)
let producto4 = new Producto(4, "cuellitos", 15, 400)
let nuevoDiv = []

const listaDeProductos = [producto1, producto2, producto3, producto4];
// creación del listado de prodcutos en el html 
const btn = document.getElementById("botonJs")
btn.addEventListener("click", onclick)
function onclick () {
	for (const producto of listaDeProductos)
	let nuevodiv = document.createElement('div');
	nuevodiv.innerHTML = `<h1> ID: ${producto.id}</h1>
                          <h2> Producto: ${producto.tipo}</h2>
                          <h3> $ ${producto.precio}</h3>
                          <h3> $ ${producto.cantidad}</h3>`
	document.body.appendChild(nuevodiv);
}
*/


/*const btn = document.getElementById('botonJs');
btn.addEventListener('click', escribir)
escribir = elegir()
btn.onclick = function elegir() {
	let eleccion = parseInt(prompt("ingrese el producto que quiere para saber su precio y stock. Seleccione entre: \n - 1 riñonera \n - 2 buff \n - 3 magnesiera \n - 4 cuellitos"))
	switch (eleccion) {
		case 1:
			document.createElement("div"(producto1.stock()));
			break;
		case 2:
			document.createElement("div"(producto2.stock()));
			break;
		case 3:
			document.createElement("div"(producto3.stock()));
			break;
		case 4:
			document.createElement("div"(producto4.stock()));
			break;
	}
}
elegir()

/*for (const producto of listaDeProductos) {
	let nuevodiv = document.createElement("div");
	nuevodiv.innerHTML = `<h1> ID: ${producto.id}</h1>
                          <h2> Producto: ${producto.tipo}</h2>
                          <h3> $ ${producto.precio}</h3>
                          <h3> $ ${producto.cantidad}</h3>`
	document.body.appendChild(nuevodiv);
}



//para guardar 
let saveButtom = document.getElementById('save-button')
saveButtom.addEventListener('click', saveList)
function saveList(){
    let toDos = [];

    for(let i = 0; i < toDoList.children.length; i++){
        let toDo = toDoList.children.item(i)

        let toDoInfo = {
            "tarea": toDo.innerText
        }
        toDos.push(toDoInfo)
    }
    localStorage.setItem('Lista de Tarea', JSON.stringify(toDos))
}
*/


/*Arrays */
/*const listaDeProductos = [producto1, producto2, producto3, producto4];
// creación del listado de prodcutos en el html 
for (const producto of listaDeProductos) {
	let nuevodiv = document.createElement("div");
	nuevodiv.innerHTML = `<h1> ID: ${producto.id}</h1>
                          <h2> Producto: ${producto.tipo}</h2>
                          <h3> $ ${producto.precio}</h3>
                          <h3> $ ${producto.cantidad}</h3>`
	document.body.appendChild(nuevodiv);
}


//menu para realizar acciones 
const menu = () => {
	let opcion = parseInt(prompt(`Ingrese la opcion desea:
    1-preguntar stock
    2-Comprar
    3-Salir`))

	switch (opcion) {
		case 1:
			elegir()
			break;
		case 2:
			compra()
			break;
		default:
			alert("Muchas gracias por visitar nuestra página")
			break;
	}
}
menu();

// ver stock
function elegir() {
	let eleccion = parseInt(prompt("ingrese el producto que quiere para saber su precio y stock. Seleccione entre: \n - 1 riñonera \n - 2 buff \n - 3 magnesiera \n - 4 cuellitos"))
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
		case 4:
			alert(producto4.stock());
			break;
	}
}

//mostrar msj
function mostrarM(mensaje) {
	alert(mensaje);
}

function calcularPrecio(precio, volumen, descuento, porcentaje) {
	let precioTotal = precio * volumen
	if (volumen > (descuento * 2)) {
		precioTotal = precioTotal * (porcentaje * 2)
	} else if (volumen > descuento) {
		precioTotal = precioTotal * porcentaje;
	}
	return precioTotal;
}


// funcion compra esta es demasiado sensilla no posee demasiada interaccion
/*function compra (){
    let elegirCompra = parseInt(prompt`Ingrese el numero id del producto que desea comprar
    1   riñonera
    2   buff
    3   magnesiera
    4   cuellito`)
    switch(elegirCompra){
         case 1:
        alert(producto1.precioMostrar());
        break;
    case 2:
        alert(producto2.precioMostrar());
        break;
    case 3:
        alert(producto3.precioMostrar());
        break;
    case 4:
        alert(producto4.precioMostrar());
        break;
}
}
compra()
*/


//funcion para comprar 
/*function compra() {
	let volumen = parseInt(prompt("Ingrese la cantidad de productos que desea comprar"))

	for (let i = 1; i <= volumen; i++) {

		if (compra == producto1) {
			cambioStock(producto1["cantidad"], volumen)
		} // ver acá si funciona
		else if (compra == producto2) {
			cambioStock(stock2, precio2, volumen)
		} else if (compra == producto3) {
			cambioStock(stock3, precio3, volumen)
		} else if (compra == producto4) {
			cambioStock(stock4, precio4, volumen)
		} else {
			mostrarM('No tenemos ese producto');
		}
	}

	mostrarM('El precio final es de: ' + precioFinal)
	let pago = prompt('ingrese con cuanto dinero va a pagar')
	let vuelto = pago - precioFinal
	mostrarM('este es su vuelto ' + vuelto)
}
compra();





//método length para ir viendo cuantos productos hay en mi array
//console.log(listaDeProductos.length);
/*Acá voy a codear un método de busqueda ya que tengo pensado en sumarle a cada categoría (cuellito,riñonera,etc.)
 más productos y diferenciarlos por motivos de estampado para sumarle mas contenido. Por ahora solo lo dejo planteado después cuando
 sume los productos le agregare mas funcionalidad*/
/*const buscador1 = listaDeProductos.find(elemento => elemento.tipo === "riñonera");
 console.log(buscador1);
 const buscador2 = listaDeProductos.find(elemento => elemento.tipo === "buff");
 console.log(buscador2);
 const buscador3 = listaDeProductos.find(elemento => elemento.tipo === "magnesiera");
 console.log(buscador3);
 const buscador4 = listaDeProductos.find(elemento => elemento.tipo === "cuellitos");
console.log(buscador4);*/
//ordenador por menor precio
/*function precioM() {
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
}*/ 
