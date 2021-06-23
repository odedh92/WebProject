$(document).ready(function () {

	$("#Div2").hide();


	$("#Send1").click(function () {
		$("#Div2").show();
		
	});

	$("#sPizza").click(function () {
		$("#tPrice div").html('<P> the price is ')
	});
	setPriceOnScreen();
});
var basicPrice = 0;
var extraPrice = 0;
var drinkPrice = 0;

function addPrice(price){
extraPrice+= price;
setPriceOnScreen();
}
function addDrinkPrice(price){
	drinkPrice += price;
	setPriceOnScreen();
}

function setBasicPrice(){
 basicPrice=$("#pizzaSize").val();
 basicPrice = Number(basicPrice);
 setPriceOnScreen();
}

function setPriceOnScreen(){
	var totalPrice= basicPrice+ extraPrice + drinkPrice; 
	$("#tPrice").html("The price is: " + totalPrice);
}
    $("#endOrder").click(function(){
	$("#mToUser").show.click;

	});
	function myFunction() {
		var txt;
		if (confirm("Your order has been received!,The courier will reach you in a half hour")) {
		  txt = "Your order has been received!,The courier will reach you in a half hour";
	
		}
		document.getElementById("demo").innerHTML = txt;
	  }
	  