//global variables
const container = document.getElementById('container')
const cartContainer = document.getElementById('cart-containerJs')
const containerJs = document.getElementById('cart-containerJs')
const toggleButton = $("#toggleJs")
//variables del carrito 
let cart = [];
let cartLocalStorage = window.localStorage;



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
    {
        id: 5,
        name: 'Magnesiera',
        img: '../img/magnesierasDos.jpg',
        price: 1200,
        stock: 7,
    },
    {
        id: 6,
        name: 'Buff',
        img: '../img/buffUno.jpg',
        price: 500,
        stock: 10,
    },
    {
        id: 7,
        name: 'Cuellitos',
        img: '../img/cuellitoUno.jpg',
        price: 400,
        stock: 15,
    },
    {
        id: 8,
        name: 'Riñonera',
        img: '../img/rinoUno.jpg',
        price: 1000,
        stock: 50,
    },
    {
        id: 9,
        name: 'Magnesiera',
        img: '../img/magnesierasTres.jpg',
        price: 1200,
        stock: 7,
    },
    {
        id: 10,
        name: 'Buff',
        img: '../img/buffTres.jpg',
        price: 500,
        stock: 10,
    },
    {
        id: 11,
        name: 'Cuellitos',
        img: '../img/cuellitoTres.jpg',
        price: 400,
        stock: 15,
    },
    {
        id: 12,
        name: 'Riñonera',
        img: '../img/rinoTres.jpg',
        price: 1000,
        stock: 50,
    },
];



