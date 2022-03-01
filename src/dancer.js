// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;

  this.$node = $('<span class="dancer"></span>');
  // Uncommenting line below made us pass on a specRunner
  // this.setPosition(top, left);
};


makeDancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left) {

  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

// Cannon's initial work
makeDancer.prototype.lineUp = function() {
  var styleSettings = {
    left: 0
  };
  this.$node.css(styleSettings);
};

makeDancer.prototype.disperse = function() {
  this.setPosition.bind(this);
};