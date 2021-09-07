var canvas=document.getElementById("canvas1");

ctx= canvas.getContext("2d");

color="red";

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(200, 200, 40 ,0 , 2*Math.PI); 
ctx.stroke();

var mouseEvent = "empty";

var last_X_position, last_Y_position;

var width = 2;

canvas.addEventListener("mousedown", function_mousedown);

function function_mousedown(e) {
    mouseEvent = "mousedown";
}

canavas.addEventListener("mouseup", function_mouseup);

function function_mouseup(e) {
    mouseEvent = "mouseup";
}

canavas.addEventListener("mousemove", function_mousemove);

function function_mousemove(e){

    last_X_position = e.clientX - canvas.offsetLeft;

    last_Y_position = e.clientX - canvas.offsetTop;

    if (mouseEvent == "mousemove"){

        ctx.beginpath();

        ctx.strokestyle = color;

        ctx.linewidth = width;

        console.log("Last position of x and y coordinates = "); 
        
        ctx.moveTo(last_X_position, last_Y_position);

        console.log("Current position of x and y coordinates = "); 
        
        console.log("x = " + current_X_position + "y = " + current_Y_position);

        ctx.lineTo(current_X_position, current_Y_position);

        ctx.stroke();

        last_X_position= current_X_position;

        last_Y_position= current_Y_position;
    }
}

canavas.addEventListener("mouseleave", function_mouseleave);

function function_mouseleave(e) {
    mouseEvent = "mouseleave";
}