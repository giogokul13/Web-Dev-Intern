var canvas = document.querySelector("canvas");
canvas.width = can.innerWidth;
canvas.height = can.innerHeight;

var c = canvas.getContext("2d");
var gravity = 1;
// canvas width and height for setting the border 
var x= Math.random() * innerWidth;
var y= Math.random() * innerHeight;

var radius = 30;
var fiction = 0.9;

var dx = (Math.random() - 0.5 ) * 8;
var dy = (Math.random() - 0.5 ) * 8;

function animate(){
    requestAnimationFrame(animate);
    c.beginPath();
    c.arc(x,y,radius,Math.PI * 2,false);
    c.fillStyle = "green";
    c.fill();
    c.stroke = "black";
    c.stroke();


    if(x + radius > innerWidth || x - radius < 0){
        dx = -dx;
    }
    else if (y + radius > innerHeight || y - radius > 0){
        dy = -dy;
    }
    x += dx;
    y += dy;

}
animate();