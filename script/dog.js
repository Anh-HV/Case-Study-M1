class Dog{
    constructor(img,sx,sy,swidth,sheight,x, y,width,height) {
        this.img = img;
        this.sx = sx;
        this.sy = sy;
        this.swidth=swidth;
        this.sheight = sheight;
        this.x = x;
        this.y = y;
        this.width =width;
        this.height =height;
        this.speed =0;
        this.im = 0;
    }
    draw() {
        ctx.drawImage(this.img,((this.sx+2)*this.im),this.sy,this.swidth
        ,this.sheight,this.x, this.y,this.width,this.height);
    }
    newPos() {
        if(this.y<350){
            this.speed=4;
        }
        this.y= this.y + this.speed;
        if(this.speed==4 && this.y==500){
            this.speed=0;
      }
    }
    crashWith(obs) {
        if(this.x +25>obs.x && this.x<obs.x+obs.width&&this.y+30>obs.y){
            return true;
        } 
        return false;
    }
    change() {
        if(this.im <2){
            this.im ++;
        }else if(this.im==2){
            this.im = 0;
        }
        else return 0;
    }

}
