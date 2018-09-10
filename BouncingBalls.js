var canvas = document.getElementById("myCanvas");
var c = canvas.getContext("2d");

/* set the width of the canvas*/
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;



var radius = 100;
var velocityX = 8;
var velocityY = 8;
var color = "red";
var x = Math.random();
var y = Math.random();

var circleArray = [];

/* Circle object */ 
function Circle(x, y, velocityX, velocityY, radius, color){
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.velocityX = velocityX;
    this.velocityY = velocityY;
    this.color = color;

    this.draw = function(){
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = color;
        c.fill();
    }
    this.update = function(){
        /* bol laten kaatsen in het canvas */
        this.y += this.velocityY;
        this.x += this.velocityX;

        if(this.x + this.radius >= innerWidth || this.x - this.radius <= 0) {
            this.velocityX = -this.velocityX;
        }
        if(this.y + this.radius >= innerHeight || this.y - this.radius <= 0) {
            this.velocityY = -this.velocityY;
        }
        
        this.draw();
    }
}


for(i=0; i < 50; i++){
        var radius = Math.random() * 30;
        var velocityX = Math.random() * 6;
        var velocityY = Math.random() * 6;
        var x = Math.random() * (innerWidth - radius * 2) + radius;
        var y = Math.random() * (innerHeight - radius * 2) + radius;
        
        var colorArray = ['#E63946', '#C9F0FF', '#A8DADC', '#457B9D', '#1D3557'];
        var rand = Math.floor(Math.random()* colorArray.length); 

        circleArray.push(new Circle(x,y,velocityX,velocityY,radius,colorArray[rand]) );
}

function animate (){
    requestAnimationFrame(animate);
    c.clearRect(0,0,canvas.width, canvas.height);

    for(i=0; i < circleArray.length; i++){
        circleArray[i].update();
    }
    
}
animate();