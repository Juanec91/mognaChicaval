

function Producto(id, tipo, cantidad, precio) {
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