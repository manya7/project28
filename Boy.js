class Boy {
    constructor(x, y) {
      var options = {
        isStatic: true,
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 50,50, options);
      this.width = 250;
      this.height = 250;

      this.image=loadImage("pluckingMangoes/boy.png");
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     
    // rectMode(CENTER);
     //rect(pos.x, pos.y, this.width, this.height);

      imageMode(CENTER);
      image(this.image,pos.x,pos.y,250,250)
     
    }
  }