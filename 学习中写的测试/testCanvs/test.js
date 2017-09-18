var box=document.getElementById('test');

var box2d=box.getContext("2d");

box2d.fillStyle="#FF0000";

// for (var i = 1; i < 100; i++) {
// 	box2d.beginPath();
// 	box2d.strokeRect(0,i*40,40,20);
// 	box2d.strokeText(i,20,i*40+10);
// 	box2d.closePath();
// }

var createBookListImage=function (drawBox,width,height,num) {
    //用来画单纯的书架；
    var centerWidth=Math.floor(width/2);
    var centerHeight=Math.floor(height/2);
    for (var i = 1; i <= num; i++) {
        drawBox.beginPath();
        box2d.strokeRect(0,i*2*height,width,height);
        box2d.strokeText(i,centerWidth,i*2*height+centerHeight);
        box2d.closePath();
    }

}

var createTestFloor = function(){

}
createBookListImage(box2d,40,20,5)