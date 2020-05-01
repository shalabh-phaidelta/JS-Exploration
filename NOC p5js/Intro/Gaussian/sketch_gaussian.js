function setup(){
	createCanvas(400, 400);
	background(0);
}

function draw(){
	let xloc = randomGaussian(); //0-1 
	
	const sd = 150;
	const mean = width/2;
	
	xloc = xloc*sd + mean;
	ellipse(xloc, height/2, 10, 10);
}