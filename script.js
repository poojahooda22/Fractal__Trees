 function setup() {
    createCanvas(1200, 1200);
 }

 function draw() {
    background(0);

    stroke(0, 255, 0);
    translate(600, height);
    branch(400);

    
 }

 function branch(len) {
    line(0, 0, 0, -len);
    translate(0, -len);
    rotate(PI / 4);
    line(0, 0, 0, -len * 0.67); 
}