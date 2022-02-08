//global variables
let dataBase = [
    {
        "id": 1,
        "name": "Riñonera",
        "img": "../img/rinoDos.jpg",
        "price": 1000,
        "categoria": "rinonera",
     
    },
    {
        "id": 2,
        "name": "Buff",
        "img": "../img/buffDos.jpg",
        "price": 500,
        "categoria": "buff",
      
    },
    {
        "id": 3,
        "name": "Magnesiera",
        "img": "../img/magnesierasUno.jpg",
        "price": 1200,
        "categoria": "magnesiera",
   
    },
    {
        "id": 4,
        "name": "Cuellitos",
        "img": "../img/cuellitoDos.jpg",
        "price": 400,
        "categoria": "cuellito",
        
    },
    {
        "id": 5,
        "name": "Magnesiera",
        "img": "../img/magnesierasDos.jpg",
        "price": 1200,
        "categoria": "magnesiera",
      
    },
    {
        "id": 6,
        "name": "Buff",
        "img": "../img/buffUno.jpg",
        "price": 500,
        "categoria": "buff",
 
    },
    {
        "id": 7,
        "name": "Cuellitos",
        "img": "../img/cuellitoUno.jpg",
        "price": 400,
        "categoria": "cuellito",
   
    },
    {
        "id": 8,
        "name": "Riñonera",
        "img": "../img/rinoUno.jpg",
        "price": 1000,
        "categoria": "rinonera",
       
    },
    {
        "id": 9,
        "name": "Magnesiera",
        "img": "../img/magnesierasTres.jpg",
        "price": 1200,
        "categoria": "magnesiera",
       
    },
    {
        "id": 10,
        "name": "Buff",
        "img": "../img/buffTres.jpg",
        "price": 500,
        "categoria": "buff",
     
    },
    {
        "id": 11,
        "name": "Cuellitos",
        "img": "../img/cuellitoTres.jpg",
        "price": 400,
        "categoria": "cuellito",
       
    },
    {
        "id": 12,
        "name": "Riñonera",
        "img": "../img/rinoTres.jpg",
        "price": 1000,
        "categoria": "rinonera",
       
    }

    ]
    
 
    
//variables del carrito 

let cart = [];
const money = '$';
const DOMitems = document.getElementById('items');
const cartDOM = document.getElementById('carrito');
const DOMtotal = document.getElementById('total');
const clearButtonDOM = document.getElementById('boton-vaciar');
const myLocalStorage = window.localStorage;


