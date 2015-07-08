var Drink = function(name, description, price, ingredients){
	this.name        = name;
	this.description = description;
	this.price       = price;
	this.ingredients = ingredients
}

var Plate = function(name, description, price, ingredients){
	this.name        = name;
	this.description = description;
	this.price       = price;
	this.ingredients = ingredients;
}

var Order = function(plates){
	this.plates = plates;
}

var Menu = function(plates){
	this.plates = plates;
}

var Restaurant = function(name, description, menu){
	this.name        = name;
	this.description = description;
	this.menu        = menu;
}

var Customer = function(dietaryPreference){
	this.dietaryPreference = dietaryPreference;
}

//=================================== Methods ============================================================


Menu.prototype.create = function(){

	this.plates.forEach(function(element){

		var itemName = $('<p class="item-name"></p>').text(element.name)
		var itemDescription = $('<p class="item-description"></p>').text('This is ' + element.description + '!!')
		var itemIngredients = $('<p class="item-ingredients"></p>').text('This contains ' + element.ingredients)
		var itemPrice = $('<p class="item-price"></p>').text(element.price)
		var itemButton = $('<button class="price-button">Add to order</button>')

		var menuContainer = $('<div class="menu-container"></div>').append(itemName, itemDescription, itemIngredients, itemPrice, itemButton)

		$('.restaurant-container').append(menuContainer);

	})
}

Restaurant.prototype.create = function(){
	var restaurantContainer = $('<div class="restaurant-container"></div>')
	return restaurantContainer;
}

Customer.prototype.create = function(){
	return 'Dietary preference: ' + this.dietaryPreference
}

//================================  Variables ============================================================

// Burrito Plate, a Guacamole Plate, and a Margarita Drink.

var burrioPlate    = new Plate('Burrito', 'Delicious', 12, [' beef', ' cheese', ' hotsauce', ' beans'])
var guacamolePlate = new Plate('Guacamole', 'Green', 7, [' advocatos', ' tomatos', ' onions', ' haberneros'])
var quesadilla     = new Plate('Quesadilla', 'very Mexican', 10, [' cheese', ' chicken', ' pico de gallo'])
var margaritaDrink = new Drink('Margarita', 'Fantastic', 5, [' tequilla', ' salt', ' sugar', ' more salt'])


var mainMenu = new Menu([burrioPlate, guacamolePlate, quesadilla, margaritaDrink])

var myRestaurant = new Restaurant ('Ricos Mexican', 'The Best around', mainMenu)





var output = myRestaurant.toString()




$(document).on('ready', function() {
	$('body').append(myRestaurant.create());


	$('.restaurant-container').append(mainMenu.create());

	$('body').append('<div class="order-container"></div>');


	
	var total = 0.00;

	$('.order-container').append('<div> Order Total : $ <span class="total">' + total + '</span></div>');

	
	
	$('body').on('click', '.price-button', function(){
		var orderPrice = Number($(this).prev().text());
		total += orderPrice;
		console.log(total)

		var orderName = $(this).siblings('.item-name').text()

		$('.order-container').prepend('<p>' + orderName + '</p>')
		$('.total').text(total)
	})


	$('.order-container').append('<button class="veto-button">Veto Order</button>')

	$('.veto-button').on('click', function(){
		total = 0
		$('.total').text(total)

	})
  
});







