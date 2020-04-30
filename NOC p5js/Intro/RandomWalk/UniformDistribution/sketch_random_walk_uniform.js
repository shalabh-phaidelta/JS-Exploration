let randomCounts = [];
let total = 20;

function setup(){
	createCanvas(600,400)
	background(127);
	for(let i=0; i<total; i++){
		randomCounts[i] = 0;
	}
}

function draw(){
	let index = floor(random(total));
	randomCounts[index]++;
	
	//stroke(0);
	//strokeWeight(4);
	fill(255);
	
	let w = width/randomCounts.length;
	//draw rect
	for(let x=0; x<randomCounts.length; x++){
		rect(x*w, height-randomCounts[x], w, randomCounts[x]);
	}
}