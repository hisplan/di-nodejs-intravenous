"use strict";

var CoffeeMaker = function(grinder, heater, pump, model) {
    this.grinder = grinder;
    this.heater = heater;
    this.pump = pump;
    this.model = model;
};

CoffeeMaker.prototype.brew = function() {
  console.log('model name: %s', this.model);
  this.grinder.grind();
  this.pump.pump();
  this.heater.on();
};

CoffeeMaker.prototype.dispose = function() {
   console.log('Disposing CoffeeMaker'); 
};

CoffeeMaker.$inject = ['grinder', 'heater', 'pump'];
module.exports = CoffeeMaker;
