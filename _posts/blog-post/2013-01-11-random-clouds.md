---
layout: post
date: 2013-01-11
title: "Cloud Generation"
categories:
- blog
---
<h5>Nature in Code</h5>
<p>
<script src="http://cloud.github.com/downloads/processing-js/processing-js/processing-1.4.1.min.js"></script>
<script type="application/processing" data-processing-target="pjs">
Inkblot friend;
int clicked = 0;

void setup() {
  size(500, 500);
  background(255);
  smooth();
  friend = new Inkblot();
}

void draw(){
   friend.draw(); 
}

void mouseDragged() {
  strokeWeight(4);
  line(friend.blot.x,friend.blot.y,friend.blot.x,friend.blot.y);
  line((600-friend.blot.x),friend.blot.y,(600-friend.blot.x),friend.blot.y);
}
void keyPressed(){
  if (key == CODED) {
    if (keyCode == ENTER) {
	//the line below allows the current sketch to open as tif in another tab
	saveFrame("rosarch-####.tif"); 
	}
  }
}
void mouseClicked() {

  background(255-clicked,255-(clicked)*(clicked),clicked,100);
  
  clicked++;
  
  if(clicked > 1){ 
    background(255-(clicked)*(clicked),255-random(255),255-random(255));
  }

 }   
 /* OpenProcessing Tweak of *@*http://www.openprocessing.org/sketch/39662*@* */
/* !do not delete the line above, required for linking your tweak if you re-upload */
import processing.pdf.*;


class Inkblot {

  PVector blot = new PVector(0, 0);
  boolean colorize;

  Inkblot() {
    blot.x = mouseX;
    blot.y = mouseY;
    colorize = false;
  }

  void draw() {

    strokeWeight(random(15)*random(5));
    blot.x = mouseX;
    blot.y = mouseY;

    if (!colorize) {
      stroke(0, random(90, 100));
      point(blot.x, blot.y);
      point((600-blot.x), blot.y);
    }
    else {
      stroke(random(255), random(255), random(255));
      point(blot.x, blot.y);
      point((600-mouseX), mouseY);
    }
  }
}

 </script> 
 <script type="application/processing" data-processing-target="cloud">

/**
* Title: Walking Cloud (w/ Vectors)
* Name: Maya Richman
* Date: January 14, 2013
* Assignment 2- Chapter 1-2 Exercise
**/
// Original by:
// Daniel Shiffman
// http://natureofcode.com

// A random walker object!

Walker w;
int opacity = 100;

void setup() {
  size(500, 500);
  background(65, 129, 254); //changed to bright blue
  // Create a walker object
  w = new Walker();
}

void draw() {
  // Run the walker object
  w.step();
  w.render();
}

void keyPressed() { //When the up arrow is pressed a green circle appears and enlarges increasing the step
  if (key == CODED) {
    if (keyCode == UP) {
      w.stepSize=w.stepSize+1;
      smooth();
      noStroke(); 
      fill(40, 450, 40, 50);
      ellipse(40, 450, w.stepSize - 1, w.stepSize - 1);
    }
    if (keyCode == DOWN) { //the down arrow makes a blue circle decrease and decreases the steps
      if (w.step != 0) {
        w.stepSize=w.stepSize-1;
      }
      fill(65, 129, 254); //changed to bright blue
      ellipse(40, 450, w.stepSize, w.stepSize);
    }
  }
}
/**
* Title: Walking Cloud (w/ Vectors)
* Name: Maya Richman
* Date: January 14, 2013
* Assignment 2- Chapter 1-2 Exercise
**/
// Original by:
// Daniel Shiffman
// http://natureofcode.com

// A random walker object!


class Walker {
  PVector location;
  int stepSize; //can this be part of a new pvector class


  Walker() {
    location = new PVector(width/2,height/2);
    stepSize = 5;
  }

  void render() {
    stroke(255);
    point(location.x,location.y);
  }

  // Randomly move up, down, left, right, or stay in one place
  void step() {
    int choice = int(random(4));
    //randomly decrement or increment x or y
    if (choice == 0) {
      location.x++;
    } else if (choice == 1) {
      location.x--;
    } else if (choice == 2) {
      location.y++;
    } else {
      location.y--;
    }

   float prob = random(1);
   //each option is as likely and takes 4 steps more than the original
   if(prob < .25){
     location.x=location.x+stepSize;
   }
   if(prob >= .25 && prob < .50){
     location.x=location.x-stepSize; 
   }
   if(prob >= .50 && prob < .75){
     location.y=location.y+stepSize; 
   }
   if(prob >= .75 && prob < 1){
     location.y=location.y-stepSize; 
   }
   
    location.x = constrain(location.x,0,width-1);
    location.y = constrain(location.y,0,height-1);
    
  }
}
</script>
<p>The following sketches are written in Processing, the second is based off of Daniel Shiffman's code examples from <a href='https://github.com/shiffman/The-Nature-of-Code'>"The Nature of Code"</a> and converted into Javascript with <a href='http://js.processing.org/'>Processing.js</a></p><p>
	 	 <canvas id="pjs"> </canvas></p>  
 <p><canvas id="cloud"> </canvas></p>