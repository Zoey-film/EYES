let eyesSketch = new p5((sketch) => {
  sketch.setup = function() {
    let canvas = sketch.createCanvas(400, 400);
    canvas.parent('eyes-container');
    sketch.colorMode(sketch.HSB);
    sketch.angleMode(sketch.DEGREES);
  };

  sketch.draw = function() {
    sketch.clear();

    // Draw left eye
    let leftX = 150;
    let leftY = 200;
    let leftAngle = sketch.atan2(sketch.mouseY - leftY, sketch.mouseX - leftX);

    sketch.push();
    sketch.translate(leftX, leftY);
    sketch.rotate(-15); // Tilt the eye slightly
    
    // Draw eye shape
    sketch.fill(255);
    sketch.beginShape();
    sketch.vertex(-30, 0);
    sketch.bezierVertex(-30, -15, -10, -20, 0, -15);
    sketch.bezierVertex(10, -10, 30, -5, 30, 0);
    sketch.bezierVertex(30, 5, 10, 10, 0, 8);
    sketch.bezierVertex(-10, 6, -30, 15, -30, 0);
    sketch.endShape();

    // Draw pupil
    sketch.push();
    sketch.rotate(leftAngle + 15); // Compensate for eye tilt
    sketch.fill(0);
    sketch.ellipse(8, 0, 15, 15);
    sketch.pop();
    sketch.pop();

    // Draw right eye
    let rightX = 250;
    let rightY = 200;
    let rightAngle = sketch.atan2(sketch.mouseY - rightY, sketch.mouseX - rightX);

    sketch.push();
    sketch.translate(rightX, rightY);
    sketch.rotate(-15); // Tilt the eye slightly
    
    // Draw eye shape
    sketch.fill(255);
    sketch.beginShape();
    sketch.vertex(-30, 0);
    sketch.bezierVertex(-30, -15, -10, -20, 0, -15);
    sketch.bezierVertex(10, -10, 30, -5, 30, 0);
    sketch.bezierVertex(30, 5, 10, 10, 0, 8);
    sketch.bezierVertex(-10, 6, -30, 15, -30, 0);
    sketch.endShape();

    // Draw pupil
    sketch.push();
    sketch.rotate(rightAngle + 15); // Compensate for eye tilt
    sketch.fill(0);
    sketch.ellipse(8, 0, 15, 15);
    sketch.pop();
    
    // Add eyelid crease
    sketch.noFill();
    sketch.stroke(0, 0, 0, 0.1);
    sketch.bezier(-20, -12, -5, -18, 5, -18, 20, -8);
    sketch.pop();
  };
}, 'eyes-container');