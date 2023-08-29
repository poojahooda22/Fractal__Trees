 
 var angle = 0;
 var slider;
 
 let trunkLength = 250; 


 function setup() {
    createCanvas(1200, 1200);
    slider = createSlider(0, TWO_PI, PI/4, 0.01);
 }

 function draw() {
    background(0);
    angle = slider.value();
    stroke(255, 54, 156);
    translate(600, height);
    branch(300);
   // drawLine(300);    
 }

 function branch(len) {
   line(0, 0, 0, -len);
   translate(0, -len);
   
   //recursion
   if(len > 4) {
       push();
       rotate(angle);
       branch(len * 0.67);
       pop();
       push();
       rotate(-angle);
       branch(len * 0.67);
       pop();
   }
}

