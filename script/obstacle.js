class Obstacle{
    constructor(img){
    this.img = img;
    this.x = canvas.width-80;
    this.y = canvas.height-220;
    this.width =70;
    this.height =80; 
    }
    drawobs() {
        ctx.drawImage(img,this.x,this.y,this.width,this.height);
    }
    update(){
        this.x-=2;
        if(everyinterval(gap)){
            myObstacle.push(new Obstacle());
            gap = randGap();
            frame = 0;
        }
        for(let i = 0; i <myObstacle.length;i++){
            myObstacle[i].x-=3;
            myObstacle[i].drawobs();
        }
        frame+=1;
     }
}