/* these are optional special variables which will change the system */
var systemBackgroundColor = "#264653";
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";

/* internal constants */
const darkBlue  = "#2A9D8F";
const lightBlue  = "#E9C46A";

const strokeColor  = "#F4A261";
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


  // draw two circles
  let size2 = letterData["size"];
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
   fill(244, 162, 97); //lighter orange   
   arc(arcX2, arcY2, size2, size2, start1, stop1);

  fill(231,111,81); //RED    
  arc(arcX1, arcY1, size2, size2, start, stop);

}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};


  let old_start = oldObj["start"];
  let new_start = newObj["start"];
  if (old_start < new_start) {
    new_start = new_start - 360;
  }

  let old_stop = oldObj["stop"];
  let new_stop = newObj["stop"];
  if (old_stop < new_stop) {
    new_stop = new_stop - 360;
  }

  let old_start1 = oldObj["start1"];
  let new_start1 = newObj["start1"];
  if (old_start1 > new_start1) {
    new_start1 = new_start1 + 360;
  }

  let old_stop1 = oldObj["stop1"];
  let new_stop1 = newObj["stop1"];
  if (old_stop1 > new_stop1) {
   new_stop1 = new_stop1 + 360;
  }
 
  new_letter["start"] = map(percent, 0, 100, old_start, new_start);
  new_letter["stop"] = map(percent, 0, 100, old_stop, new_stop);
  new_letter["start1"] = map(percent, 0, 100, old_start1, new_start1);
  new_letter["stop1"] = map(percent, 0, 100, old_stop1, new_stop1);

  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["rectX1"] = map(percent, 0, 100, oldObj["rectX1"], newObj["rectX1"]);
  new_letter["rectX2"] = map(percent, 0, 100, oldObj["rectX2"], newObj["rectX2"]);
  new_letter["rectY1"] = map(percent, 0, 100, oldObj["rectY1"], newObj["rectY1"]);
  new_letter["rectY2"] = map(percent, 0, 100, oldObj["rectY2"], newObj["rectY2"]);
  new_letter["arcX1"] = map(percent, 0, 100, oldObj["arcX1"], newObj["arcX1"]);
  new_letter["arcY1"] = map(percent, 0, 100, oldObj["arcY1"], newObj["arcY1"]);
  new_letter["arcX2"] = map(percent, 0, 100, oldObj["arcX2"], newObj["arcX2"]);
  new_letter["arcY2"] = map(percent, 0, 100, oldObj["arcY2"], newObj["arcY2"]);
  new_letter["sizewd"] = map(percent, 0, 100, oldObj["sizewd"], newObj["sizewd"]);
  new_letter["sizeht"] = map(percent, 0, 100, oldObj["sizeht"], newObj["sizeht"]);
  return new_letter;
}

var swapWords = [
  "ARCBLOCK", 
  "HARMONY?",
  "KEYBOARD",
  "LAUGHTER", 
  "ELEPHANT",
  "TRIANGLE",
  "BANANAS?"
]
