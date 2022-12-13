/*
Author: Finn Bergquist

This recursive fractal algorithm was inspired by Daniel
Schiffman from the Coding Train: https://thecodingtrain.com

There are four independent branch functions that draw a line,
and then make two recursive calls rotating the orientation
by a specified angle in both the positive and negative directions.
The lengths of the recursively called lines are slightly off
to make it impossible for perfect symmetry. Each of the four sections
and the background all have color sliders to create unique black
and white combinations.
*/

/*This code sets up the canvas and creates sliders for all 
of the necessary variables that change colors and angles*/
function setup() {
    createCanvas(700, 600);
    slider1 = createSlider(0, 1, 1 / 8, 0.01);
      slider2 = createSlider(0, 1, 1 / 8, 0.01);
      slider3 = createSlider(0, 1, 1 / 8, 0.01);
      slider4 = createSlider(0, 1, 1 / 8, 0.01);
      slider5 = createSlider(0, 255);
      slider6 = createSlider(0, 255);
      slider7 = createSlider(0, 255);
      slider8 = createSlider(0, 255);
      slider9 = createSlider(0, 255);
  }
  
  /*Draws the trees by calling the recursive methods
  to draw each of the four trees*/
  function draw() {
      //background color
    background(slider9.value());
      
      //Tree branch angles
    angle1 = slider1.value();
      angle2 = slider2.value();
      angle3 = slider3.value();
      angle4 = slider4.value();
      
      //Tree section colors
      color1 = slider5.value();
      color2 = slider6.value();
      color3 = slider7.value();
      color4 = slider8.value();
      
    translate(350, height);
    branch1(150);
      branch2(90);
      branch3(65);
      branch4(40);
  }
  
  /*First branch section, uses the color
  from the first of the color sliders*/
  function branch1(len) {
      stroke(color1)
    line(0, 0, 0, -len);
    translate(0, -len);
    if (len > 5) {
      push();
      rotate(angle1);
      branch1(len * 0.77);
      pop();
          rotate(-angle1);
      push();
      branch1(len * 0.7);
      pop();
    }
  }
  
  /*Second branch section, uses the color
  from the second of the color sliders*/
  function branch2(len) {
      stroke(color2)
    line(0, 0, 0, -len);
    translate(0, -len);
    if (len > 5) {
      push();
      rotate(-angle2);
      branch2(len * 0.67);
      pop();
          rotate(angle2);
      push();
      branch2(len * 0.78);
      pop();
    }
  }
  
  /*Third branch section, uses the color
  from the third of the color sliders*/
  function branch3(len) {
      stroke(color3)
    line(0, 0, 0, -len);
    translate(0, -len);
    if (len > 5) {
      push();
      rotate(angle3);
      branch3(len * 0.63);
      pop();
          rotate(-angle3);
      push();
      branch3(len * 0.69);
      pop();
    }
  }
  
  /*Fourth branch section, uses the color
  from the fourth of the color sliders*/
  function branch4(len) {
      stroke(color4)
    line(0, 0, 0, -len);
    translate(0, -len);
    if (len > 5) {
      push();
      rotate(-angle4);
      branch4(len * 0.72);
      pop();
          rotate(angle4);
      push();
      branch4(len * 0.84);
      pop();
    }
  }