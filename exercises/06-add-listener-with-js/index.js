window.onload = function myLoadFunction() {
	alert("The website just finished loading!");
	//some code here
	var boton = document.getElementById("theGreen");
	boton.addEventListener("click", mensaje);
};

//the listener function here

function mensaje() {
	alert("wuju");
}
