canvas=document.getElementById("my_canvas");
ctx=canvas.getContext("2d");
var mouseEvent="empty";


canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
   radius= document.getElementById("radius").value ;
   colour= document.getElementById("colour").value ;
   lineWidth= document.getElementById("Line_width").value ;
   mouseEvent="clicked";
   
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouseEvent="up";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouseEvent="leave";
}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    current_position_mouseX=e.clientX-canvas.offsetLeft;
    current_position_mouseY=e.clientY-canvas.offsetTop;
    if(mouseEvent=="clicked"){
        ctx.beginPath();
        ctx.strokeStyle=colour;
        ctx.lineWidth=lineWidth;
        ctx.arc(current_position_mouseX,current_position_mouseY,radius,0,2*Math.PI);
        ctx.stroke();
    }

}
function clearArea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}







