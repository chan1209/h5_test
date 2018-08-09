/**
 * Created by chenpei on 2016/6/6.
 */
var CANVAS_WIDTH = 200, CANVAS_HEIGHT = 200;
var mycanvas,context;
window.onload = function(){
    createCanvas();
    draw()
}
function createCanvas(){
    document.body.innerHTML = "<canvas id = \"mycanvas\" width=\""+CANVAS_WIDTH+"\" height=\""+CANVAS_HEIGHT+"\"> </canvas>"
    mycanvas = document.getElementById("mycanvas");
    context = mycanvas.getContext("2D");
}
function draw(){
    context.fillStyle = "#FF0000";
    context.fillRect(0,0,200,200);
}