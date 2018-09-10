var canvas = document.getElementById("myCanvas");
var c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var circleArray = [];
var gravity = 1;

function Circle(x,y,radius,speedX,speedY,color){
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.speedY = speedY;
    this.speedX = speedX;
    this.gravity = 1;
    this.friction = 0.80;
    this.color = color;

    this.draw = function(){
        c.beginPath();
        c.arc(this.x, this.y,this.radius,Math.PI*2,false);
        c.fillStyle = color;
        c.fill();
    }
    this.update = function(){

        this.y  += this.speedY;;

        if(this.y >= innerHeight - this.radius || this.y <= 0){
            this.speedY = -this.speedY * this.friction;
        }else {
            this.speedY += this.gravity;
        }
        this.draw();
    }

}

function init (){
    for(var i=0; i < 2; i++){
        var x = Math.random() * (innerWidth - radius);
        var y = 0;
        var radius = 30;
        var speedY = 20;
        var speedX = 20;
        var colorArray = ['#240115', '#DE3C4B', '#87F5FB', '#2F131E', '#CEC3C1',];
        var randomColor = Math.floor(Math.random()* colorArray.length); 
        
        circleArray.push(new Circle(x,y,radius,speedX,speedY,colorArray[randomColor]) );
    }
}


function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas.width, canvas.height);

    for (var i=0; i < circleArray.length; i++) {
        circleArray[i].update();
    }

}
init();
animate();

addEventListener("click",function(){
    // circleArray=[];
    init();
});