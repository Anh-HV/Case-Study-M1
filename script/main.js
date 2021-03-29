var minGap = 100;
var maxGap=250;
var gap = randGap();
let frame = 0 ;
var myObstacle=[];
var down1 = false;

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const imgdog = document.getElementById("dog");
const img = document.getElementById("catch");

var audio = document.getElementById("audio");
var audio_lose = document.getElementById("audio_lose");


const obs = new Obstacle(img);
let dog = new Dog(imgdog,32,0,32,32,50,500,60,60);

function jump(evt) {
    audio.play();
    if(down1) return;
    down1 = true;
    if(evt.keyCode == 38 || evt.keyCode == 32|| evt.keyCode == 87 ){
        dog.speed=-4;
        dog.change();
    }
}
function down() {
    dog.change();
    down1 = false;
}

function everyinterval(n) {
    if(frame%n ==0) return true;
    return false;
}

function randGap() {
    return Math.floor(minGap+Math.random()*(maxGap-minGap+1));
}

function clear() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
}

function checkLose() {
    for(let i=0;i<myObstacle.length;i++){
        if(dog.crashWith(myObstacle[i])){
            stop();
            return;
        }
    }
}
for(let i=0;i<myObstacle.length;i++){
console.log(dog.crashWith(myObstacle[i]));}

function stop() {
    audio_lose.play();
    ctx.font="80px Arial";
    ctx.fillStyle = "Red";
    ctx.textAlign = "center";
    ctx.fillText("Game Over" ,500, 200);
    document.getElementById("btnRestart").hidden=false;
    document.cancelAnimationFrame(startGame);
    return;
}
    ctx.font="30px Arial";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    let score=0;
    function startGame(){

    window.addEventListener("keydown",jump);
    window.addEventListener("keyup",down);
  
    for(let i=0;i<myObstacle.length;i++){
        console.log(myObstacle[i]);
    }
    checkLose();
    clear();
    let sc = score++;
    
    ctx.fillText("Score:" + Math.floor(sc/10),800, 100);
    if(Math.floor(sc/10) >1000&&Math.floor(sc/10)<2000) maxGap =200;
    else if(Math.floor(sc/10)>2000 && Math.floor(sc/10)<3000) maxGap = 150;
    else if(Math.floor(sc/10)>3000 && Math.floor(sc/10)<4000) maxGap =100;
    else maxGap = 250;
    obs.update();
    dog.draw();
    dog.newPos();
    requestAnimationFrame(startGame);  
}

startGame();
