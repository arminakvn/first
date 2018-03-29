var y = 200;
var d = 460;
var n_rows;
var n_cols;
var ww;
var hh;
var smal_rect_width;
function setup() {
	colorMode(HSB,360,100,100,100)
	ww = windowWidth -10;
	hh = windowHeight -5;
  	createCanvas(ww,hh);
  	background(88,70,0,100);
	smal_rect_width = ((width/5)/3);
	print(smal_rect_width)
	n_rows = (hh / smal_rect_width) * .7;
	n_cols = (ww / smal_rect_width)*2;

}

function draw() {
	// noStroke()
	
	translate(0,5);
	
  	var ze_x =( ww/3);
  	var ze_y = 0;
	//   push();
  	for (var row=0; row < n_rows; row++){
		
  		for (var col=0; col < n_cols-1; col++) {

			var x = ze_x + (row * smal_rect_width);
			var y = ze_y + (col * smal_rect_width);


			if ( ((row % 2 == 0) || (col % 2 == 0)) && ((row % 2 != 0) || (col % 2 != 0))) {
				// print(row, col)
				fill(88,11,68,100)
				
				beginShape();
				vertex(x, y);
				vertex(x + smal_rect_width - 5, y+5);
				vertex(x + smal_rect_width, y + smal_rect_width);
				vertex(x + 5, y + smal_rect_width -5);
				endShape(CLOSE);
				 	
  			
			} else {
					

					fill(0,0,100,100)
				  	beginShape();
					vertex(x + 10, y + 10);
					vertex(x + smal_rect_width, y);
					vertex(x + smal_rect_width - 10, y + smal_rect_width - 10);
					vertex(x, y + smal_rect_width);
					endShape(CLOSE);
			}
			
			
		  }
  				
			 
  	}
  
  }