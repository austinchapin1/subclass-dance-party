var squareDancer = function (top, left, timeBetweenSteps) {
  // Possibly add durationOfKey for further customization

  makeDancer.apply(this, arguments);
  this.$node = $('<img class="" src="assets/kindpng_5634840.png"></img>');
  this.$node.addClass('square');
  this.$node.removeClass('dancer');
  this.setPosition(top, left);
  this.step();

};

squareDancer.prototype = Object.create(makeDancer.prototype);
squareDancer.prototype.constructor = squareDancer;

squareDancer.prototype.step = function() {

  makeDancer.prototype.step.call(this);
  this.$node.slideToggle();
};
