// 1. Create an array to hold your products.
var product1 = {
	name: "small",
	description: "square",
	price: "1.00",
	url: "http://placeimg.com/400/400/any"
}

var product2 = {
	name: "small",
	description: "square",
	price: "2.00",
	url: "http://placeimg.com/400/400/any"
}

var product3 = {
	name: "large",
	description: "square",
	price: "1.00",
	url: "http://placeimg.com/400/400/any"
}

var product4 = {
	name: "medium",
	description: "square",
	price: "1.00",
	url: "http://placeimg.com/400/400/any"
}

var product5 = {
	name: "small",
	description: "rectangle",
	price: "1.00",
	url: "http://placeimg.com/400/400/any"
}

var product6 = {
	name: "small",
	description: "square",
	price: "3.00",
	url: "http://placeimg.com/400/400/any"
}

var product7 = {
	name: "large",
	description: "rectangle",
	price: "1.00",
	url: "http://placeimg.com/400/400/any"
}

var product8 = {
	name: "medium",
	description: "lidded",
	price: "3.00",
	url: "http://placeimg.com/400/400/any"
}

//Each item in the array must be an object that contains the following information: name, description, price, and URL for product image. 
// // 2. The team will use JavaScript to add each product to the DOM.
// // Each product must be a card, much like everyone made in the Static Web quiz. As a team, decide on the style of the card.
// // The layout of the product page should be a grid of cards. 3-wide, 4-wide, 5-wide, the teams must decide how many cards are on each row.

var productList = [product1, product2, product3, product4, product5, product6, product7, product8]

//var currentProduct = "";

var productElement = document.getElementById('list');
var currentProduct = productElement.innerHTML;
currentProduct += "<div>";


for (var i = 0; i < productList.length; i++) {
    currentProduct += "<img src="+productList[i].url+">";currentProduct += "<p>Name: " + productList[i].name +"</p>";
    currentProduct += "<p>Description: " + productList[i].description +"</p>";
    currentProduct += "<p>Price: " + productList[i].price +"</p>";
    
}
currentProduct += "</div>";
productElement.innerHTML = currentProduct;