let walker;

function setup() {
  createCanvas(640,360);
  walker = new Walker();
  background(127);
}

function draw() {
  walker.step();
  walker.render();
}

class Walker {
  constructor(){
	  this.x = width/2;
	  this.y = height/2;
  }
  
  render(){
	  //stroke(0);
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