let walker;

function setup() {
  createCanvas(640,360);
  background(127);
  walker = new Walker();
  
}

function draw() {
  //background(127);
  walker.step();
  walker.render();
}

class Walker {
  constructor(){
	  this.x = width/2;
	  this.y = height/2;
  }
  
  render(){
	  //stroke(200);
	  //strokeWeight(4);
	  //ellipse(this.x,this.y,50,25);	  
	  //point(this.x+50,this.y+20);	
	  point(this.x,this.y);	  
  }
  
  step(){
	  let choice = floor(random(4));
	  switch(choice){
		  case 0:
			this.x--;
			break;
		  case 1:
			this.x++;
			break;
		  case 2:
			this.y--;
			break;
		  case 3:
			this.y++;
			break;	
	  }
	this.x = constrain(this.x,0,width-1);
	this.y = constrain(this.y,0,height-1);
	}
}