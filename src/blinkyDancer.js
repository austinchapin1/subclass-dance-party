var makeBlinkyDancer = function(top, left, timeBetweenSteps) {

  makeDancer.apply(this, arguments);
  console.log(arguments);
  // Calling functions below make dancers work but tests not passing (TypeError: this.step is not a function)
  this.step();
  this.setPosition(top, left);
};


makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.toggle();
};

