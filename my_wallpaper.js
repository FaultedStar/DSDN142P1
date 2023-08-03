//your parameter variables go here!
let leafx = 100;
let leafy = 100;
let leafS = 50;
 // update colour on line 24  to 
let isBlue = false;

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(220, 255, 220); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  let Green = color(0, 150, 0)
  let blue = color(0, 0, 150)

  if (isBlue){
  drawLeaf(leafx, leafy, leafS,blue); // Draw a green leaf at the center
  }
  else{
    drawLeaf(leafx, leafy, leafS,Green); 
  }
}

function drawLeaf(x, y, leafSize, leafColor) { // this was reworded from a chat gpt promt. 
  // Draw the main leaf shape
  fill(leafColor);
  noStroke();
  beginShape();
  vertex(x, y);
  bezierVertex(x + leafSize * 0.8, y - leafSize * 0.5, x + leafSize * 0.2, y - leafSize * 0.5, x, y);
  bezierVertex(x - leafSize * 0.2, y + leafSize * 0.5, x - leafSize * 0.8, y - leafSize * 0.2, x, y);
  endShape(CLOSE);

  // Draw the stem
  stroke(leafColor);
  strokeWeight(5);
  line(x, y, x, y + leafSize);
}