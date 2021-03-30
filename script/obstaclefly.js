class ObstacleFly{
    constructor(img){
    this.img = img;
    this.x = canvas.width-80;
    this.y = canvas.height-350;
    this.width =70;
    this.height =80; 
    }
    drawobs2() {
        ctx.drawImage(this.img,this.x,this.y,this.width,this.height);
    }
    update() {
        this.x-=5;
        if(everyinterval2(gap)){
            myObstacle2.push(new ObstacleFly());
            gap = randGap();
            frame2 = 0;
        }
        for(let i = 0; i <myObstacle2.length;i++){
            myObstacle2[i].x-=5;
            myObstacle2[i].drawobs2();
        }
        frame2+=1;
     }
}