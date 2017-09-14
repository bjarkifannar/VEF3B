var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var positions = [];
var img = new Image();

img.src = 'https://ak8.picdn.net/shutterstock/videos/8385253/thumb/1.jpg';

canvas.width = window.innerWidth - 2;
canvas.height = window.innerHeight - 2;

function getMousePos(canv, evt) {
	var rect = canv.getBoundingClientRect();

	return {
		x: evt.clientX - rect.left,
		y: evt.clientY - rect.top
	};
}

function draw_flag(pos) {
	ctx.fillStyle = 'blue';

	ctx.beginPath();
	ctx.moveTo(0 + pos.x, 0 + pos.y);
	ctx.lineTo(200 + pos.x, 0 + pos.y);
	ctx.lineTo(200 + pos.x, 144 + pos.y);
	ctx.lineTo(0 + pos.x, 144 + pos.y);
	ctx.lineTo(0 + pos.x, 0 + pos.y);
	ctx.fill();
	ctx.closePath();

	ctx.fillStyle = 'white';

	ctx.beginPath();
	ctx.moveTo(0 + pos.x, 50 + pos.y);
	ctx.lineTo(50 + pos.x, 50 + pos.y);
	ctx.lineTo(50 + pos.x, 0 + pos.y);
	ctx.lineTo(100 + pos.x, 0 + pos.y);
	ctx.lineTo(100 + pos.x, 50 + pos.y);
	ctx.lineTo(200 + pos.x, 50 + pos.y);
	ctx.lineTo(200 + pos.x, 100 + pos.y);
	ctx.lineTo(100 + pos.x, 100 + pos.y);
	ctx.lineTo(100 + pos.x, 144 + pos.y);
	ctx.lineTo(50 + pos.x, 144 + pos.y);
	ctx.lineTo(50 + pos.x, 100 + pos.y);
	ctx.lineTo(0 + pos.x, 100 + pos.y);
	ctx.lineTo(0 + pos.x, 50 + pos.y);
	ctx.fill();
	ctx.closePath();

	ctx.fillStyle = 'red';

	ctx.beginPath();
	ctx.moveTo(0 + pos.x, 62 + pos.y);
	ctx.lineTo(62 + pos.x, 62 + pos.y);
	ctx.lineTo(62 + pos.x, 0 + pos.y);
	ctx.lineTo(87 + pos.x, 0 + pos.y);
	ctx.lineTo(87 + pos.x, 62 + pos.y);
	ctx.lineTo(200 + pos.x, 62 + pos.y);
	ctx.lineTo(200 + pos.x, 87 + pos.y);
	ctx.lineTo(87 + pos.x, 87 + pos.y);
	ctx.lineTo(87 + pos.x, 144 + pos.y);
	ctx.lineTo(62 + pos.x, 144 + pos.y);
	ctx.lineTo(62 + pos.x, 87 + pos.y);
	ctx.lineTo(0 + pos.x, 87 + pos.y);
	ctx.lineTo(0 + pos.x, 62 + pos.y);
	ctx.fill();
	ctx.closePath();
}

function draw() {
	for (var i = 0; i < positions.length; i++) {
		draw_flag(positions[i]);
	}

	ctx.font = "30px Arial";
	ctx.fillStyle = "black";
	ctx.fillText("Left click for drawn flag, Right click for flag picture.", 10, 30);

	setTimeout(draw, 20);
}

canvas.addEventListener('click', function(evt) {
	var mousePos = getMousePos(canvas, evt);
	positions.push({x: mousePos.x, y: mousePos.y});
});

canvas.addEventListener('contextmenu', function(evt) {
	evt.preventDefault();
	var mousePos = getMousePos(canvas, evt);
	ctx.drawImage(img, mousePos.x, mousePos.y, 200, 144);
});

draw();