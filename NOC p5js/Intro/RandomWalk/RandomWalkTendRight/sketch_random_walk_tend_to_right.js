let walker;

function setup(){
	createCanvas(600,250);
	walker = new Walker();
	background(127);
	
}

function draw(){
	walker.step();
	walker.render();	
}

class Walker{
	constructor(){
		this.x = width/2;
		this.y = height/2;	
	};
	
	step(){
		let choice = floor(random(4));
		let prob = random(1);
		
		if(prob < 0.4){
			this.x++;
		}
		else if(prob < 0.6){
			this.x--;
		}
		else if(prob < 0.8){
			this.y++;
		}
		else{
			this.y--;
		}
		
		this.x = constrain(this.x, 0, width-1);
		this.y = constrain(this.y, 0, height-1);
	};
	
	render(){
		stroke(0);
		point(this.x, this.y);
	};
	
}