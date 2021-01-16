var canvas = document.getElementById("myCanvas")
var ctx = canvas.getContext("2d")
var array = ["mars.jpg","mars2.jpg","mars3.jfif","mars4.jfif","mars5.jpg"]
var x = Math.floor(Math.random()*5)
var roverX= 30;
var rovery= 30;
var roverwidth= 100;
var roverheight= 100;
var backgroundimg = array[x]
var roverimg = "rover.png"
function add(){
    bg = new Image()
    bg.onload = uploadbackground
    bg.src = backgroundimg

    rover = new Image()
    rover.onload = uploadrover
    rover.src = roverimg


}

function uploadbackground(){
    ctx.drawImage(bg,0,0,canvas.width,canvas.height)
}

function uploadrover(){
    ctx.drawImage(rover,roverX,rovery,roverwidth,roverheight)
}

window.addEventListener("keydown",kd)
function kd(e){
x = e.keyCode
console.log(x)
if (x==37) {
    left()
}

if (x==38) {
    up()
}

if (x==39) {
    right()
}

if (x==40) {
    down()
}
}

function down() {
    if (rovery < 500) {
        rovery = rovery + 10
        uploadbackground()
        uploadrover()
    }
}

function up() {
    if (rovery > 0) {
        rovery = rovery - 10
        uploadbackground()
        uploadrover()
    }
}

function right() {
    if (roverX < 700) {
        roverX = roverX + 10
        uploadbackground()
        uploadrover()
    }
}

function left() {
    if (roverX > 0) {
        roverX = roverX - 10
        uploadbackground()
        uploadrover()
    }
}