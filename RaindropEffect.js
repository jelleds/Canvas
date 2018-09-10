var canvas = document.getElementById("myCanvas");
var c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var radius = 30;
var x;
var y;
var dy = 8;
var circleArray = [];

function Circle(x,y,radius,dy){
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dy = dy;

    this.draw = function(){
        c.beginPath();
        c.arc(this.x, this.y,this.radius,Math.PI*2,false);
        c.fillStyle = "blue";
        c.fill();
    }
    this.update = function(){
         if(this.y >= (innerHeight + this.radius)){
            this.y = 0 - this.radius;
        }
        this.y += this.dy;
        this.draw();
    }

}

for(var i=0; i < 200; i++){
    var x = Math.random() * (innerWidth - radius);
    var y = 0;
    var radius = 3;
    var dy = Math.floor(Math.random() * 25)+ 20;
    circleArray.push(new Circle(x,y,radius,dy) );
}


function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    for (var i=0; i < circleArray.length; i++) {
        circleArray[i].update();
    }

}
animate();