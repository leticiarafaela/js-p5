function setup() {
 
    createCanvas(600, 600);
      background("pink");
  
  }
  
  function draw() {
    
     stroke("white")
     fill("rgb(112,32,112)")
    rect(mouseX,mouseY,40,45)
    // console.log(mouseIsPressed)
    
    if (mouseIsPressed) { 
   rect(mouseX, mouseY, 10, 25);
   }
  }