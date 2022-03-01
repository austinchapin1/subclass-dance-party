var squareDancer = function (top, left, timeBetweenSteps) {

  makeDancer.apply(this, arguments);
  this.$node = $('<span class="square"> <img src="src/assets/kindpng_5634840.png" width=100 height=100 ></img> </span>');

  this.setPosition(top, left);
  // this.step();
};

squareDancer.prototype = Object.create(makeDancer.prototype);
squareDancer.prototype.constructor = squareDancer;

squareDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.slideToggle();
};
