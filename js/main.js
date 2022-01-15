//  método ready de jquery
$(function(){

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

//funcion para agregar al carrito
const addToCart = e=> {
	if(e.target.classList.contains('section__section__a__button')){
		const saveId = products.find(product => product.id == e.target.id)
		cart.push(saveId);
		$("#cart-containerJs").show()
		renderCart();
		saveCartInLocalStorage()
		
	}
	
}

 
//cambiar el css con jquery
$("#cart-containerJs").css({"background-image": "linear-gradient(to right top, #371f05, #63461d, #907233, #b9a44c, #dfd96a)",
							 "border-top": "solid 2px rgba(37, 37, 37, 0.637)",
							 "display": "grid",
							 "grid-template-columns": "repeat(4, 1fr)",
							 "grid-template-rows" : "repeat(3, 1fr)",
							 "grid-row-gap" : "2rem",
							 "justify-items": "center",
							"display": "none"	}); 



		 
					  

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
	

//funciíon para eliminar
const removeFromCart = e=>{
	e.preventDefault();
	let product, productId;
	if(e.target.classList.contains('section__section__a__button__2')){
		e.target.parentElement.remove();
		product = e.target.parentElement;
		productId = product.querySelector('button').getAttribute('data-id')
	}
	saveCartInLocalStorage()
}



//evento con jquery
toggleButton.click(()=>{
	$("#cart-containerJs").toggle();
});


//vaciar carrito
    
 function cartClear() {
	// Limpiamos los productos guardados
	cart = [];
	// Renderizamos los cambios
	renderCart();
	// Borra LocalStorage
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

//Eventos 
clearButton.addEventListener('click', cartClear);
container.addEventListener('click', addToCart);
containerJs.addEventListener('click', (e)=>{removeFromCart(e)});
//Inicialización

cartLoadFromLocalStorage();
renderProduct();
renderCart();


})
