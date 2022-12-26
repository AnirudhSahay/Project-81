canvas = document.getElementById("myCanvas");

ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 1;
ctx.rect(100, 90, 600, 250);
ctx.stroke();

circle(300,180,"blue");
circle(350,220,"orange");
circle(400,180,"black");
circle(450,220,"green");
circle(500,180,"red");


function circle(x,y,color)
{
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 4;
ctx.arc(x, y, 40, 0, 2 * Math.PI);
ctx.stroke();
}