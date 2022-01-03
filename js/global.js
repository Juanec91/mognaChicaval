//global variables
const container = document.getElementById('container')
const cartContainer = document.getElementById('cart-containerJs')
const containerJs = document.getElementById('cart-containerJs')
//variables del carrito 
let cart = [];



// array de productos
let products = [
    {
        id: 1,
        name: 'Riñonera',
        img: '../img/rinoDos.jpg',
        price: 1000,
        stock: 50,
    },
    {
        id: 2,
        name: 'Buff',
        img: '../img/buffDos.jpg',
        price: 500,
        stock: 10,
    },
    {
        id: 3,
        name: 'Magnesiera',
        img: '../img/magnesierasUno.jpg',
        price: 1200,
        stock: 7,
    },
    {
        id: 4,
        name: 'Cuellitos',
        img: '../img/cuellitoDos.jpg',
        price: 400,
        stock: 15,
    },
];

//storage
if (localStorage.products) {
    products = JSON.parse(localStorage.getItem("products"))
} else{
    saveStorage("products", products)
}

/*const localSave = (clave, valor) => { localStorage.setItem(clave, valor)}
for ( const product of products) {
    localSave(product.id, JSON.stringify(product))
}

console.log(localSave)*/