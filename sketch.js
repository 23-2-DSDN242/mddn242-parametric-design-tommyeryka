const canvasWidth = 960;
const canvasHeight = 500;

/*
 * my three variable per letter are:
 *
   size: radius of the second circle (in pixels)
   offsetx: x offset (in pixels) of the second circle
            relative to the first one
   offsety: y offset (in pixels) of the second circle
            relative to the first one
 *
 */

const letterA = {
  "size": 80,
  "sizewd": 40,
  "sizeht": 40,
  "offsetx": 0,
  "offsety": 0,
  "rectX1" : -42,
  "rectY1" : 5,
  "rectX2" : 0,
  "rectY2" : +5,
  "arcX1" : -2,
  "arcY1" : -38,
  "arcX2" : 0,
  "arcY2" : +2,
  "start" : 90,
  "stop":180,
  "start1":270,
  "stop1":0
}

const letterB = {
  "size": 80,
  "sizewd": 40,
  "sizeht": 60,
  "offsetx": 0,
  "offsety": -15,
  "rectX1" : -40,
  "rectY1" : 5,
  "rectX2" : -40,
  "rectY2" : -58,
  "arcX1" : 2,
  "arcY1" : 5,
  "arcX2" : 2,
  "arcY2" : 2,
  "start":0,
  "stop":90,
  "start1":270,
  "stop1":0
}

const letterC = {
  "size": 80,
  "sizewd": 40,
  "sizeht": 40,
  "offsetx": 30,
  "offsety": 0,
  "rectX1" : -42,
  "rectY1" : 5,
  "rectX2" : -42,
  "rectY2" : -38,
  "arcX1" : -2,
  "arcY1" : 2,
  "arcX2" : -2,
  "arcY2" : 5,
  "start":180,
  "stop":0,
  "start1":0,
  "stop1":180
}

const backgroundColor  = "#264653";
const strokeColor      = "#03045e";

//const darkBlue  = "#0077b6";
//const lightBlue  = "#90e0ef";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(strokeColor);
  strokeWeight(2);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function draw () {
  // clear screen
  background(backgroundColor);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;
  let center_y = canvasHeight / 2;
 
  // draw the letters A, B, C from saved data
  drawLetter(center_x - 250, center_y, letterA);
  drawLetter(center_x      , center_y, letterB);
  drawLetter(center_x + 250, center_y, letterC);


}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  let size2 = letterData["size"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];

  let rectX1 = posx + letterData["rectX1"];
  let rectX2 = posx + letterData["rectX2"];
  let rectY1 = posy + letterData["rectY1"];
  let rectY2 = posy + letterData["rectY2"];
  let arcX1 = posx + letterData["arcX1"];
  let arcY1 = posy + letterData["arcY1"];
  let arcX2 = posx + letterData["arcX2"];
  let arcY2 = posy + letterData["arcY2"];//
  let start = radians(letterData ["start"]);
  let stop = radians (letterData ["stop"]);

  let start1 = radians(letterData ["start1"]);
  let stop1 = radians (letterData ["stop1"]);

  let wdSize = (letterData ["sizewd"]);
  let htSize = (letterData ["sizeht"]);

  // draw two rects 
  noStroke();
  fill(233,196,106); //orange 
  rect (rectX1  , rectY1 , wdSize,wdSize);

  fill(42,157,143 ); //light blue 
  rect (rectX2 , rectY2, wdSize,htSize);
   //first arc
  fill(231,111,81); //RED    
  arc(arcX1, arcY1, size2, size2, start, stop);
//second arc
  fill(244, 162, 97); //lighter orange   
  arc(arcX2, arcY2, size2, size2, start1, stop1);

  //dark blue 264653   38,70,83
  //2A9D8F  42,157,143 
  //E9C46A  233,196,106 orange
  //F4A261  244, 162, 97
  //E76F51  231,111,81
 


 
  //rect(posx, posy-50, 150, 150,10);
  //fill(lightBlue);
  
  //ellipse(pos2x, pos2y, size2, size2);

}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
