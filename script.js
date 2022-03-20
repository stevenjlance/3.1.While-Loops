// Warm Up
var counter = 0
while(counter < 100){
	console.log(counter)
	counter++
}
counter = 0
while(counter < 100){
	console.log(counter)
	counter += 2
}
counter = 0
while(counter < 10){
	console.log(2**counter)
	counter++
}
counter = 0
while(counter < 20){
	console.log("Steven")
	counter++
}


function setup() {
  createCanvas(600, 600);
  background(255);
	
}

function draw() {

	// Challenge #1
	var x = 0
	while(x < width/2){
		ellipse(x, 100, 40, 40)
		x += 50
	}
	// Challenge #2
	x = 0
	rectMode(CORNER)
	while(x < width){
		fill("aqua")
		rect(x,150,40,40)
		x += 40
	}

	// Challenge #3
	x = 100
	while(x < width){
		fill("red")
		ellipse(x, 240, 40, 40)
		fill("limegreen")
		ellipse(x, 240, 30, 30)
		fill("blue")
		ellipse(x, 240, 20, 20)
		fill("pink")
		ellipse(x, 240, 10, 10)
		x+= 100
	}

	// Challenge #4
	rectMode(CENTER)
	x = 0
	while(x < width){
		fill("white")
		rect(x, 350, 40,40)
		fill("black")
		ellipse(x, 350, 20, 20)
		x += 40
	}
	
	

	


	
}