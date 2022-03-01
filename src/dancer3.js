var rotateDancer = function (top, left, timeBetweenSteps) {


  makeDancer.apply(this, arguments);
  this.$node = $('<span class="rotate"> <img src="src/assets/2cd43b_2f94a69c9d6e4603b8539d31e1fc31e4_mv2.png" width=100 height=100></img> </span>');
  // Dog img source for testing
  // src="src/assets/kindpng_5634840.png"

  this.setPosition(top, left);
};

rotateDancer.prototype = Object.create(makeDancer.prototype);
rotateDancer.prototype.constructor = rotateDancer;

rotateDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.slideToggle();
};
