
//  método ready de jquery
$(function() {
	// Funciones

	function renderProducts() {
		dataBase.forEach((info) => {

			const myNode = document.createElement('div');
			myNode.classList.add('card', 'col-sm-4', 'product-list', `${info.categoria}`, 'store-product');

			const cardBodyNode = document.createElement('div');
			cardBodyNode.classList.add('card-body', 'aling-self', 'product', `${info.categoria}`, 'store-product');

			const myNodeTitle = document.createElement('h5');
			myNodeTitle.classList.add('card-title', 'section__div__p--jsCard');
			myNodeTitle.textContent = info.name.toUpperCase();

			const imgNode = document.createElement('img');
			imgNode.classList.add('card-img-center', 'img-fluid', 'rounded');
			imgNode.setAttribute('src', info.img);

			const priceNode = document.createElement('p');
			priceNode.classList.add('card-text', 'section__div__p--jsCard');
			priceNode.textContent = `${info.price}${money}`;

			const botonNode = document.createElement('button');
            botonNode.classList.add('btn', 'btn-primary');
            botonNode.textContent = '+';
            botonNode.setAttribute('marker', info.id);
            botonNode.addEventListener('click', addToCart);
			const botNode = document.createElement('button');
			botNode.classList.add('btn', 'me-md-2', 'btn-danger')
			botNode.textContent = "-";
			botNode.setAttribute('marker', info.id);
			botNode.addEventListener('click', removeProduct);

			cardBodyNode.appendChild(imgNode);
			cardBodyNode.appendChild(myNodeTitle);
			cardBodyNode.appendChild(priceNode);
			cardBodyNode.appendChild(botonNode);
			cardBodyNode.appendChild(botNode);
			myNode.appendChild(cardBodyNode);
			DOMitems.appendChild(myNode);
		});
	}


//Cart
	function addToCart(event) {

		cart.push(event.target.getAttribute('marker'))
		renderCart();
		saveCartInLocalSorage();
	}

	function removeProduct(event) {
		cart.pop(event.target.getAttribute('marker'))
		renderCart();
		saveCartInLocalSorage();
	}

	function renderCart() {

		cartDOM.textContent = '';

		const cartWithoutCopies = [...new Set(cart)];
		cartWithoutCopies.forEach((item) => {
			const myItem = dataBase.filter((dataBaseItems) => {
				return dataBaseItems.id === parseInt(item);
			});

			const unitsItems = cart.reduce((total, itemId) => {
				return itemId === item ? total += 1 : total;
			}, 0);

			const myNode = document.createElement('li');
			myNode.classList.add('list-group-item', 'text-right', 'mx-2', 'section__div__p--jsLi');
			myNode.textContent = `${unitsItems} x ${myItem[0].name} - ${myItem[0].price}${money}`;

			const myBoton = document.createElement('button');
			myBoton.classList.add('btn', 'btn-danger', 'mx-5');
			myBoton.textContent = 'X';
			myBoton.style.marginLeft = '1rem';
			myBoton.dataset.item = item;
			myBoton.addEventListener('click', romveFromCart);
	
			myNode.appendChild(myBoton);
			cartDOM.appendChild(myNode);
		});

		DOMtotal.textContent = totalCalculator();
	}


	function romveFromCart(event) {
		const id = event.target.dataset.item;
		cart = cart.filter((cartId) => {
			return cartId !== id;
		});

		renderCart();
		saveCartInLocalSorage();

	}

	function totalCalculator() {
		return cart.reduce((total, item) => {
			const myItem = dataBase.filter((dataBaseItems) => {
				return dataBaseItems.id === parseInt(item);
			});

			return total + myItem[0].price;
		}, 0).toFixed(2);
	}


	function clearCart() {
		cart = [];
		renderCart();
		localStorage.clear();

	}

	function saveCartInLocalSorage() {
		myLocalStorage.setItem('cart', JSON.stringify(cart));
	}

	function cartLoadFromStorage() {
		if (myLocalStorage.getItem('cart') !== null) {
			cart = JSON.parse(myLocalStorage.getItem('cart'));
		}
	}

	clearButtonDOM .addEventListener('click', clearCart);

	cartLoadFromStorage();
	renderProducts();
	renderCart();
});


const search = () => {
	const searchbox = document.getElementById("search-item").value.toUpperCase();
	const storeitems = document.getElementById("items")
	const product = document.querySelectorAll(".product")
	const pname = storeitems.getElementsByTagName("h5")

	for (var i = 0; i < pname.length; i++) {
		let match = product[i].getElementsByTagName('h5')[0];

		if (match) {
			let textvalue = match.textContent || match.innerHTML

			if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
				product[i].style.display = "";
			} else {
				product[i].style.display = "none";
			}
		}
	}
}

