var animate = requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function(callback) {
        window.setTimeout(callback, 1000/60)
    };

var canvas = document.createElement ('canvas')
var width = 400;
var height = 600;
canvas.width = width;
canvas.height = height; 
var context = canvas.getContext('2d');

window.onload = function(){
    document.body.appendChild(canvas); 
    animate(step);
};

var update = function() {};

var render = function() {
    context.fillStyle = "black";
    context.fillRect(0, 0, width, height);
};

var step = function() {
    update();
    render();
    animate(step); 
};