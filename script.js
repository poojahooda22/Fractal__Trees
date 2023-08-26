 
 var angle = 0;
 var slider;
 
 function setup() {
    createCanvas(1200, 1200);
    slider = createSlider(0, TWO_PI, PI/4, 0.01);
 }

 function draw() {
    background(0);
    angle = slider.value();
    stroke(0, 255, 0);
    translate(600, height);
    branch(300);

    
 }

 function branch(len) {
    line(0, 0, 0, -len);
    translate(0, -len);
    
    if(len > 4) {
        rotate(angle);
        branch(len * 0.67);
        rotate(-angle);
        branch(len * 0.67);
    }
    // line(0, 0, 0, -len * 0.67); 
}