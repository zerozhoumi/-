var box=document.getElementById('test');

var box2d=box.getContext("2d");

box2d.fillStyle="#FF0000";

for (var i = 1; i < 100; i+=2) {
	box2d.beginPath();
	box2d.fillRect(0,i*10,40,i*10+10);
	box2d.closePath();
}
