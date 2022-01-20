//  método ready de jquery
$(function(){

/*	//Ajax y json
const URLGET = "/products.json";

$("body").prepend('<button id="btJson" class="section__section__a__button">GET<button/>');
$("#btJson").click(() => {
    $.get(URLGET, function (respuesta, estado){
        if(estado === "success"){
            dataBase = respuesta;
        
        }
    })
})
*/

//dom para imprimir los productos en el html
const renderProduct = () => {
	products.forEach(product => {
		container.innerHTML += `
		<div>
			<h2 class="section__div__div__p"> ${product.name}</h2>
			<img class="section__div__div__img section__div__div__img--ind" src="${product.img}"/>
			<p class="section__div__div__p">$${product.price}</p>
			<button id="${product.id}" class="section__section__a__button"> Agregar al carrito</>
		</div>
		`
	});
}


const addToCart = e=> {
	if(e.target.classList.contains('section__section__a__button')){
		const saveId = products.find(product => product.id == e.target.id)
		cart.push(saveId);
		$("#cart-containerJs").show()
		renderCart();
		saveCartInLocalStorage()
		
	}
	
}


//funcion para agregar al carrito

 
//cambiar el css con jquery
$("#cart-containerJs").css({"background-image": "linear-gradient(to right top, #371f05, #63461d, #907233, #b9a44c, #dfd96a)",
							 "border-top": "solid 2px rgba(37, 37, 37, 0.637)",
							}); 


					  

//imprimir en el carrito
const renderCart = () => {
	cartContainer.textContent = '';
	cart.forEach(product => {
		cartContainer.innerHTML += `
		<div>
			<h2 class="section__div__div__p"> ${product.name}</h2>
			<img class="section__div__div__img section__div__div__img--ind--js" src="${product.img}"/>
			<p class="section__div__div__p">$${product.price}</p>
			<button id="${product.id}" class="section__section__a__button__2"> Eliminar del carrito</>
		</div>
		`
	});
}
	



//evento con jquery
toggleButton.click(()=>{
	$("#cart-containerJs").toggle();
});


//vaciar carrito
    
 function cartClear() {
	
	cart = [];
	renderCart();
	localStorage.clear();

}


//Guardar carrito
function saveCartInLocalStorage () {
	cartLocalStorage.setItem('cart', JSON.stringify(cart));
}

function cartLoadFromLocalStorage () {
	// ¿Existe un carrito previo guardado en LocalStorage?
	if (cartLocalStorage.getItem('cart') !== null) {
		// Carga la información
		cart = JSON.parse(cartLocalStorage.getItem('cart'));
	}
}



	// Evento para borrar un elemento del carrito
    
   
const removeFromCart = e=>{
	e.preventDefault();
	let products;
	if(e.target.classList.contains('section__section__a__button__2')){
		e.target.parentElement.parentElement.remove();
		products = e.target.parentElement.parentElement;
	}
}


    //vaciar 
    
    function cartClear() {
        // Limpiamos los productos guardados
        cart = [];
        // Renderizamos los cambios
        renderCart();
        // Borra LocalStorage
        localStorage.clear();
    }


    // Eventos
    
	clearButton.addEventListener('click', cartClear);
	container.addEventListener('click', addToCart);
	containerJs.addEventListener('click', removeFromCart);
	$(document).ready(getproductsJson);

  
//Inicialización

cartLoadFromLocalStorage();
renderProduct();
renderCart();


}
)
