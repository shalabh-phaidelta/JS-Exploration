let xoff = 0;
let xinc = 0.01;

function setup(){
	createCanvas(400, 400);
	background(0);
	noStroke();
}

function draw(){
	fill(0, 10);
	rect(0,0,width,height);
	
	//let n = random(xoff);
	let n = noise(xoff); 
	let x = map(n,0,1,0,width);
	xoff += xinc;
	
	fill(100);
	ellipse(x,height/2,64,64);
	print(n);
	
}