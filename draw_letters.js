/* these are optional special variables which will change the system */
var systemBackgroundColor = "#264653";
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";

/* internal constants */
const darkBlue  = "#2A9D8F";
const lightBlue  = "#E9C46A";

const strokeColor  = "#F4A261";
//2A9D8F  42,157,143 
  //E9C46A  233,196,106 orange
  //F4A261  244, 162, 97
  //E76F51  231,111,81
  let posx = 25;
  let posy = 50;

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
/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup
  
  stroke(strokeColor);
  strokeWeight(4);

  // determine parameters for second circle
  //let size2 = letterData["size"];
  //let pos2x = 50  + letterData["offsetx"];
  //let pos2y = 150 + letterData["offsety"];

  // draw two circles
  let size2 = letterData["size"];
 // let pos2x = posx + letterData["offsetx"];
  //let pos2y = posy + letterData["offsety"];

  let rectX1 = posx + letterData["rectX1"];
  let rectX2 = posx + letterData["rectX2"];
  let rectY1 = posy + letterData["rectY1"];
  let rectY2 = posy + letterData["rectY2"];
  let arcX1 = posx + letterData["arcX1"];
  let arcY1 = posy + letterData["arcY1"];
  let arcX2 = posx + letterData["arcX2"];
  let arcY2 = posy + letterData["arcY2"];
  
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

}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]
