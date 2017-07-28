/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }

}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

$(window).scroll(function () { 
    if ($(window).scrollTop() > 200) {
      $('#disappear').fadeIn(2000);
    }
    if ($(window).scrollTop() < 200) {
      $('#disappear').fadeOut(30);
    }
});
    

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $(".navbar-collapse").collapse('slow');
});
canvas = document.getElementById("canvas");
context = canvas.getContext("2d");
width = canvas.width = window.innerWidth;
height = canvas.height = window.innerHeight;


// Confetti Cannon
particle = [];
particleCount = 0,
gravity = 0.3,
    colors = [
      '#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5',
      '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4CAF50',
      '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800',
      '#FF5722', '#795548'
    ];



            for( var i = 0; i < 300; i++){

particle.push({
    x : width/2,
    y : height/2,
    boxW : randomRange(5,20),
    boxH : randomRange(5,20),
    size : randomRange(2,8),
    
    spikeran:randomRange(3,5),
    
    velX :randomRange(-8,8),
    velY :randomRange(-50,-10),
    
    angle :convertToRadians(randomRange(0,360)),
    color:colors[Math.floor(Math.random() * colors.length)],
    anglespin:randomRange(-0.2,0.2),
    
    draw : function(){
    
    
        context.save();
            context.translate(this.x,this.y);
            context.rotate(this.angle);
        context.fillStyle=this.color;
        context.beginPath();
        // drawStar(0, 0, 5, this.boxW, this.boxH);
    context.fillRect(this.boxW/2*-1,this.boxH/2*-1,this.boxW,this.boxH);
        context.fill();
                context.closePath();
        context.restore();
    this.angle += this.anglespin;
    this.velY*= 0.999;
    this.velY += 0.3;
  
    this.x += this.velX;
    this.y += this.velY;
        if(this.y < 0){
    this.velY *= -0.2;
        this.velX *= 0.9;
    };
    if(this.y > height){
    this.anglespin = 0;
    this.y = height;
    this.velY *= -0.2;
        this.velX *= 0.9;
    };
        if(this.x > width ||this.x< 0){

    this.velX *= -0.5;
    };
    
    
    
    },



        
    });

}
r1={
x:width/2-150,
y:height/2-150,
width:300,
height:300,
    velX :0,
    velY :-10,
 img : loadImage(""),
 alphatop:0
};


function drawScreen(){
size = 50;
            pFontName = "Lucida Sans Unicode";
            context.font = size + "pt " + pFontName;
            context.fillText("", width/2,150 );
        if(r1.alphatop < 1){
        r1.alphatop += 0.01;
        }else{
        r1.alphatop = 1;
        }
        context.globalAlpha = r1.alphatop; 
            context.drawImage(r1.img,r1.x,r1.y);
                  context.textAlign = 'center';

            
            
            if(r1.alphatop === 1){
    r1.velY*= 0.999;
    r1.velY += 0.3;
  
    r1.x += r1.velX;
    r1.y += r1.velY;}

        if(r1.y + r1.height > height){
    r1.anglespin = 0;
    r1.y = height - r1.height;
    r1.velY *= -0.8;
        r1.velX *= 0.9;
    };
    
    
            context.globalAlpha = 1; 
        for( var i = 0; i < particle.length; i++){
            particle[i].draw();

                }
                
                
}

    function loadImage(url){
        var img = document.createElement("img");
        img.src=url;
        return img;
    }

function update(){


context.clearRect(0,0,width,height);

drawScreen();

requestAnimationFrame(update);
}

update();


function randomRange(min, max){
    return min + Math.random() * (max - min );
}

function randomInt(min, max){
    return Math.floor(min + Math.random()* (max - min + 1));
}

       function convertToRadians(degree) {
            return degree*(Math.PI/180);
        }
        
        function drawStar(cx, cy, spikes, outerRadius, innerRadius,color) {
    var rot = Math.PI / 2 * 3;
    var x = cx;
    var y = cy;
    var step = Math.PI / spikes;

    context.strokeSyle = "#000";
    context.beginPath();
    context.moveTo(cx, cy - outerRadius)
    for (i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius;
        y = cy + Math.sin(rot) * outerRadius;
        context.lineTo(x, y)
        rot += step

        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius;
        context.lineTo(x, y)
        rot += step
    }
    context.lineTo(cx, cy - outerRadius)
    context.closePath();
    context.fillStyle=color;
    context.fill();

}       