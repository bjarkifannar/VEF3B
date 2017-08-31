var svg_data = document.getElementById("svg_img").innerHTML;
var volume1 = document.getElementById("path1");
var volume2 = document.getElementById("path2");
var volume3 = document.getElementById("path3");
var color1 = "rgb(0, 0, 0)";
var color2 = "rgb(72, 41, 71)";

volume1.addEventListener("mouseenter", function() {
	changeColor(volume1);
});

volume1.addEventListener("mouseleave", function() {
	changeColor(volume1);
});

volume2.addEventListener("mouseenter", function() {
	changeColor(volume2);
});

volume2.addEventListener("mouseleave", function() {
	changeColor(volume2);
});

volume3.addEventListener("mouseenter", function() {
	changeColor(volume3);
});

volume3.addEventListener("mouseleave", function() {
	changeColor(volume3);
});

function changeColor(elem) {
	if (elem.style.stroke == color1) {
		elem.style.stroke = color2;
	} else {
		elem.style.stroke = color1;
	}
}